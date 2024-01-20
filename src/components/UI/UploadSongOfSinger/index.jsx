import {
  Button,
  Col,
  ConfigProvider,
  Form,
  Input,
  notification,
  Row,
  Select,
  Upload,
} from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useEffect, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { PlusOutlined } from "@ant-design/icons";
import { LuUpload } from "react-icons/lu";
import { getAllCategory } from "../../../services/api/category/index.js";
import { getAllActiveSinger } from "../../../services/api/singer/index.js";
import { saveSong, uploadFileSound } from "../../../services/api/song/index.js";
import { useSelector } from "react-redux";

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const key = "updatable";
const UploadSongOfSinger = (props) => {
  const { reload, setReload } = props;
  const authInfo = useSelector((state) => state.auth);
  const [listCategory, setListCategory] = useState([]);
  const [listSinger, setListSinger] = useState([]);
  const [sourceSound, setSourceSound] = useState(null);
  const [thumbnailSrc, setThumbnailSrc] = useState(null);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (title, description) => {
    api["success"]({
      key,
      message: title,
      description: description,
    });
  };
  const optionCategory = listCategory.map((i) => {
    return {
      value: i.id,
      label: i.name,
    };
  });
  const optionSinger = listSinger.map((i) => {
    if (i.id === authInfo.id) {
      return {
        value: i.id,
        label: i.name,
        disabled: true,
      };
    }
    return {
      value: i.id,
      label: i.name,
    };
  });
  const onFinish = (values) => {
    (async () => {
      console.log(values);
      setLoading(true);
      let form1 = new FormData();
      form1.append("sound", values.mp3.file);
      form1.append("lyric", values.filelyric.file);
      form1.append("avatar", values.thumbnail[0].originFileObj);
      const linkS3 = (await uploadFileSound(form1)).content;
      values.singers = values.singers ? values.singers : [];
      values.singers.push(parseInt(authInfo.id));
      const newSong = await saveSong({
        name: values.name,
        fileSound: linkS3.sound,
        fileLyric: linkS3.lyric,
        avatar: linkS3.avatar,
        creator: { id: authInfo.id },
        singers: values.singers.map((i) => {
          return { id: i };
        }),
        categories: values.category.map((i) => {
          return { id: i };
        }),
      });
      setLoading(false);
      form.resetFields();
      setSourceSound(null);
      setThumbnailSrc(null);
      openNotification(
        "Thêm thành công",
        "Vào danh mục bài hát của bạn để xem chi tiết"
      );
      setReload(!reload);
    })();
  };
  useEffect(() => {
    (async () => {
      setListCategory((await getAllCategory()).content);
      setListSinger((await getAllActiveSinger()).content);
    })();
  }, []);
  return (
    <>
      {contextHolder}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#31c27c",
            colorPrimaryHover: "#31c27c",
            colorPrimaryBorder: "#31c27c",
          },
          components: {
            Input: {
              activeBorderColor: "#31c27c",
              hoverBorderColor: "#31c27c",
            },
          },
        }}
      >
        <Form layout="vertical" size="medium" onFinish={onFinish} form={form}>
          <Row justify={"center"}>
            <Col span={13}>
              <h2>Upload your music & audio and share.</h2>
            </Col>
            <Col span={12}>
              <Form.Item rules={[{ required: true }]} name={"mp3"}>
                <Dragger
                  multiple={false}
                  beforeUpload={(file) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      setSourceSound(e.target?.result + "");
                    };
                    reader.readAsDataURL(file);
                    return false;
                  }}
                  showUploadList={false}
                  accept="audio/*"
                >
                  <p className="ant-upload-drag-icon">
                    <IoCloudUploadOutline style={{ fontSize: 60 }} />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag song file to this area to upload
                  </p>
                </Dragger>
              </Form.Item>
              {sourceSound && (
                <audio controls src={sourceSound} style={{ width: "100%" }} />
              )}
              <Form.Item
                name={"name"}
                label="Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={"category"}
                label="Category"
                rules={[{ required: true }]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please select category"
                  options={optionCategory}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                />
              </Form.Item>

              <Form.Item
                name={"singers"}
                label="Collab Singer"
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  defaultValue={[authInfo.id]}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  placeholder="Please select singer"
                  options={optionSinger}
                />
              </Form.Item>

              <Form.Item
                rules={[{ required: true }]}
                label="Upload Thumbnail"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                name={"thumbnail"}
              >
                <Upload
                  multiple={false}
                  beforeUpload={(file) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      setThumbnailSrc(e.target?.result + "");
                    };
                    reader.readAsDataURL(file);
                    return false;
                  }}
                  showUploadList={false}
                  listType="picture-card"
                >
                  <button
                    style={{
                      border: 0,
                      background: "none",
                    }}
                    type="button"
                  >
                    <PlusOutlined />
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Upload
                    </div>
                  </button>
                </Upload>
              </Form.Item>
              {thumbnailSrc && (
                <img
                  style={{ width: 250, height: 250, aspectRatio: "1/1" }}
                  src={thumbnailSrc}
                />
              )}
              <Form.Item
                label="Upload lyrics"
                name={"filelyric"}
                rules={[{ required: true }]}
              >
                <Upload
                  multiple={false}
                  beforeUpload={() => {
                    return false;
                  }}
                  accept=".lrc"
                >
                  <Button icon={<LuUpload />}>
                    Click to upload lyrics file
                  </Button>
                </Upload>
              </Form.Item>

              <Form.Item style={{ display: "flex", justifyContent: "end" }}>
                <div style={{ display: "flex", gap: 10 }}>
                  <Button type="primary" htmlType={"submit"} loading={loading}>
                    Submit
                  </Button>
                  <Button>Cancel</Button>
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </ConfigProvider>
    </>
  );
};

export default UploadSongOfSinger;
