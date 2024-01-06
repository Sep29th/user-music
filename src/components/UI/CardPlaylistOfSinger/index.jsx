import { Avatar, Button, Col, Divider, List, Skeleton, Tooltip } from "antd";
import { FaHeart } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { PiQueueFill } from "react-icons/pi";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";
import GroupButtonOfSongItem from "../GroupButtonOfSongItem";

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

const CardPlaylistOfSinger = () => {
  return (
    <>
      <Col span={4}>
        <a href="">
          <img
            src="https://i.pinimg.com/originals/bd/11/21/bd1121d056ec8e2d3f333372cfef5e51.jpg"
            style={{
              width: "100%",
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
          />
        </a>
        <a style={{ color: "#2c2c2c" }}>
          <b>name playlist</b>
        </a>
      </Col>
      <Col span={20}>
        <div
          style={{
            display: "flex",
            gap: 10,
            marginLeft: 16,
          }}
        >
          <Tooltip placement="bottomRight" title={"Play all now"}>
            <Button
              shape="circle"
              size={"large"}
              className="btn-song-of-playlist"
              style={{
                display: "flex",

                justifyContent: "center",
              }}
            >
              <IoMdPlay style={{ fontSize: 20 }} />
            </Button>
          </Tooltip>

          <Tooltip placement="bottomLeft" title={"Add to queue"}>
            <Button
              shape="circle"
              size={"large"}
              className="btn-song-of-playlist"
              style={{
                display: "flex",

                justifyContent: "center",
              }}
            >
              <PiQueueFill style={{ fontSize: 20 }} />
            </Button>
          </Tooltip>
        </div>

        <div style={{ marginTop: 12 }} id={"scrollableDiv"}>
          <InfiniteScroll
            className={"rightSidebarScroll"}
            dataLength={data.length}
            //next={loadMoreData}
            height={200}
            hasMore={data.length < 50}
            loader={
              <Skeleton
                avatar
                paragraph={{
                  rows: 1,
                }}
                active
              />
            }
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              size="small"
              itemLayout="horizontal"
              dataSource={data}
              renderItem={() => (
                <a className="song-item-list-a">
                  <List.Item className="song-item-list-a">
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          size={"small"}
                          shape="square"
                          src={`https://d21buns5ku92am.cloudfront.net/26628/images/419679-1x1_SoundCloudLogo_cloudmark-f5912b-large-1645807040.jpg`}
                        />
                      }
                      title={
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <a
                            href=""
                            className="display-name-song-of-playlist"
                            style={{ fontSize: 14 }}
                          >
                            {"song name"}
                            {" - "}
                            <span
                              style={{ color: "#999999", fontWeight: "300" }}
                            >
                              {"singer name"}
                            </span>
                          </a>

                          <div
                            style={{
                              display: "flex",
                              gap: 10,
                            }}
                          >
                            <GroupButtonOfSongItem />
                          </div>
                        </div>
                      }
                    />
                  </List.Item>
                </a>
              )}
            />
          </InfiniteScroll>
        </div>
      </Col>
      <Col span={22}>
        <Divider plain></Divider>
      </Col>
    </>
  );
};

export default CardPlaylistOfSinger;
