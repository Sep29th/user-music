import {useState} from "react";
import {FaHeart, FaHeartBroken, FaPlay} from "react-icons/fa";
import "./style.css";
import {Button, Tooltip} from "antd";
import {PiQueueFill} from "react-icons/pi";
import {useDispatch, useSelector} from "react-redux";
import {addOneSong, playOneSongNow} from "../../../redux/actions/songQueue/index.js";
import {useNavigate} from "react-router-dom";
import {removeSongToFavoritePlaylist} from "../../../services/api/playlist/index.js";
import {removeOneSongFromFavoritePlaylist} from "../../../redux/actions/favorite/index.js";
import 'animate.css';

const CardLikedSong = (props) => {
  const {item} = props;
  const authInfo = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleAddToQueue = () => {
    dispatch(addOneSong(item));
  }
  const handlePlayNow = () => {
    dispatch(playOneSongNow(item));
  }
  const handleUnlike = () => {
    removeSongToFavoritePlaylist(authInfo.id, item.id);
    dispatch(removeOneSongFromFavoritePlaylist(item));
  }
  return (
    <div
      style={{display: "flex", flexDirection: "column", position: "relative"}}
    >
      <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isHovered && (
          <>
            <Tooltip
              placement="top"
              title={<span style={{color: "#222222"}}>Play</span>}
              color={"#fff"}
            >
              <Button
                className="btn-play-song"
                shape="circle"
                icon={<FaPlay style={{fontSize: 32}}/>}
                size="large"
                onClick={handlePlayNow}
                style={{
                  padding: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "70px",
                  left: "70px",
                }}
              />
            </Tooltip>
            <div
              style={{
                position: "absolute",
                display: "flex",
                gap: 8,
                bottom: 60,
                right: 10,
              }}
            >
              <Tooltip
                placement="bottom"
                title={
                  <span style={{color: "#222222"}}>Unlike this song</span>
                }
                color={"#fff"}
              >
                <Button onClick={handleUnlike} size={"small"} className="btn-song-of-playlist">
                  <FaHeartBroken/>
                </Button>
              </Tooltip>

              <Tooltip
                placement="bottomLeft"
                title={<span style={{color: "#222222"}}>Add to queue</span>}
                color={"#fff"}
              >
                <Button onClick={handleAddToQueue} size={"small"} className="btn-song-of-playlist">
                  <PiQueueFill/>
                </Button>
              </Tooltip>
            </div>
          </>
        )}
        {item.avatar ?
          (
            <img
              src={item.avatar}
              style={{
                width: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
          ) : (
            <img
              src="https://play-lh.googleusercontent.com/D9X7m5dTNzjeSPxBqzh1RwrZLXJDFTpht9-8W8RJtiaOAlFxNvL5MnSDRxoDnQRYhz0"
              style={{
                width: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
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
        }}
      >
        <FaHeart style={{fontSize: 12}}/> <span onClick={handlePlayNow}>{item.name}</span>
      </a>
      <a
        style={{
          display: "inline-block",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "#969595",
          fontSize: 14,
        }}
      >
        <span>{item.singers.map((i, ind) => <span key={ind}
                                                  className="display-name-song-of-card-liked-song"
                                                  onClick={() => navigate(`/singer-profile/${i.id}`)}>{`${i.name} `}</span>)}</span>
      </a>
    </div>
  );
};

export default CardLikedSong;
