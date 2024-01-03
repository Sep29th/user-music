import { useState } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const FooterUserLayoutAudioPlayer = () => {
  const [audioLists, setAudioLists] = useState([
    //{ musicSrc: 'https://musicwebsite.s3.ap-east-1.amazonaws.com/song/sounds/00b1c8f6ac574a46a790aa2b85135a7d.mp3', name: "Hoang", cover: 'https://bloganchoi.com/wp-content/uploads/2023/10/loi-bai-hat-cat-doi-noi-sau-tang-duy-tan-4-696x385.jpg' , singer: "Tong Duy Tan"},
    // { musicSrc: 'https://musicwebsite.s3.ap-east-1.amazonaws.com/song/sounds/0704e3550f8a4e868cba6393a4a7fc56.mp3', name: "An" },
    // { musicSrc: 'https://musicwebsite.s3.ap-east-1.amazonaws.com/song/sounds/1465701dd268466787753911ea5b4555.mp3', name: "Cau"}
  ]);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setAudioLists([{ musicSrc: 'A' }, { musicSrc: 'C' }, { musicSrc: 'B' }])
  //     }, 1000)
  //   }, [setAudioLists])

  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        height: 10,
      }}
    >
      <ReactJkMusicPlayer quietUpdate audioLists={audioLists} />
    </div>
  );
};
export default FooterUserLayoutAudioPlayer;
