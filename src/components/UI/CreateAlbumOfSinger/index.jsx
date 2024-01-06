import { Avatar, Button, Col, List, Row, Upload } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import CardSongItem from "../CardSongItem";
import { IoMdClose } from "react-icons/io";
import { PlusOutlined } from "@ant-design/icons";

const CreateAlbumOfSinger = () => {
  return (
    <>
      <Row>
        <Col span={13}>
          <Search size="large" placeholder="Search for name song" />
        </Col>
        <Col span={5}></Col>

        <Col span={1} style={{ display: "flex", justifyContent: "center" }}>
          <Upload
            action="/upload.do"
            listType="picture-card"
            style={{ display: "flex", justifyContent: "center" }}
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
        </Col>
        <Col span={5} style={{ display: "flex", justifyContent: "end" }}>
          <Button className="btn-song-of-playlist" size="large">
            Save
          </Button>
        </Col>
        <Col span={13}>
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
                        <span style={{ color: "#999999", fontWeight: "300" }}>
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
        </Col>
      </Row>
    </>
  );
};

export default CreateAlbumOfSinger;
