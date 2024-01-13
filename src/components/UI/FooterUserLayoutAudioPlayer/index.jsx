import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineClear} from "react-icons/ai";
import {clearQueue} from "../../../redux/actions/songQueue/index.js";

const FooterUserLayoutAudioPlayer = () => {
  const songQueue = useSelector(state => state.songQueue);
  const dispatch = useDispatch();
  // const [audioInstance, setAudioInstance] = useState(null);
  // const [audioInfo, setAudioInfo] = useState(null);
  const handleClearQueue = () => {
    dispatch(clearQueue());
  }
  // useEffect(() => {
  //   if (audioInstance !== null)
  //     dispatch(initInstance(audioInstance));
  // }, []);
  // useEffect(() => {
  //   if (audioInfo)
  //     dispatch(resetAudioCurrentPlay({...audioInfo, played: undefined}))
  // }, []);
  console.log("render footer");
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
        // getAudioInstance={instance => dispatch(initInstance((instance)))}
        // onAudioPlay={(audioInfo) => dispatch(resetAudioCurrentPlay({...audioInfo, played: undefined}))}
        theme={"dark"}
        volumeFade={{
          fadeIn: 1000,
          fadeOut: 1000
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
