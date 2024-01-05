import React, { useState } from "react";
import { FaHeart, FaPlay } from "react-icons/fa";
import "./style.css";
import { Button, Tooltip } from "antd";
import { PiQueueFill } from "react-icons/pi";
import { FaHeartBroken } from "react-icons/fa";
import { SlUserFollow, SlUserUnfollow } from "react-icons/sl";

const CardFollowingOfLibrary = () => {
  const [follow, setFollow] = useState(false);
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3e324332910289.569815b93bd38.jpg"
          style={{
            width: "100%",
            aspectRatio: "1/1",
            objectFit: "cover",
            borderRadius: "50%",
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
          textAlign: "center",
        }}
      >
        <span>Singer name</span>
      </a>
      <span
        style={{
          display: "inline-block",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "#969595",
          fontSize: 12,
          textAlign: "center",
          cursor: "default",
        }}
      >
        {"9999 followers"}
      </span>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {isHovered ? (
          <>
            {follow ? (
              <Button
                size="small"
                style={{ width: "50%" }}
                className="btn-song-of-playlist"
                icon={<SlUserFollow />}
                onClick={() => {
                  setFollow(!follow);
                }}
              >
                Follow
              </Button>
            ) : (
              <Button
                size="small"
                style={{ width: "50%" }}
                className="btn-song-of-playlist"
                icon={<SlUserUnfollow />}
                onClick={() => {
                  setFollow(!follow);
                }}
              >
                Unfollow
              </Button>
            )}
          </>
        ) : (
          <div style={{ height: 24 }}></div>
        )}
      </div>
    </div>
  );
};

export default CardFollowingOfLibrary;
