import {useEffect, useState} from "react";
import {FaPlay} from "react-icons/fa";
import "./style.css";
import {Button, Tooltip} from "antd";
import {PiQueueFill} from "react-icons/pi";
import {getAllSongByPlaylistId} from "../../../services/api/playlist/index.js";
import {useNavigate} from "react-router-dom";
import {addSongList, playListSongNow} from "../../../redux/actions/songQueue/index.js";
import {useDispatch} from "react-redux";

const CardPlaylistOfLibrary = (props) => {
  const {item} = props;
  const [isHovered, setIsHovered] = useState(false);
  const [allSong, setAllSong] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handlePlaylistNow = () => {
    if (allSong.content)
      dispatch(playListSongNow(allSong.content));
  }
  const handleAddSongList = () => {
    if (allSong.content)
      dispatch(addSongList(allSong.content));
  }
  useEffect(() => {
    (async () => {
      setAllSong((await getAllSongByPlaylistId(item.id)));
    })()
  }, []);
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
                onClick={handlePlaylistNow}
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
                placement="bottomLeft"
                title={<span style={{color: "#222222"}}>Add to queue</span>}
                color={"#fff"}
              >
                <Button onClick={handleAddSongList} size={"small"} className="btn-song-of-playlist">
                  <PiQueueFill/>
                </Button>
              </Tooltip>
            </div>
          </>
        )}
        {allSong.content && allSong.content[0].avatar ?
          (
            <img
              src={allSong[0].avatar}
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
        <span onClick={() => navigate(`/list-song-of-playlist/${item.id}`)}>{item.name}</span>
      </a>
    </div>
  );
};

export default CardPlaylistOfLibrary;
