import { Avatar, Button, Col, List, Row, Skeleton, Statistic } from "antd";
import { FaPlay } from "react-icons/fa";
import { MdQueuePlayNext } from "react-icons/md";
import { Tabs } from "antd";
import { LikeOutlined } from "@ant-design/icons";

import VirtualList from "rc-virtual-list";
import { IoMdPlay } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { PiQueueFill } from "react-icons/pi";

import { SlUserUnfollow } from "react-icons/sl";

import { SlUserFollow } from "react-icons/sl";
import { RiUserFollowLine } from "react-icons/ri";

import "./style.css";
import { useState } from "react";
import TracksOfSinger from "../../components/UI/TracksOfSinger";
import AlbumsOfSinger from "../../components/UI/AlbumsOfSinger";
const SingerProfile = () => {
  const [follow, setFollow] = useState(false);
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Tracks",
      children: <TracksOfSinger />,
    },
    {
      key: "2",
      label: "Album",
      children: <AlbumsOfSinger />,
    },
    {
      key: "3",
      label: "Playlist",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <>
      <Row justify={"center"}>
        <Col span={20}>
          <div
            style={{
              backgroundImage: "linear-gradient(90deg, #847983, #302c2d)",
              height: 260,
            }}
          >
            <Row style={{ height: "100%" }} justify="space-between">
              <Col
                span={10}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/c/cf/Dragon_Ball_The_Path_to_Power.jpg"
                  style={{
                    width: 200,
                    height: 200,
                    marginRight: 20,
                    borderRadius: "50%",
                    margin: "0px 30px 0px 30px",
                  }}
                />
                <span
                  style={{
                    padding: 5,
                    marginLeft: 5,
                    fontSize: 24,
                    color: "#fff",
                    fontWeight: 700,
                    letterSpacing: 1,
                    paddingBottom: 120,
                  }}
                >
                  Name Singer
                  <br />
                  <span style={{ fontSize: 16, fontWeight: 300 }}>
                    Real name of singer
                  </span>
                  <br />
                  {follow ? (
                    <Button
                      className="btn-song-of-playlist"
                      icon={<SlUserFollow />}
                      onClick={() => {
                        setFollow(!follow);

                        console.log("check state: ", follow);
                      }}
                    >
                      Follow
                    </Button>
                  ) : (
                    <Button
                      className="btn-song-of-playlist"
                      icon={<SlUserUnfollow />}
                      onClick={() => {
                        setFollow(!follow);
                        console.log("check state: ", follow);
                      }}
                    >
                      Unfollow
                    </Button>
                  )}
                </span>
              </Col>
              {/* <Col
                span={16}
                style={{
                  padding: 25,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      padding: 5,
                      marginLeft: 5,
                      fontSize: 24,
                      color: "#fff",
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    Name Singer
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "end",
                    gap: 20,
                  }}
                ></div>
              </Col> */}
            </Row>
          </div>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col span={13}>
          <Tabs
            size="large"
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          />
        </Col>
        <Col
          span={6}
          style={{
            paddingLeft: 16,
            paddingTop: 16,
            marginLeft: 16,
            borderLeft: "1px solid #f7f7f7",
          }}
        >
          <Row gutter={[15, 0]}>
            <Col span={8}>
              <Statistic title="Follower" value={4953} />
            </Col>
            <Col span={8}>
              <Statistic title="Following" value={1} />
            </Col>
            <Col span={8}>
              <Statistic title="Tracks" value={20} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SingerProfile;
