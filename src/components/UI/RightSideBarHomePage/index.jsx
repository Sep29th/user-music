import {Avatar, List} from "antd";
import {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";
import {getAllPlaylistByUserId, getAllSongByPlaylistId} from "../../../services/api/playlist/index.js";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getFollowedSinger} from "../../../services/api/singer/index.js";
import SearchInputSelect from "../SearchInputSelect/index.jsx";

const GetAvatarSource = (props) => {
  const {item} = props;
  const [avatarSrc, setAvatarSrc] = useState("https://w7.pngwing.com/pngs/365/675/png-transparent-spotify-playlist-things-to-ruin-the-songs-of-joe-iconis-original-cast-recording-be-more-chill-black-and-white-spotify-logo-area-symbol-spotify.png");
  useEffect(() => {
    (async () => {
      const data = (await getAllSongByPlaylistId(item.id)).content[0].avatar;
      if (data) setAvatarSrc(data);
    })();
  }, []);
  return (
    <Avatar
      shape={"square"}
      size={"large"}
      src={avatarSrc}
    />
  );
}
const RightSideBarHomePage = () => {
  const authInfo = useSelector(state => state.auth);
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState({});
  const [singerFollowed, setSingerFollowed] = useState({});
  useEffect(() => {
    (async () => {
      setSingerFollowed(await getFollowedSinger(authInfo.id));
      setPlaylist(await getAllPlaylistByUserId(authInfo.id));
    })()
  }, []);
  return (
    <div style={{position: "sticky", top: "15px"}}>
      <SearchInputSelect/>
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
                    <GetAvatarSource item={item}/>
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
