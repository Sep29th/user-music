import { Avatar, Button, Col, List, Row, Skeleton, Statistic } from "antd";
import { FaClock, FaPlay } from "react-icons/fa";
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
import { SiGmail } from "react-icons/si";
import { FaLink } from "react-icons/fa";

import "./style.css";
import { useState } from "react";
import TracksOfSinger from "../../components/UI/TracksOfSinger";
import AlbumsOfSinger from "../../components/UI/AlbumsOfSinger";
import CardPlaylistOfSinger from "../../components/UI/CardPlaylistOfSinger";
import PlaylistOfSinger from "../../components/UI/PlaylistOfSinger";
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
      children: <PlaylistOfSinger />,
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

            <Col span={24}>
              <hr />
              <h3>About: </h3>
              <p>
                This is Juice WRLD's official channel. Chicago-area hip-hop
                musician Juice WRLD delivers introspective lyrics atop melodic
                production, echoing Travis Scott and Post Malone.
                <br /> <br />
                Born Jarad Higgins in 1998, the Calumet Park artist grew up
                playing piano, drums, and guitar, turning to rap freestyling in
                high school. Influenced by rock music and Chicago drill from Lil
                Durk and Chief Keef, Higgins began recording as Juice TheKidd, a
                moniker derived from his haircut, which resembled 2Pac's in the
                film Juice. His early tracks were all posted online, leading up
                to 2017's Juice WRLD 999 EP. <br /> <br />
                Produced by Nick Mira and Sidepce, the set included the singles
                "Lucid Dreams (Forget Me)" and "All Girls Are the Same". Both
                tracks would also land on his official debut full-length album,
                Goodbye & Good Riddance, which peaked at number 15 on the
                Billboard 200 upon release in May 2018.
              </p>
            </Col>

            <Col span={24}>
              <hr />
              <div
                style={{
                  marginTop: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                }}
              >
                <a
                  className="singer-profile-link"
                  href="mailto:{email}"
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <SiGmail fontSize={28} />{" "}
                  <span style={{ fontSize: 20 }}>
                    Mail - {"email@example.com"}
                  </span>
                </a>
                <a
                  className="singer-profile-link"
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <FaLink fontSize={28} />{" "}
                  <span style={{ fontSize: 20 }}>
                    Social link - {"http://link.com"}
                  </span>
                </a>
                <a
                  className="singer-profile-link"
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <FaClock fontSize={28} />{" "}
                  <span style={{ fontSize: 20 }}>
                    Joined at: {"dd-mm-yyyy"}
                  </span>
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SingerProfile;
