import React from "react";
import { Button, Card, Flex, Popover } from "antd";
import "./style.css";
import { FaPlay } from "react-icons/fa";
const { Meta } = Card;
import { IoIosMore } from "react-icons/io";
import { MdOutlineQueueMusic } from "react-icons/md";

const CardItemSongHomepage = () => (
  <Card
    bodyStyle={{ padding: 2 }}
    bordered={true}
    hoverable
    style={{
      width: 160,
      marginBottom: 16,
    }}
    size="small"
    cover={
      <>
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          style={{
            width: 160,
            height: 160,
          }}
        />{" "}
        <Button
          className="btn-play-song"
          shape="circle"
          icon={<FaPlay />}
          size="large"
          style={{ marginTop: -18, marginLeft: 12, zIndex: "999 !important" }}
        />
      </>
    }
  >
    <Card.Meta
      title={
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>name song</span>
          <Popover
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
          </Popover>
        </div>
      }
      description="singer name: asbasnc"
      style={{ padding: "0px 5px 5px 5px" }}
    />
  </Card>
);
export default CardItemSongHomepage;
