import {useEffect, useState} from "react";
import {FaLock, FaLockOpen, FaPlay} from "react-icons/fa";
import "./style.css";
import {Button, Tooltip} from "antd";
import {PiQueueFill} from "react-icons/pi";
import {getAllSongByPlaylistId, updatePlaylist} from "../../../services/api/playlist/index.js";
import {useNavigate} from "react-router-dom";
import {addSongList, playListSongNow} from "../../../redux/actions/songQueue/index.js";
import {useDispatch} from "react-redux";
import {updateOnePlaylistOfListPlaylist} from "../../../redux/actions/playlist/index.js";

const CardPlaylistOfLibrary = (props) => {
  const {item} = props;
  const [isHovered, setIsHovered] = useState(false);
  const [allSong, setAllSong] = useState({});
  const [isPublic, setIsPublic] = useState(item.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const statusPlaylistChangeTo = (targetStatus) => {
    (async () => {
      const playlistAfterUpdate = (await updatePlaylist({
        id: item.id,
        name: item.name,
        status: targetStatus
      })).content;
      dispatch(updateOnePlaylistOfListPlaylist(playlistAfterUpdate));
      setIsPublic(!isPublic);
    })();
  }
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
              {!isPublic ? (
                <Tooltip
                  placement="left"
                  title={<span style={{color: "#222222"}}>set to public</span>}
                  color={"#fff"}
                >
                  <Button
                    size={"small"}
                    className="btn-song-of-playlist"
                    onClick={() => statusPlaylistChangeTo(true)}
                  >
                    <FaLock/>
                  </Button>
                </Tooltip>
              ) : (
                <Tooltip
                  placement="left"
                  title={<span style={{color: "#222222"}}>set to private</span>}
                  color={"#fff"}
                >
                  <Button
                    size={"small"}
                    className="btn-song-of-playlist"
                    onClick={() => statusPlaylistChangeTo(false)}
                  >
                    <FaLockOpen/>
                  </Button>
                </Tooltip>
              )}
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
              src={allSong.content[0].avatar}
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
