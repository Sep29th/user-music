import { Avatar, Button, Col, Form, Input, List, Radio, Row } from "antd";
import React, { useState } from "react";
import "./style.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { IoMdClose } from "react-icons/io";
import Search from "antd/es/input/Search";
const CreateNewPlaylistModal = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <h3>Playlist title: </h3>
      <Form>
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
            >
              <Input placeholder="Name of playlist" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Radio.Group onChange={onChange} value={value}>
                <Radio defaultChecked value={1} className="">
                  Public
                </Radio>
                <Radio value={2}>Private</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12} style={{ display: "flex", justifyContent: "end" }}>
            <Form.Item>
              <Button htmlType="submit" className="btn-song-of-playlist">
                Save
              </Button>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Search placeholder="Looking more song, search something..." />
          </Col>
          <Col span={24}>
            <InfiniteScroll
              className={"rightSidebarScroll"}
              dataLength={2}
              //next={loadMoreData}
              height={240}
              //hasMore={data.length < 50}

              scrollableTarget="scrollableDiv"
            >
              <List
                size="small"
                itemLayout="horizontal"
                dataSource={[...Array(10)].map((item, index) => {
                  return {
                    key: index,
                  };
                })}
                renderItem={(item, index) => (
                  <List.Item
                    style={{
                      height: "50px !important",
                      padding: "5px !important",
                    }}
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          size={"small"}
                          shape="square"
                          src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
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
                            <span>{"song name"}</span>
                            {" - "}
                            <span
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
                            <Button
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              size="small"
                              shape="circle"
                              icon={<IoMdClose />}
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
