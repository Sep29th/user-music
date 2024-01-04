import {Avatar, Button, Col, List, Row, Tooltip} from "antd";
import {FaHeart, FaPlay} from "react-icons/fa";
import {MdQueuePlayNext} from "react-icons/md";
import {IoMdPlay} from "react-icons/io";
import {PiQueueFill} from "react-icons/pi";

import "./style.css";
import {useState} from "react";

const ListSongOfPlaylist = () => {
  const [showButton, setShowButton] = useState(false);
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

  return (
    <>
      <Row justify={"center"}>
        <Col span={20}>
          <div
            style={{
              backgroundImage: "linear-gradient(90deg, #847983, #302c2d)",
              height: 380,
            }}
          >
            <Row style={{height: "100%"}} justify="space-between">
              <Col
                span={16}
                style={{
                  padding: 25,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{display: "flex"}}>
                  <Tooltip placement={"top"} color={"#fff"} title={<span style={{color: "#222222"}}>Play all songs now</span>}>
                    <Button
                      className="btn-play-song"
                      shape="circle"
                      icon={<FaPlay style={{fontSize: 32}}/>}
                      size="large"
                      style={{
                        padding: 30,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  </Tooltip>
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
                    Name PLaylist
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "end",
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      borderRadius: "50%",
                      background: "#000",
                      padding: 18,
                      width: 80,
                      height: 80,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{color: "#fff", fontSize: 36, fontWeight: 500}}
                    >
                      25
                    </span>
                    <br/>
                    <span style={{color: "#fff", fontSize: 18}}>TRACKS</span>
                  </div>

                  <Button
                    className={"btn-song-of-playlist"}
                    style={{display: "flex", gap: 10, alignItems: "center"}}
                  >
                    <MdQueuePlayNext/>
                    Add to next up
                  </Button>
                </div>
              </Col>

              <Col
                span={7}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/c/cf/Dragon_Ball_The_Path_to_Power.jpg"
                  style={{
                    width: 340,
                    height: 340,
                    marginRight: 20,
                  }}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col span={20}>
          <List
            size="small"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <a className="song-item-list-a">
                <List.Item className="song-item-list-a">
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
                        <a href="" className="display-name-song-of-playlist">
                          {"song name"}
                          {" - "}
                          <a className="display-name-singer-of-playlist" style={{color: "#999999", fontWeight: "300"}}>
                            {"singer name"}
                          </a>
                        </a>

                        <div
                          style={{
                            display: "flex",
                            gap: 10,
                          }}
                        >
                          <Tooltip placement="bottomRight" title={<span style={{color: "#222222"}}>Play now</span>} color={"#fff"}>
                            <Button
                              size={"small"}
                              className="btn-song-of-playlist"
                            >
                              <IoMdPlay/>
                            </Button>
                          </Tooltip>
                          <Tooltip placement="bottom" title={<span style={{color: "#222222"}}>Like this song</span>} color={"#fff"}>
                            <Button
                              size={"small"}
                              className="btn-song-of-playlist"
                            >
                              <FaHeart/>
                            </Button>
                          </Tooltip>

                          <Tooltip
                            placement="bottomLeft"
                            title={<span style={{color: "#222222"}}>Add to queue</span>}
                            color={"#fff"}
                          >
                            <Button
                              size={"small"}
                              className="btn-song-of-playlist"
                            >
                              <PiQueueFill/>
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    }
                    //description={"singer: name"}
                  />
                </List.Item>
              </a>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default ListSongOfPlaylist;
