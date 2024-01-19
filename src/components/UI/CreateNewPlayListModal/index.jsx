import {
  Alert,
  Avatar,
  Button,
  Col,
  Form,
  Input,
  List,
  Row,
  Select,
} from "antd";
import { useState } from "react";
import "./style.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { IoMdClose } from "react-icons/io";
import { debounce } from "../../../helpers/debounce/index.js";
import {
  getAllActiveSong,
  getSongByName,
} from "../../../services/api/song/index.js";
import {
  addSongsToPlaylist,
  savePlaylistForUser,
} from "../../../services/api/playlist/index.js";
import { useDispatch, useSelector } from "react-redux";
import { addOnePlaylistToListPlaylist } from "../../../redux/actions/playlist/index.js";

const CreateNewPlaylistModal = (props) => {
  const { songTarget } = props;
  const authInfo = useSelector((state) => state.auth);
  const [listChoosed, setListChoosed] = useState(
    songTarget ? [songTarget] : []
  );
  const [listSearch, setListSearch] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [form] = Form.useForm();
  const onSelect = (value) => {
    if (listChoosed.length >= 1) setShowAlert(false);
    if (listChoosed.findIndex((i) => i.id === value) === -1)
      setListChoosed([...listChoosed, listSearch.find((i) => i.id === value)]);
  };
  const onFinish = (value) => {
    if (listChoosed.length < 2) {
      setShowAlert(true);
      return;
    }
    (async () => {
      setLoading(true);
      const newPlaylist = await savePlaylistForUser({
        name: value.name,
        creator: { id: authInfo.id },
      });
      const result = await addSongsToPlaylist(newPlaylist.content.id, {
        arraySong: listChoosed.map((i) => i.id),
      });
      dispatch(addOnePlaylistToListPlaylist(result.content));
      form.resetFields();
      setListChoosed([]);
      setListSearch([]);
      setLoading(false);
    })();
  };
  return (
    <>
      <h3>Playlist title: </h3>
      <Form onFinish={onFinish} form={form}>
        <Row gutter={[15, 8]}>
          <Col span={24}>
            <Form.Item
              style={{
                margin: "0",
              }}
              rules={[
                {
                  required: true,
                  message: "Please enter name of playlist",
                },
              ]}
              name={"name"}
            >
              <Input placeholder="Name of playlist" />
            </Form.Item>
          </Col>
          <Col span={24} style={{ display: "flex", justifyContent: "end" }}>
            <Form.Item>
              <Button
                loading={loading}
                htmlType="submit"
                className="btn-song-of-playlist"
              >
                Save
              </Button>
            </Form.Item>
          </Col>
          <Col span={24}>
            {showAlert && (
              <Alert
                style={{ width: "100%" }}
                message="Tối thiểu 2 bài hát"
                type="error"
                showIcon
              />
            )}
          </Col>
          <Col span={24}>
            <Select
              style={{ width: "100%" }}
              showSearch
              placeholder="Select some songs"
              optionFilterProp="children"
              onSelect={onSelect}
              onSearch={debounce((value) => {
                (async () => {
                  if (value === "") setListSearch([]);
                  else
                    setListSearch(
                      (await getAllActiveSong(value)).content.filter(
                        (i) =>
                          listChoosed.findIndex((k) => k.id === i.id) === -1
                      )
                    );
                })();
              }, 300)}
              filterOption={() => true}
              options={listSearch.map((i) => {
                return {
                  label: i.name,
                  value: i.id,
                };
              })}
            />
          </Col>
          <Col span={24}>
            <InfiniteScroll
              className={"rightSidebarScroll"}
              dataLength={2}
              height={240}
              scrollableTarget="scrollableDiv"
            >
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={listChoosed}
                renderItem={(item, index) => (
                  <List.Item
                    style={{
                      height: "50px !important",
                      padding: "5px !important",
                    }}
                  >
                    <List.Item.Meta
                      avatar={
                        item.avatar ? (
                          <Avatar
                            size={"small"}
                            shape="square"
                            src={item.avatar}
                          />
                        ) : (
                          <Avatar
                            size={"small"}
                            shape="square"
                            src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
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
                            <span
                              style={{ color: "#999999", fontWeight: "300" }}
                            >
                              {item.singers.map((i) => i.name).join(", ")}
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
                              icon={<IoMdClose />}
                              onClick={() =>
                                setListChoosed(
                                  listChoosed.filter((i) => i.id !== item.id)
                                )
                              }
                            />
                          </div>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </Col>
        </Row>
      </Form>
      <div></div>
    </>
  );
};

export default CreateNewPlaylistModal;
