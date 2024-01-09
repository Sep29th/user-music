import {
  Avatar,
  Button,
  Col,
  ConfigProvider,
  Form,
  Input,
  List,
  Modal,
  Row,
  Select,
  Tooltip,
  Upload,
} from "antd";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { PiQueueFill } from "react-icons/pi";
import GroupButtonOfSongItem from "../GroupButtonOfSongItem";
import Dragger from "antd/es/upload/Dragger";
import { IoCloudUploadOutline } from "react-icons/io5";
import { PlusOutlined } from "@ant-design/icons";
import { LuUpload } from "react-icons/lu";

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const CardSongEditOfSinger = (props) => {
  const { item, index } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [requestSend, setRequestSend] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <a className="song-item-list-a">
        <List.Item className="song-item-list-a">
          <List.Item.Meta
            avatar={
              <Avatar
                size={"large"}
                shape="square"
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${1}`}
              />
            }
            title={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span className="display-name-song-of-playlist">
                    {"song name"}
                  </span>
                  {" - "}
                  <span
                    className="display-name-singer-of-playlist"
                    style={{ color: "#999999", fontWeight: "300" }}
                  >
                    {"singer name"}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                  }}
                >
                  {requestSend ? (
                    <Button
                      disabled
                      onClick={() => setRequestSend(!requestSend)}
                    >
                      Sent !
                    </Button>
                  ) : (
                    <>
                      <Button type="primary" onClick={showModal}>
                        Edit
                      </Button>
                      <Button onClick={() => setRequestSend(!requestSend)}>
                        Send Request
                      </Button>
                    </>
                  )}
                </div>
              </div>
            }
            description={"release date: ${date} - Private"}
          />
        </List.Item>
      </a>
      <Modal
        title="Edit song"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        style={{ top: 20 }}
      >
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
          <Form layout="vertical" size="medium">
            <Row justify={"center"}>
              <Col span={24}>
                <Form.Item>
                  <Dragger accept="audio/*">
                    <p className="ant-upload-drag-icon">
                      <IoCloudUploadOutline style={{ fontSize: 60 }} />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag song file to this area to upload
                    </p>
                  </Dragger>
                </Form.Item>
                <Form.Item label="Name">
                  <Input />
                </Form.Item>
                <Form.Item label="Category">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    placeholder="Please select category"
                    options={options}
                  />
                </Form.Item>

                <Form.Item label="Collab Singer">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    placeholder="Please select category"
                    options={options}
                  />
                </Form.Item>

                <Form.Item
                  label="Upload Thumbnail"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload action="/upload.do" listType="picture-card">
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

                <Form.Item label="Upload lyrics" name={"file"}>
                  <Upload accept=".lrc">
                    <Button icon={<LuUpload />}>
                      Click to upload lyrics file
                    </Button>
                  </Upload>
                </Form.Item>

                <Form.Item style={{ display: "flex", justifyContent: "end" }}>
                  <div style={{ display: "flex", gap: 10 }}>
                    <Button type="primary" htmlType="submit">
                      Update
                    </Button>
                    <Button>Cancel</Button>
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </ConfigProvider>
      </Modal>
    </>
  );
};

export default CardSongEditOfSinger;
