import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineClear} from "react-icons/ai";
import {clearQueue} from "../../../redux/actions/songQueue/index.js";
import {useNavigate} from "react-router-dom";
import {saveClick} from "../../../services/api/click/index.js";
import {useEffect, useState} from "react";
import {Button, ConfigProvider, Switch, Tooltip} from "antd";
import {changeCurrentLyricDisplay, changeSourceLyric, lyricStatusChange} from "../../../redux/actions/lyric/index.js";
import {FaDownload} from "react-icons/fa";

const FooterUserLayoutAudioPlayer = () => {
  const authInfo = useSelector(state => state.auth);
  const songQueue = useSelector(state => state.songQueue);
  const lyricObj = useSelector(state => state.lyric);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [songQueueHaveLyric, setSongQueueHaveLyric] = useState([]);
  const [currentPlay, setCurrentPlay] = useState(null);
  const handleClearQueue = () => {
    dispatch(clearQueue());
  }
  useEffect(() => {
    (async () => {
      let newArrayMapped = [];
      for (let o = 0; o < songQueue.songQueue.length; o++) {
        let lyricFormatted = 'No Lyric';
        let res = await fetch(songQueue.songQueue[o].lyric);
        let lyricString = await res.text();
        let data = lyricString.split('[').map(i => {
          if (i.length > 1) return "[" + i;
        });
        data.shift();
        if (data.length > 1) lyricFormatted = data.join("");
        newArrayMapped.push({
          ...songQueue.songQueue[o],
          lyric: lyricFormatted
        })
      }
      setSongQueueHaveLyric(newArrayMapped);
    })();
  }, [songQueue]);
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
        audioLists={songQueueHaveLyric}
        theme={"dark"}
        volumeFade={{
          fadeIn: 1000,
          fadeOut: 1000
        }}
        onAudioProgress={(audioInfo) => dispatch(changeCurrentLyricDisplay(audioInfo.currentTime))}
        autoPlay={true}
        onAudioPlay={(audioInfo) => {
          saveClick({user: {id: authInfo.id}, song: {id: audioInfo.id}}).then()
          setCurrentPlay(audioInfo);
          dispatch(changeSourceLyric(audioInfo.lyric));
        }}
        renderAudioTitle={(audioInfo) => {
          return <span>{`${audioInfo.name} - `}<span>{audioInfo.singers && audioInfo.singers.map((i, ind) => <span
            key={ind} className={"hover-decoration"} style={{cursor: "pointer"}}
            onClick={() => navigate(`/singer-profile/${i.id}`)}>{i.name}, </span>)}</span></span>
        }}
        showMiniProcessBar
        icon={{
          delete: <AiOutlineClear className={"btn-song-of-playlist"} style={{color: "white"}}
                                  onClick={handleClearQueue}/>,
          close: <div style={{display: "none"}}></div>
        }}
        extendsContent={
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#31c27c",
                colorPrimaryBorder: "#98c7b3",
                colorPrimaryHover: "#5cc291"
              }
            }}
          >
            <span style={{color: "white", lineHeight: "0.8", letterSpacing: "1px", fontSize: "smaller"}}>Lyric </span>
            <Switch checked={lyricObj.statusLyric === 'on'} size="small" title={"Show lyric"} onChange={(e) => dispatch(lyricStatusChange(e ? 'on' : 'off'))}/>
            <Tooltip title="Download">
              <Button disabled={currentPlay === null} onClick={() => {
                window.open(currentPlay.fileSound, '_blank');
              }} type="dashed" size={"small"} style={{display: "flex", alignItems: "center", justifyContent: "center"}} shape="circle" icon={<FaDownload style={{fontSize: "15px"}}/>} />
            </Tooltip>
          </ConfigProvider>
        }
        showDownload={false}
        showThemeSwitch={false}
        showReload={false}
        defaultPosition={{left: 5, bottom: 5}}
        quietUpdate={true}
        clearPriorAudioLists={songQueue.clearPriorAudioLists}
      />
    </div>
  );
};
export default FooterUserLayoutAudioPlayer;
