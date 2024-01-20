import {Button, Col, Row, Statistic, Tabs} from "antd";
import {FaClock, FaLink, FaUser} from "react-icons/fa";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {SlUserFollow, SlUserUnfollow} from "react-icons/sl";
import {SiGmail} from "react-icons/si";

import "./style.css";
import {useEffect, useState} from "react";
import TracksOfSinger from "../../components/UI/TracksOfSinger";
import {useNavigate, useParams} from "react-router-dom";
import {getUserById} from "../../services/api/user/index.js";
import {getAllSongBySingerId} from "../../services/api/song/index.js";
import {useSelector} from "react-redux";
import {addFollow, getFollowedSinger, getListFollower, removeFollow} from "../../services/api/singer/index.js";
import AlbumsOfSinger from "../../components/UI/AlbumsOfSinger/index.jsx";
import PlaylistOfSinger from "../../components/UI/PlaylistOfSinger/index.jsx";

const SingerProfile = () => {
  const {singerId} = useParams();
  const authInfo = useSelector(state => state.auth);
  const [follow, setFollow] = useState(true);
  const [singerProfile, setSingerProfile] = useState({id: singerId});
  const [totalTrack, setTotalTrack] = useState([]);
  const [follower, setFollower] = useState({});
  const [following, setFollowing] = useState({})
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      setSingerProfile((await getUserById(singerId)).content);
      const tmp = (await getAllSongBySingerId(singerId)).content;
      if (authInfo.id === parseInt(singerId)) setTotalTrack(tmp);
      else setTotalTrack(tmp.filter(i => i.status === 2));
      setFollower(await getListFollower(singerId));
      setFollowing(await getFollowedSinger(singerId));
      const tmpObj = await getFollowedSinger(authInfo.id);
      const arrFollowed = tmpObj.content ? tmpObj.content : [];
      if (arrFollowed.findIndex((i) => i.id === parseInt(singerId)) !== -1)
        setFollow(false);
    })()
  }, [singerId]);
  const items = [
    {
      key: "1",
      label: "Tracks",
      children: <TracksOfSinger singerProfile={singerProfile}/>,
    },
    {
      key: "2",
      label: "Album",
      children: <AlbumsOfSinger singerProfile={singerProfile}/>,
    },
    {
      key: "3",
      label: "Playlist",
      children: <PlaylistOfSinger singerProfile={singerProfile}/>,
    },
  ];

  return (
    <>
      <Row justify={"center"}>
        <Col span={20}>
          <div
            style={{
              backgroundImage: "linear-gradient(90deg, #847983, #302c2d)",
              height: 260,
            }}
          >
            <Row style={{height: "100%"}} justify="space-between">
              <Col
                span={10}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {singerProfile.avatar ?
                  (
                    <img
                      src={singerProfile.avatar}
                      style={{
                        width: 200,
                        aspectRatio: "1/1",
                        objectFit: "cover",
                        marginRight: 20,
                        borderRadius: "50%",
                        margin: "0px 30px 0px 30px",
                      }}
                    />
                  ) : (
                    <Skeleton
                      style={{
                        width: 200,
                        height: 200,
                        marginRight: 20,
                        borderRadius: "50%",
                        margin: "0px 30px 0px 30px",
                      }}
                    />
                  )
                }
                <span
                  style={{
                    padding: 5,
                    marginLeft: 5,
                    fontSize: 24,
                    color: "#fff",
                    fontWeight: 700,
                    letterSpacing: 1,
                    paddingBottom: 120,
                  }}
                >
                  {singerProfile.name && singerProfile.name}
                  <br/>
                  <span style={{fontSize: 16, fontWeight: 300}}>
                    {singerProfile.nickName && singerProfile.nickName}
                  </span>
                  <br/>
                  {authInfo.id === parseInt(singerId) ?
                    (
                      <Button
                        className="btn-song-of-playlist"
                        icon={<FaUser/>}
                        onClick={() => {
                          navigate("/detail-information");
                        }}
                      >
                        Your detail profile
                      </Button>
                    ) : (
                      follow ? (
                        <Button
                          className="btn-song-of-playlist"
                          icon={<SlUserFollow/>}
                          onClick={() => {
                            setFollow(!follow);
                            addFollow(authInfo.id, singerId);
                          }}
                        >
                          Follow
                        </Button>
                      ) : (
                        <Button
                          className="btn-song-of-playlist"
                          icon={<SlUserUnfollow/>}
                          onClick={() => {
                            setFollow(!follow);
                            removeFollow(authInfo.id, singerId);
                          }}
                        >
                          Unfollow
                        </Button>
                      )
                    )
                  }
                </span>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col span={13}>
          <Tabs
            size="large"
            defaultActiveKey="1"
            items={items}
          />
        </Col>
        <Col
          span={6}
          style={{
            paddingLeft: 16,
            paddingTop: 16,
            marginLeft: 16,
            borderLeft: "1px solid #f7f7f7",
          }}
        >
          <Row gutter={[15, 0]}>
            <Col span={8}>
              <Statistic title="Follower" value={follower.content ? follower.content.length : 0}/>
            </Col>
            <Col span={8}>
              <Statistic title="Following" value={following.content ? following.content.length : 0}/>
            </Col>
            <Col span={8}>
              <Statistic title="Tracks" value={totalTrack?.length}/>
            </Col>

            <Col span={24}>
              <hr/>
              <h2>About: </h2>
              <p style={{fontSize: 17}}>
                {singerProfile.bio}
              </p>
            </Col>

            <Col span={24}>
              <hr/>
              <div
                style={{
                  marginTop: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                }}
              >
                <a
                  className="singer-profile-link"
                  href={`mailto:${singerProfile.email && singerProfile.email}`}
                  style={{display: "flex", alignItems: "center", gap: 8}}
                >
                  <SiGmail fontSize={28}/>{" "}
                  <span style={{fontSize: 20}}>
                    Mail - {"email@example.com"}
                  </span>
                </a>
                <a
                  className="singer-profile-link"
                  style={{display: "flex", alignItems: "center", gap: 8}}
                  target="_blank"
                  href={singerProfile.socialMediaLink && singerProfile.socialMediaLink} rel="noreferrer"
                >
                  <FaLink fontSize={28}/>{" "}
                  <span style={{fontSize: 20}}>
                    Social link - {singerProfile.socialMediaLink && singerProfile.socialMediaLink}
                  </span>
                </a>
                <a
                  className="singer-profile-link"
                  style={{display: "flex", alignItems: "center", gap: 8, cursor: "default"}}
                >
                  <FaClock fontSize={28}/>{" "}
                  <span style={{fontSize: 20}}>
                    Joined at: {singerProfile.createdDate && singerProfile.createdDate.slice(0, 10)}
                  </span>
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SingerProfile;
