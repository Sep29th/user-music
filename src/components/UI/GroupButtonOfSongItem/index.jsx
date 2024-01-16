import {Button, Tooltip} from "antd";
import {useState} from "react";
import {FaHeart, FaHeartBroken} from "react-icons/fa";
import {IoMdPlay} from "react-icons/io";
import {PiQueueFill} from "react-icons/pi";
import {MdOutlinePlaylistAdd, MdOutlinePlaylistRemove} from "react-icons/md";
import ModalPlaylist from "../ModalPlaylist";
import {useDispatch, useSelector} from "react-redux";
import {addOneSong, playOneSongNow} from "../../../redux/actions/songQueue/index.js";
import {
  addSongToFavoritePlaylist,
  removeSongFromPlaylist,
  removeSongToFavoritePlaylist
} from "../../../services/api/playlist/index.js";
import {
  addOneSongToFavoritePlaylist,
  removeOneSongFromFavoritePlaylist
} from "../../../redux/actions/favorite/index.js";

const GroupButtonOfSongItem = (props) => {
  const {
    songTarget,
    playlistDetail,
    listSongOfPlayList,
    setListSongOfPlaylist
  } = props;
  const authInfo = useSelector(state => state.auth);
  const favoriteList = useSelector(state => state.favorite);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handlePlayNow = () => {
    dispatch(playOneSongNow(songTarget));
  }
  const handleAddToQueue = () => {
    dispatch(addOneSong(songTarget));
  }
  const addSongToFavorite = async () => {
    await addSongToFavoritePlaylist(authInfo.id, songTarget.id);
    dispatch(addOneSongToFavoritePlaylist(songTarget));
  }

  const removeSongFromFavorite = async () => {
    await removeSongToFavoritePlaylist(authInfo.id, songTarget.id);
    dispatch(removeOneSongFromFavoritePlaylist(songTarget));
  }

  const handleRemoveSongFromPlaylist = async () => {
    await removeSongFromPlaylist(playlistDetail.id, songTarget.id);
    setListSongOfPlaylist(listSongOfPlayList.filter(i => i.id !== songTarget.id));
  }
  let liked = false;
  if (favoriteList.findIndex(i => i.id === songTarget.id) !== -1) liked = true;
  return (
    <>
      <Tooltip
        placement="topRight"
        title={<span style={{color: "#222222"}}>Play now</span>}
        color={"#fff"}
      >
        <Button size={"small"} className="btn-song-of-playlist" onClick={handlePlayNow}>
          <IoMdPlay/>
        </Button>
      </Tooltip>
      {liked ?
        (
          <Tooltip
            placement="top"
            title={<span style={{color: "#222222"}}>Unlike this song</span>}
            color={"#fff"}
          >
            <Button size={"small"} className="btn-song-of-playlist" onClick={removeSongFromFavorite}>
              <FaHeartBroken/>
            </Button>
          </Tooltip>
        ) : (
          <Tooltip
            placement="top"
            title={<span style={{color: "#222222"}}>Like this song</span>}
            color={"#fff"}
          >
            <Button size={"small"} className="btn-song-of-playlist" onClick={addSongToFavorite}>
              <FaHeart/>
            </Button>
          </Tooltip>
        )
      }
      <Tooltip
        placement="topLeft"
        title={<span style={{color: "#222222"}}>Add to queue</span>}
        color={"#fff"}
      >
        <Button size={"small"} className="btn-song-of-playlist" onClick={handleAddToQueue}>
          <PiQueueFill/>
        </Button>
      </Tooltip>
      <Tooltip
        placement="topRight"
        title={<span style={{color: "#222222"}}>Add to playlist</span>}
        color={"#fff"}
      >
        <Button
          size={"small"}
          className="btn-song-of-playlist"
          onClick={showModal}
        >
          <MdOutlinePlaylistAdd/>
        </Button>
      </Tooltip>
      {authInfo.id === playlistDetail?.creator?.id && <Tooltip
        placement="topRight"
        title={<span style={{color: "#222222"}}>Remove from this playlist</span>}
        color={"#fff"}
      >
        <Button
          size={"small"}
          className="btn-song-of-playlist"
          onClick={handleRemoveSongFromPlaylist}
        >
          <MdOutlinePlaylistRemove/>
        </Button>
      </Tooltip>}
      <ModalPlaylist
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        songTarget={songTarget}
      />
    </>
  );
};

export default GroupButtonOfSongItem;
