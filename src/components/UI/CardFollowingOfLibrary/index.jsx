import {useEffect, useState} from "react";
import "./style.css";
import {Button} from "antd";
import {SlUserFollow, SlUserUnfollow} from "react-icons/sl";
import {addFollow, getListFollower, removeFollow} from "../../../services/api/singer/index.js";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const CardFollowingOfLibrary = (props) => {
  const {item} = props;
  const authInfo = useSelector(state => state.auth);
  const [follow, setFollow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [follower, setFollower] = useState(null);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    (async () => {
      const obj = await getListFollower(item.id);
      setFollower(obj.content ? obj.content.length : 0);
    })()
  }, []);
  return (
    <div
      style={{display: "flex", flexDirection: "column", position: "relative"}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a>
        {item.avatar ?
          (
            <img
              src={item.avatar}
              style={{
                width: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              onClick={() => navigate(`/singer-profile/${item.id}`)}
            />
          ) : (
            <img
              src="https://chuyentinh.vn/datafiles/img_data/images/am-dao-gia-pussy-6.jpg"
              style={{
                width: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              onClick={() => navigate(`/singer-profile/${item.id}`)}
            />
          )
        }
      </a>
      <a
        className="display-name-song-of-card-liked-song"
        style={{
          display: "inline-block",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "#424242",
          fontSize: 16,
          textAlign: "center",
        }}
      >
        <span onClick={() => navigate(`/singer-profile/${item.id}`)}>{item.name}</span>
      </a>
      <span
        style={{
          display: "inline-block",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "#969595",
          fontSize: 12,
          textAlign: "center",
          cursor: "default",
        }}
      >
        {`${follower && follower} followers`}
      </span>
      <div style={{display: "flex", justifyContent: "center"}}>
        {isHovered ? (
          <>
            {follow ? (
              <Button
                size="small"
                style={{width: "50%"}}
                className="btn-song-of-playlist"
                icon={<SlUserFollow/>}
                onClick={() => {
                  setFollow(!follow);
                  addFollow(authInfo.id, item.id);
                }}
              >
                Follow
              </Button>
            ) : (
              <Button
                size="small"
                style={{width: "50%"}}
                className="btn-song-of-playlist"
                icon={<SlUserUnfollow/>}
                onClick={() => {
                  setFollow(!follow);
                  removeFollow(authInfo.id, item.id);
                }}
              >
                Unfollow
              </Button>
            )}
          </>
        ) : (
          <div style={{height: 24}}></div>
        )}
      </div>
    </div>
  );
};

export default CardFollowingOfLibrary;
