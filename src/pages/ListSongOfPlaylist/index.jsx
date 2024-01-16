import {Avatar, Button, Col, List, Row, Tooltip} from "antd";
import {FaPlay} from "react-icons/fa";
import {MdQueuePlayNext} from "react-icons/md";

import "./style.css";
import {useEffect, useState} from "react";
import GroupButtonOfSongItem from "../../components/UI/GroupButtonOfSongItem";
import {useNavigate, useParams} from "react-router-dom";
import {getAllSongByPlaylistId, getPlaylistByPlaylistId} from "../../services/api/playlist/index.js";
import {useDispatch, useSelector} from "react-redux";
import {addSongList, playListSongNow} from "../../redux/actions/songQueue/index.js";

const ListSongOfPlaylist = () => {
  const {playlistId} = useParams();
  const authInfo = useSelector(state => state.auth);
  const [playlistDetail, setPlaylistDetail] = useState({id: playlistId});
  const [listSongOfPlayList, setListSongOfPlaylist] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePlaylistSongNow = () => {
    dispatch(playListSongNow(listSongOfPlayList));
  }
  const handleAddPlaylistToQueue = () => {
    dispatch(addSongList(listSongOfPlayList));
  }
  useEffect(() => {
    (async () => {
      const data = (await getPlaylistByPlaylistId(playlistId)).content;
      setPlaylistDetail(data);
      const data1 = (await getAllSongByPlaylistId(playlistId)).content;
      if (data.creator?.id === authInfo.id) setListSongOfPlaylist(data1);
      else setListSongOfPlaylist(data1.filter(i => i.status === 2));
    })();
  }, [playlistId]);
  return (
    <>
      <Row justify={"center"}>
        <Col span={18}>
          <div
            style={{
              backgroundImage: "linear-gradient(90deg, #847983, #302c2d)",
              height: 380,
              borderRadius: "9px"
            }}
          >
            <Row style={{height: "100%"}} justify="space-between">
              <Col
                span={16}
                style={{
                  padding: 25,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{display: "flex"}}>
                  <Tooltip
                    placement={"top"}
                    color={"#fff"}
                    title={
                      <span style={{color: "#222222"}}>
                        Play all songs now
                      </span>
                    }
                  >
                    <Button
                      className="btn-play-song"
                      shape="circle"
                      icon={<FaPlay style={{fontSize: 32}}/>}
                      size="large"
                      onClick={handlePlaylistSongNow}
                      style={{
                        padding: 30,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  </Tooltip>
                  <span
                    style={{
                      padding: 5,
                      marginLeft: 25,
                      fontSize: 30,
                      color: "#fff",
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    {playlistDetail.name}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "end",
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      borderRadius: "50%",
                      background: "#000",
                      padding: 18,
                      width: 80,
                      height: 80,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{color: "#fff", fontSize: 36, fontWeight: 500}}
                    >
                      {listSongOfPlayList.length}
                    </span>
                    <br/>
                    <span style={{color: "#fff", fontSize: 18}}>TRACKS</span>
                  </div>

                  <Button
                    className={"btn-song-of-playlist"}
                    style={{display: "flex", gap: 10, alignItems: "center"}}
                    onClick={handleAddPlaylistToQueue}
                  >
                    <MdQueuePlayNext/>
                    Add to next up
                  </Button>
                </div>
              </Col>

              <Col
                span={7}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                {
                  listSongOfPlayList[0]?.avatar ?
                    (
                      <img
                        src={listSongOfPlayList[0].avatar}
                        style={{
                          width: 340,
                          height: 340,
                          marginRight: 20,
                        }}
                      />
                    ) : (
                      <img
                        src="https://cdn.smehost.net/dailyrindblogcom-orchardprod/wp-content/uploads/2016/03/playlist2.png"
                        style={{
                          width: 340,
                          height: 340,
                          marginRight: 20,
                        }}
                      />
                    )
                }
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col span={15}>
          <List
            size="medium"
            itemLayout="horizontal"
            dataSource={listSongOfPlayList}
            renderItem={(item, index) => (
              <List.Item className="song-item-list-a" key={index}>
                <List.Item.Meta
                  avatar={
                    item.avatar ?
                      (
                        <Avatar
                          size={"small"}
                          shape="square"
                          src={item.avatar}
                        />
                      ) : (
                        <Avatar
                          size={"small"}
                          shape="square"
                          src={`https://play-lh.googleusercontent.com/D9X7m5dTNzjeSPxBqzh1RwrZLXJDFTpht9-8W8RJtiaOAlFxNvL5MnSDRxoDnQRYhz0`}
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
                      <div>
                        <a className="display-name-song-of-playlist">
                          {item.name}
                        </a>
                        {" - "}
                        <a
                          className="display-name-singer-of-playlist"
                          style={{color: "#999999", fontWeight: "300"}}
                        >
                          {item.singers.map((i, ind) => <span onClick={() => navigate(`/singer-profile/${i.id}`)}
                                                              key={ind}
                                                              className={"hover-decoration"}>{`${i.name}, `}</span>)}
                        </a>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: 10,
                        }}
                      >
                        <GroupButtonOfSongItem
                          songTarget={item} playlistDetail={playlistDetail}
                          listSongOfPlayList={listSongOfPlayList}
                          setListSongOfPlaylist={setListSongOfPlaylist}/>
                      </div>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default ListSongOfPlaylist;
