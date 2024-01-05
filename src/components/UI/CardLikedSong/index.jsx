import React, { useState } from "react";
import { FaHeart, FaPlay } from "react-icons/fa";
import "./style.css";
import { Button, Tooltip } from "antd";
import { PiQueueFill } from "react-icons/pi";
import { FaHeartBroken } from "react-icons/fa";

const CardLikedSong = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isHovered && (
          <>
            <Tooltip
              placement="top"
              title={<span style={{ color: "#222222" }}>Play</span>}
              color={"#fff"}
            >
              <Button
                className="btn-play-song"
                shape="circle"
                icon={<FaPlay style={{ fontSize: 32 }} />}
                size="large"
                style={{
                  padding: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "70px",
                  left: "70px",
                }}
              />
            </Tooltip>
            <div
              style={{
                position: "absolute",
                display: "flex",
                gap: 8,
                bottom: 60,
                right: 10,
              }}
            >
              <Tooltip
                placement="bottom"
                title={
                  <span style={{ color: "#222222" }}>Unlike this song</span>
                }
                color={"#fff"}
              >
                <Button size={"small"} className="btn-song-of-playlist">
                  <FaHeartBroken />
                </Button>
              </Tooltip>

              <Tooltip
                placement="bottomLeft"
                title={<span style={{ color: "#222222" }}>Add to queue</span>}
                color={"#fff"}
              >
                <Button size={"small"} className="btn-song-of-playlist">
                  <PiQueueFill />
                </Button>
              </Tooltip>
            </div>
          </>
        )}
        <img
          src="https://genk.mediacdn.vn/k:thumb_w/640/2015/a-png-1438657076162/nhung-su-that-la-lung-ve-dai-ma-vuong-piccolo-trong-dragon-ball.png"
          style={{
            width: "100%",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
        />
      </a>
      <a
        className="display-name-song-of-card-liked-song"
        style={{
          display: "inline-block",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "#424242",
          fontSize: 16,
        }}
      >
        <FaHeart style={{ fontSize: 12 }} /> <span>Song name</span>
      </a>
      <a
        className="display-name-song-of-card-liked-song"
        style={{
          display: "inline-block",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "#969595",
          fontSize: 14,
        }}
      >
        <span> {"Singername"}</span>
      </a>
    </div>
  );
};

export default CardLikedSong;
