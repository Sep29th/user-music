import {useState} from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import './style.css';

const FooterUserLayoutAudioPlayer = () => {
  const [audioLists, setAudioLists] = useState([
    {
      musicSrc: 'https://musicwebsite.s3.ap-east-1.amazonaws.com/song/sounds/00b1c8f6ac574a46a790aa2b85135a7d.mp3',
      name: "Hoang",
      cover: 'https://bloganchoi.com/wp-content/uploads/2023/10/loi-bai-hat-cat-doi-noi-sau-tang-duy-tan-4-696x385.jpg',
      singer: "Tong Duy Tan",
      lyric: "[id: atufcpbm]\n" +
        "[ar: Sia]\n" +
        "[al: Snowman]\n" +
        "[ti: Snowman]\n" +
        "[by: Eric Marcello]\n" +
        "\n" +
        "[re: LRC Editor - Android app]\n" +
        "[ve: Version 3.2.5]\n" +
        "\n" +
        "[00:00.00]Lyrics by @itsericmarcll_\n" +
        "[00:06.30]Don't cry snowman, not in front of me\n" +
        "[00:10.27]Who will catch your tears if you can't catch me, darlin'?\n" +
        "[00:15.30]If you can't catch me, darlin'?\n" +
        "[00:19.98]Don't cry, snowman, don't leave me this way\n" +
        "[00:23.96]A puddle of water can't hold me close, baby\n" +
        "[00:29.13]Can't hold me close, baby\n" +
        "[00:34.39]I want you to know that I'm never leaving\n" +
        "[00:37.65]Cause I'm Mrs. Snow, 'till death we'll be freezing\n" +
        "[00:41.07]Yeah, you are my home, my home for all seasons\n" +
        "[00:44.42]So come on let's go\n" +
        "[00:47.89]Let's go below zero and hide from the sun\n" +
        "[00:51.46]I'll love you forever where we'll have some fun\n" +
        "[00:54.82]Yes, let's hit the North Pole and live happily\n" +
        "[00:58.29]Please don't cry no tears now, it's Christmas baby\n" +
        "[01:01.71]My snowman and me\n" +
        "[01:08.55]My snowman and me\n" +
        "[01:14.79]Baby\n" +
        "[01:21.85]Don't cry, snowman, don't you fear the sun\n" +
        "[01:25.74]Who'll carry me without legs to run, honey?\n" +
        "[01:30.77]Without legs to run, honey?\n" +
        "[01:35.26]Don't cry, snowman, don't you shed a tear\n" +
        "[01:39.62]Who'll hear my secrets if you don't have ears, baby?\n" +
        "[01:44.52]If you don't have ears, baby?\n" +
        "[01:49.72]I want you to know that I'm never leaving\n" +
        "[01:53.05]'Cause I'm Mrs. Snow, 'till death we'll be freezing\n" +
        "[01:56.23]Yeah, you are my home, my home for all seasons\n" +
        "[01:59.98]So come on let's go\n" +
        "[02:03.40]Let's go below zero and hide from the sun\n" +
        "[02:06.87]I'll love you forever where we'll have some fun\n" +
        "[02:10.33]Yes, let's hit the North Pole and live happily\n" +
        "[02:13.69]Please don't cry no tears now, it's Christmas baby\n" +
        "[02:17.21]My snowman and me\n" +
        "[02:24.01]My snowman and me\n" +
        "[02:30.28]Baby"
    },
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
      <ReactJkMusicPlayer showLyric={true} showDownload={false} showThemeSwitch={false} showReload={false}
                          defaultPosition={{right: 80, bottom: 80}} quietUpdate
                          audioLists={audioLists}/>
    </div>
  );
};
export default FooterUserLayoutAudioPlayer;
