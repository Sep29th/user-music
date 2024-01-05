import { Button, Col, Row, Skeleton, Tooltip } from "antd";
import React, { useState } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";

const ItemPlaylist = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [status, setStatus] = useState(false);
  return (
    <Col
      span={24}
      style={{
        height: 70,
        padding: "10px 0px",
        borderBottom: "1px solid #cacaca",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <img
          src="https://i.pinimg.com/originals/4d/9b/a9/4d9ba9a5cb079194ef884d75105c12dc.png"
          style={{
            height: "100%",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
        />
        <span>nameplaylist</span>
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginRight: 8,
        }}
      >
        {status ? (
          <Tooltip
            placement="right"
            title={<span style={{ color: "#222222" }}>set to public</span>}
            color={"#fff"}
          >
            <Button
              size={"small"}
              className="btn-song-of-playlist"
              onClick={() => setStatus(!status)}
            >
              <FaLockOpen />
            </Button>
          </Tooltip>
        ) : (
          <Tooltip
            placement="right"
            title={<span style={{ color: "#222222" }}>set to private</span>}
            color={"#fff"}
          >
            <Button
              size={"small"}
              className="btn-song-of-playlist"
              onClick={() => setStatus(!status)}
            >
              <FaLock />
            </Button>
          </Tooltip>
        )}
        {isAdded ? (
          <Button
            size={"small"}
            className="btn-song-of-playlist"
            onClick={() => setIsAdded(!isAdded)}
          >
            Added
          </Button>
        ) : (
          <Button
            size={"small"}
            className="btn-song-of-playlist"
            onClick={() => setIsAdded(!isAdded)}
          >
            Add to playlist
          </Button>
        )}
      </div>
    </Col>
  );
};

const AddToPlaylistOfModal = () => {
  return (
    <>
      <InfiniteScroll
        className={"rightSidebarScroll"}
        dataLength={10}
        //next={loadMoreData}
        height={400}
        //hasMore={data.length < 50}

        scrollableTarget="scrollableDiv"
      >
        <Row>
          {[...Array(10)].map(() => {
            return <ItemPlaylist />;
          })}
        </Row>
      </InfiniteScroll>
    </>
  );
};

export default AddToPlaylistOfModal;
