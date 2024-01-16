import {Alert, Avatar, Button, Col, Form, Input, List, notification, Row, Select, Upload} from "antd";
import {IoMdClose} from "react-icons/io";
import {useEffect, useState} from "react";
import {IoCloudUploadOutline} from "react-icons/io5";
import {getAllSongByCreatorId} from "../../../services/api/song/index.js";
import {uploadAvatar} from "../../../services/api/singer/index.js";
import {addAlbum} from "../../../services/api/album/index.js";
import {useSelector} from "react-redux";

const {Dragger} = Upload;
const CreateAlbumOfSinger = () => {
  const authInfo = useSelector(state => state.auth);
  const [imgSrc, setImgSrc] = useState(null);
  const [listChoosed, setListChoosed] = useState([]);
  const [listSearch, setListSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (message, description) => {
    api['success']({
      message: message,
      description: description
    });
  };
  const onFinish = (value) => {
    if (listChoosed.length < 2) {
      setShowAlert(true);
      return;
    }
    (async () => {
      setLoading(true);
      let formData = new FormData();
      formData.append("avatar", value.fileThumbnail.file);
      const linksS3 = (await uploadAvatar(formData)).content;
      await addAlbum({
        thumbnail: linksS3,
        name: value.name,
        singer: {id: authInfo.id},
        songs: listChoosed.map(i => {
          return {id: i.id}
        })
      });
      form.resetFields();
      setListChoosed([]);
      setListSearch([]);
      setLoading(false);
      openNotificationWithIcon('Create success', 'Create albums success, go to your albums for check');
    })()
  }
  const onSelect = (value) => {
    if (listChoosed.length >= 1) setShowAlert(false);
    if (listChoosed.findIndex(i => i.id === value) === -1)
      setListChoosed([...listChoosed, listSearch.find(i => i.id === value)]);
  }
  useEffect(() => {
    (async () => {
      const data = await getAllSongByCreatorId(authInfo.id);
      if (data.content)
        setListSearch(data.content);
    })()
  }, [authInfo.id]);
  return (
    <>
      {contextHolder}
      <Form onFinish={onFinish} form={form}>
        <Row gutter={[15, 15]}>
          <Col span={12}>
            <Select
              size={"large"}
              style={{width: "100%"}}
              showSearch
              placeholder="Select some songs"
              optionFilterProp="children"
              onSelect={onSelect}
              filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
              options={listSearch.map(i => {
                return {
                  label: i.name,
                  value: i.id
                }
              })}
            />
          </Col>
          <Col span={12}>
            <Form.Item name={"name"} rules={[{required: true, message: "Albums must have name"}]}>
              <Input size={"large"} placeholder={"Name of album"}/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <List
              size="small"
              itemLayout="horizontal"
              dataSource={listChoosed}
              renderItem={(item, ind) => (
                <List.Item
                  key={ind}
                  style={{
                    height: "50px !important",
                    padding: "5px !important",
                  }}
                >
                  <List.Item.Meta
                    avatar={
                      item.avatar ?
                        (
                          <Avatar
                            size={"small"}
                            shape="square"
                            src={item.avatar}
                          />
                        ) : (
                          <Avatar
                            size={"small"}
                            shape="square"
                            src={"https://play-lh.googleusercontent.com/D9X7m5dTNzjeSPxBqzh1RwrZLXJDFTpht9-8W8RJtiaOAlFxNvL5MnSDRxoDnQRYhz0"}
                          />
                        )
                    }
                    title={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <span>{item.name}</span>
                          {" - "}
                          <span style={{color: "#999999", fontWeight: "300"}}>
                          {item.singers.map(i => i.name).join(", ")}
                        </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            gap: 10,
                          }}
                        >
                          <Button
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            size="small"
                            shape="circle"
                            onClick={() => setListChoosed(listChoosed.filter(i => i.id !== item.id))}
                            icon={<IoMdClose/>}
                          />
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={2}></Col>
          <Form.Item rules={[{required: true, message: "Albums must have thumbnail"}]} name={"fileThumbnail"} style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: 300,
            height: 300,
            overflow: "hidden",
            margin: 0,
            padding: 0
          }}>
            <Dragger
              multiple={false}
              showUploadList={false}
              accept={"image/*"}
              beforeUpload={(file) => {
                const reader = new FileReader();
                reader.onload = e => {
                  setImgSrc(e.target?.result + "");
                };
                reader.readAsDataURL(file);
                return false;
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                zIndex: 999,
                width: 300,
                height: 300,
                overflow: "hidden",
                position: "relative"
              }}
            >
              {imgSrc && <img src={imgSrc} alt={"example"} style={{
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                height: "184px",
                width: "100%",
                opacity: "0.8",
              }}/>}
              <p className="ant-upload-drag-icon">
                <IoCloudUploadOutline style={{fontSize: 60}}/>
              </p>
              <p className="ant-upload-text">
                Click or drag image file to this area to upload thumbnail
              </p>
            </Dragger>
          </Form.Item>
          <Col span={4} style={{display: "flex", justifyContent: "end"}}>
            <Form.Item>
              <Button loading={loading} className="btn-song-of-playlist" htmlType={"submit"} size="large">
                Save
              </Button>
            </Form.Item>
          </Col>
          <Col span={12}>
            {showAlert && <Alert style={{width: "100%"}} message="Tối thiểu 2 bài hát" type="error" showIcon/>}
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CreateAlbumOfSinger;
