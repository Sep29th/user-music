import React from "react";
import { Button, Card, Flex, Popover } from "antd";
import "./style.css";
import { FaPlay } from "react-icons/fa";
const { Meta } = Card;
import { IoIosMore } from "react-icons/io";
import { MdOutlineQueueMusic } from "react-icons/md";

const CardAlbumOfSinger = () => (
  <Card
    className="card-album"
    bodyStyle={{ padding: 2 }}
    bordered={true}
    // hoverable
    style={{
      width: 160,
      marginBottom: 16,
      overflow: "hidden",
      boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
    }}
    size="large"
    cover={
      <div
        style={{ padding: 16, width: 160, height: 160, background: "#f7f7f7" }}
      >
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          style={{
            width: 128,
            height: 128,
            display: "flex",
            alignItems: "center",
          }}
        />
      </div>
    }
  >
    <Card.Meta
      title={
        <div
          style={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <span style={{ width: "100%", textAlign: "center" }}>name album</span>
          {/* <Popover
            content={
              <div
                className="hover-add-to-queue"
                style={{
                  display: "flex",
                  width: 160,
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                <span>Add to queue</span>
                <MdOutlineQueueMusic
                  style={{ fontSize: 24, color: "#31c27c" }}
                />
              </div>
            }
            placement="bottomLeft"
          >
            <a
              style={{
                color: "#31c27c",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoIosMore style={{ fontSize: 20 }} />
            </a>
          </Popover> */}
        </div>
      }
      //description="singer name: asbasnc"
      style={{ padding: "0px 5px 5px 5px" }}
    />
  </Card>
);
export default CardAlbumOfSinger;
