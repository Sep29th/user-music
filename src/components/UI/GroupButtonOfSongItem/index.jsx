import {Button, Tooltip} from "antd";
import {useState} from "react";
import {FaHeart} from "react-icons/fa";
import {IoMdPlay} from "react-icons/io";
import {PiQueueFill} from "react-icons/pi";
import {MdOutlinePlaylistAdd} from "react-icons/md";
import ModalPlaylist from "../ModalPlaylist";
import {useDispatch, useSelector} from "react-redux";
import {addOneSong, playOneSongNow} from "../../../redux/actions/songQueue/index.js";

const GroupButtonOfSongItem = (props) => {
  const {songTarget} = props;
  const songQueue = useSelector(state => state.songQueue);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handlePlaynow = () => {
    dispatch(playOneSongNow(songTarget));
  }
  const handleAddToQueue = () => {
    dispatch(addOneSong(songTarget));
  }
  return (
    <>
      <Tooltip
        placement="bottomRight"
        title={<span style={{color: "#222222"}}>Play now</span>}
        color={"#fff"}
      >
        <Button size={"small"} className="btn-song-of-playlist" onClick={handlePlaynow}>
          <IoMdPlay/>
        </Button>
      </Tooltip>
      <Tooltip
        placement="bottom"
        title={<span style={{color: "#222222"}}>Like this song</span>}
        color={"#fff"}
      >
        <Button size={"small"} className="btn-song-of-playlist">
          <FaHeart/>
        </Button>
      </Tooltip>

      <Tooltip
        placement="bottomLeft"
        title={<span style={{color: "#222222"}}>Add to queue</span>}
        color={"#fff"}
      >
        <Button size={"small"} className="btn-song-of-playlist" onClick={handleAddToQueue}>
          <PiQueueFill/>
        </Button>
      </Tooltip>

      <Tooltip
        placement="right"
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
      <ModalPlaylist
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default GroupButtonOfSongItem;
