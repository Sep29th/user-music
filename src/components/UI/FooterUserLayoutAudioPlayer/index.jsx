import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineClear} from "react-icons/ai";
import {clearQueue} from "../../../redux/actions/songQueue/index.js";
import {useNavigate} from "react-router-dom";

const FooterUserLayoutAudioPlayer = () => {
  const songQueue = useSelector(state => state.songQueue);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClearQueue = () => {
    dispatch(clearQueue());
  }
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        height: 10,
      }}
    >
      <ReactJkMusicPlayer
        theme={"dark"}
        volumeFade={{
          fadeIn: 1000,
          fadeOut: 1000
        }}
        renderAudioTitle={(audioInfo) => {
          return <span>{`${audioInfo.name} - `}<span>{audioInfo.singers && audioInfo.singers.map((i, ind) => <span
            key={ind} className={"hover-decoration"} style={{cursor: "pointer"}} onClick={() => navigate(`/singer-profile/${i.id}`)}>{i.name}, </span>)}</span></span>
        }}
        showMiniProcessBar={true}
        icon={{
          delete: <AiOutlineClear className={"btn-song-of-playlist"} style={{color: "white"}}
                                  onClick={handleClearQueue}/>,
          close: <div style={{display: "none"}}></div>
        }}
        showLyric={true}
        showDownload={false}
        showThemeSwitch={false}
        showReload={false}
        defaultPosition={{right: 80, bottom: 80}}
        quietUpdate={false}
        clearPriorAudioLists={songQueue.clearPriorAudioLists}
        audioLists={songQueue.songQueue}
      />
    </div>
  );
};
export default FooterUserLayoutAudioPlayer;
