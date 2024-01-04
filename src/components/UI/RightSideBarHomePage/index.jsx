import { Avatar, Divider, List, Skeleton } from "antd";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";
const RightSideBarHomePage = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div style={{position: "sticky", top: "15px"}}>
      <Search
        placeholder="Search"
        onSearch={onSearch}
        size={"large"}
        style={{ width: "100%" }}
      />
      <br />
      <br />
      <hr />
      <h3>Singer you followed</h3>
      <div
        id="scrollableDiv"
        style={{
          height: 300,
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
        }}
      >
        <InfiniteScroll
          className={"rightSidebarScroll"}
          dataLength={data.length}
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
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.email}>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={
                        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                      }
                    />
                  }
                  title={<a href="">{item.name.last}</a>}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>

      <br />
      <hr />
      <h3>Your Playlist</h3>
      <div
        id="scrollableDiv"
        style={{
          height: 300,
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
        }}
      >
        <InfiniteScroll
          className={"rightSidebarScroll"}
          dataLength={data.length}
          //next={loadMoreData}
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
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.email}>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      shape={"square"}
                      size={"large"}
                      src={
                        "https://w7.pngwing.com/pngs/365/675/png-transparent-spotify-playlist-things-to-ruin-the-songs-of-joe-iconis-original-cast-recording-be-more-chill-black-and-white-spotify-logo-area-symbol-spotify.png"
                      }
                    />
                  }
                  title={<a href="">{item.name.last}</a>}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </div>
  );
};
export default RightSideBarHomePage;
