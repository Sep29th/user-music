import {Avatar, List} from "antd";
import Search from "antd/es/input/Search";
import {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";
import {getAllPlaylistByUserId} from "../../../services/api/playlist/index.js";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getFollowedSinger} from "../../../services/api/singer/index.js";

const RightSideBarHomePage = () => {
  const authInfo = useSelector(state => state.auth);
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState({});
  const [singerFollowed, setSingerFollowed] = useState({});
  useEffect(() => {
    (async () => {
      setPlaylist(await getAllPlaylistByUserId(authInfo.id));
      setSingerFollowed(await getFollowedSinger(authInfo.id));
    })()
  }, []);
  return (
    <div style={{position: "sticky", top: "15px"}}>
      <Search
        placeholder="Search"
        onSearch={onSearch}
        size={"large"}
        style={{width: "100%"}}
      />
      <br/>
      <br/>
      <hr/>
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
          dataLength={singerFollowed.content ? singerFollowed.content.length : 0}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={singerFollowed.content ? singerFollowed.content : []}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    item.avatar ?
                      (
                        <Avatar
                          src={item.avatar}
                        />
                      ) : (
                        <Avatar
                          src={"https://bizweb.dktcdn.net/100/399/921/files/am-dao-gia-bay-che-do-pink-purry-2.jpg?v=1632850343690"}
                        />
                      )
                  }
                  title={<a onClick={() => navigate(`/singer-profile/${item.id}`)}>{item.name}</a>}
                  description={item.email}
                />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>

      <br/>
      <hr/>
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
          dataLength={playlist.content ? playlist.content.length : 0}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={playlist.content ? playlist.content : []}
            renderItem={(item) => (
              <List.Item key={item.id}>
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
                  title={<a onClick={() => navigate(`/list-song-of-playlist/${item.id}`)}>{item.name}</a>}
                  description={`release date: ${item.createdDate.slice(0, 10)}`}
                />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </div>
  );
};
export default RightSideBarHomePage;
