import { Avatar, Button, List, Tooltip } from "antd";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { PiQueueFill } from "react-icons/pi";

const CardSongItem = (props) => {
  const { item, index } = props;

  return (
    <>
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
                <div>
                  <a href="" className="display-name-song-of-playlist">
                    {"song name"}
                  </a>
                  {" - "}
                  <a
                    href=""
                    className="display-name-singer-of-playlist"
                    style={{ color: "#999999", fontWeight: "300" }}
                  >
                    {"singer name"}
                  </a>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <Tooltip
                    placement="bottomRight"
                    title={<span style={{ color: "#222222" }}>Play now</span>}
                    color={"#fff"}
                  >
                    <Button size={"small"} className="btn-song-of-playlist">
                      <IoMdPlay />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    placement="bottom"
                    title={
                      <span style={{ color: "#222222" }}>Like this song</span>
                    }
                    color={"#fff"}
                  >
                    <Button size={"small"} className="btn-song-of-playlist">
                      <FaHeart />
                    </Button>
                  </Tooltip>

                  <Tooltip
                    placement="bottomLeft"
                    title={
                      <span style={{ color: "#222222" }}>Add to queue</span>
                    }
                    color={"#fff"}
                  >
                    <Button size={"small"} className="btn-song-of-playlist">
                      <PiQueueFill />
                    </Button>
                  </Tooltip>
                </div>
              </div>
            }
            //description={"singer: name"}
          />
        </List.Item>
      </a>
    </>
  );
};

export default CardSongItem;
