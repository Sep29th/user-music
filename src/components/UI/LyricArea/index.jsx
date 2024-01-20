import {useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import 'animate.css';
const handleConvert = (source) => {
  let arrayLine = source.split("\n").slice(0, -1);
  let countNotIsTime = 0;
  let arrayDetach = arrayLine.map((i, ind) => {
    let k = i.split("]");
    let time = k[0].slice(1).split(":");
    let minutes = parseInt(time[0]);
    if (isNaN(minutes)) {
      countNotIsTime++;
      return;
    }
    let seconds = parseFloat(time[1]);
    return {
      key: ind,
      time: minutes * 60 + seconds,
      text: k[1]
    }
  });
  arrayDetach.push({key: arrayDetach.length, time: 9999, text: ''});
  return arrayDetach.slice(countNotIsTime);
}
const LyricArea = () => {
  const lyricObj = useSelector(state => state.lyric);
  const [listText, setListText] = useState([]);
  const [currentText, setCurrentText] = useState({text: 'No lyric'});
  const currentLyricRef = useRef(null);
  const scrollableDivRef = useRef(null);
  const [isHover, setIsHover] = useState(true);
  useEffect(() => {
    if (currentLyricRef.current && scrollableDivRef.current && isHover) {
      let element = currentLyricRef.current;
      let container = scrollableDivRef.current;
      let offsetTop = element.offsetTop;
      let elementHeight = element.offsetHeight;
      let containerHeight = container.offsetHeight;
      container.scrollTop = offsetTop - (containerHeight / 2) + (elementHeight / 2);
    }
    let trueArray = handleConvert(lyricObj.sourceLyric);
    for (let p = 0; p < trueArray.length; p++) {
      if (lyricObj.currentTime <= trueArray[p]?.time) {
        setCurrentText(trueArray[p - 1]);
        break;
      }
    }
    setListText(trueArray);
  }, [lyricObj]);
  return (
    lyricObj.statusLyric === 'on' ?
    (
      <div onMouseEnter={() => setIsHover(false)} onMouseLeave={() => setIsHover(true)} ref={scrollableDivRef} id={"scrollableDiv"} className={"animate__animated animate__fadeInLeft"} style={{
        position: "fixed",
        bottom: 85,
        left: 5,
        zIndex: 9999,
        width: 500,
        height: 250,
        overflow: "auto",
        backgroundColor: "#222222",
        opacity: "0.85!important",
        borderRadius: "9px",
        padding: "10px 20px",
        marginTop: "-80px",
        scrollBehavior: "smooth",
        textAlign: "left",
        direction: "rtl"
      }}>
        {listText.map((l, ind) => {
          if (l?.key !== currentText?.key) return <p key={ind} style={{color: "white", direction: "ltr"}}>{l?.text}</p>
          else return <h2 className="animate__animated animate__fadeIn" style={{
            color: "#31c27c", direction: "ltr", textShadow: `2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3)`
          }} id={"currentLyric"} ref={currentLyricRef}>{currentText?.text}</h2>
        })}
      </div>
    ) : (
        <div ref={scrollableDivRef} id={"scrollableDiv"} className={"animate__animated animate__fadeOutLeft"} style={{
          position: "fixed",
          bottom: 85,
          left: 5,
          zIndex: 9999,
          width: 500,
          height: 250,
          overflow: "auto",
          backgroundColor: "#222222",
          opacity: "0.85!important",
          borderRadius: "9px",
          padding: "10px 20px",
          marginTop: "-80px",
          scrollBehavior: "smooth",
          textAlign: "left",
          direction: "rtl",
      }}>
        {listText.map((l, ind) => {
          if (l?.key !== currentText?.key) return <p key={ind} style={{color: "white", direction: "ltr"}}>{l?.text}</p>
          else return <h2 style={{
            color: "#31c27c", direction: "ltr", textShadow: `2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3)`
          }} id={"currentLyric"} ref={currentLyricRef}>{currentText?.text}</h2>
        })}
      </div>
    )
  );
}

export default LyricArea;
