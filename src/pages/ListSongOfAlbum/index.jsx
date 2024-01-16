import {Avatar, Button, Col, List, Row, Tooltip} from "antd";
import {FaPlay} from "react-icons/fa";
import {MdQueuePlayNext} from "react-icons/md";
import {useEffect, useState} from "react";
import GroupButtonOfSongItem from "../../components/UI/GroupButtonOfSongItem";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addSongList, playListSongNow} from "../../redux/actions/songQueue/index.js";
import {getAlbumById} from "../../services/api/album/index.js";

const ListSongOfAlbum = () => {
  const {albumId} = useParams();
  const authInfo = useSelector(state => state.auth);
  const [albumDetail, setAlbumDetail] = useState({id: albumId});
  const [listSongOfAlbum, setListSongOfAlbum] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePlayAlbumNow = () => {
    dispatch(playListSongNow(listSongOfAlbum));
  }
  const handleAddAlbumToQueue = () => {
    dispatch(addSongList(listSongOfAlbum));
  }
  useEffect(() => {
    (async () => {
      const data = (await getAlbumById(albumId)).content;
      setAlbumDetail(data);
      if (authInfo.id === data.singer.id) {
        setListSongOfAlbum(data.songs);
      }
      else setListSongOfAlbum(data.songs.filter(i => i.status === 2));
    })();
  }, [albumId]);
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
                span={7}
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
                      onClick={handlePlayAlbumNow}
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
                    {albumDetail.name}
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
                      {listSongOfAlbum.length}
                    </span>
                    <br/>
                    <span style={{color: "#fff", fontSize: 18}}>TRACKS</span>
                  </div>

                  <Button
                    className={"btn-song-of-playlist"}
                    style={{display: "flex", gap: 10, alignItems: "center"}}
                    onClick={handleAddAlbumToQueue}
                  >
                    <MdQueuePlayNext/>
                    Add to next up
                  </Button>
                </div>
              </Col>
              <Col span={10} style={{display: "flex", justifyContent: "end", padding: "18px 0"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "end"}}>
                  {albumDetail.singer &&
                    <>
                      <img
                        style={{
                          width: 160,
                          aspectRatio: "1/1",
                          borderRadius: "50%",
                          objectFit: "cover",
                          cursor: "pointer"
                        }}
                        onClick={() => navigate(`/singer-profile/${albumDetail.singer.id}`)}
                        className={"imageHomePage__hover"}
                        src={albumDetail.singer.avatar}
                        alt={"singer-avatar"}
                        title={albumDetail.singer.name}
                      />
                      <h3
                        onClick={() => navigate(`/singer-profile/${albumDetail.singer.id}`)}
                        className={"hover__decoration"}
                        style={{color: "white", cursor: "pointer"}}
                      >
                        {albumDetail.singer.name}
                        <span
                          style={{fontSize: 14, color: "#cccccc"}}> - {albumDetail.singer.nickName}
                        </span>
                      </h3>
                      <p style={{color: "#cccccc", textAlign: "right"}}>{albumDetail.singer.bio}</p>
                    </>
                  }
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
                <img
                  src={albumDetail.thumbnail}
                  style={{
                    width: 340,
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    marginRight: 20,
                  }}
                />
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
            dataSource={listSongOfAlbum}
            renderItem={(item, index) => (
              <a className="song-item-list-a" key={index}>
                <List.Item className="song-item-list-a">
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
                            {item?.singers?.map((i, ind) => <span onClick={() => navigate(`/singer-profile/${i.id}`)}
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
                          <GroupButtonOfSongItem songTarget={item}/>
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              </a>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default ListSongOfAlbum;
