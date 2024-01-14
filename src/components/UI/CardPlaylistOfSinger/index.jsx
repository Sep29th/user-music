import {Avatar, Button, Col, Divider, List, Tooltip} from "antd";
import {IoMdPlay} from "react-icons/io";
import {PiQueueFill} from "react-icons/pi";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";
import GroupButtonOfSongItem from "../GroupButtonOfSongItem";
import {useEffect, useState} from "react";
import {getAllSongByPlaylistId} from "../../../services/api/playlist/index.js";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addSongList, playListSongNow} from "../../../redux/actions/songQueue/index.js";

const CardPlaylistOfSinger = (props) => {
  const {item} = props;
  const [listSongOfPlaylist, setListSongOfPlaylist] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePlaylistNow = () => {
    dispatch(playListSongNow(listSongOfPlaylist));
  }
  const handleAddPlaylist = () => {
    dispatch(addSongList(listSongOfPlaylist));
  }
  useEffect(() => {
    (async () => {
      const data = (await getAllSongByPlaylistId(item.id)).content;
      setListSongOfPlaylist(data.filter(i => i.status === 2));
    })();
  }, [item.id]);
  return (
    <>
      <Col span={4}>
        {listSongOfPlaylist[0]?.avatar ?
          (
            <img
              src={listSongOfPlaylist[0]?.avatar}
              style={{
                width: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
                cursor: "pointer"
              }}
              onClick={() => navigate(`/list-song-of-playlist/${item.id}`)}
            />
          ) : (
            <img
              src="https://cdn.smehost.net/dailyrindblogcom-orchardprod/wp-content/uploads/2016/03/playlist2.png"
              style={{
                width: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
                cursor: "pointer"
              }}
              onClick={() => navigate(`/list-song-of-playlist/${item.id}`)}
            />
          )
        }
        <span onClick={() => navigate(`/list-song-of-playlist/${item.id}`)}
              style={{cursor: "pointer", color: "#2c2c2c", fontSize: 22, fontWeight: 700}}>{item.name}</span>
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
              onClick={handlePlaylistNow}
            >
              <IoMdPlay style={{fontSize: 20}}/>
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
              onClick={handleAddPlaylist}
            >
              <PiQueueFill style={{fontSize: 20}}/>
            </Button>
          </Tooltip>
        </div>
        <div style={{marginTop: 12}} id={"scrollableDiv"}>
          <InfiniteScroll
            className={"rightSidebarScroll"}
            dataLength={listSongOfPlaylist.length}
            height={200}
            scrollableTarget="scrollableDiv"
          >
            <List
              size="small"
              itemLayout="horizontal"
              dataSource={listSongOfPlaylist}
              renderItem={(i, ind) => (
                <List.Item className="song-item-list-a" key={ind}>
                  <List.Item.Meta
                    avatar={
                      i.avatar ?
                        (
                          <Avatar
                            size={"small"}
                            shape="square"
                            src={i.avatar}
                          />
                        ) : (
                          <Avatar
                            size={"small"}
                            shape="square"
                            src={"https://play-lh.googleusercontent.com/D9X7m5dTNzjeSPxBqzh1RwrZLXJDFTpht9-8W8RJtiaOAlFxNvL5MnSDRxoDnQRYhz0"}
                          />
                        )
                    }
                    title={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <a
                          className="display-name-song-of-playlist"
                          style={{fontSize: 14}}
                        >
                          {i.name}
                          {" - "}
                          <span
                            style={{color: "#999999", fontWeight: "300"}}
                          >
                              {<span>{i.singers && i.singers.map((u, ind) => <span
                                key={ind} className={"hover-decoration"} style={{cursor: "pointer"}}
                                onClick={() => navigate(`/singer-profile/${u.id}`)}>{u.name}, </span>)}</span>}
                            </span>
                        </a>

                        <div
                          style={{
                            display: "flex",
                            gap: 10,
                          }}
                        >
                          <GroupButtonOfSongItem
                            songTarget={i} playlistDetail={item}
                            listSongOfPlayList={listSongOfPlaylist}
                            setListSongOfPlaylist={setListSongOfPlaylist}/>
                        </div>
                      </div>
                    }
                  />
                </List.Item>
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
