import {Button, Card, Tooltip} from "antd";
import {FaPlay} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {addOneSong, playOneSongNow} from "../../../redux/actions/songQueue/index.js";
import {useNavigate} from "react-router-dom";
import {PiQueueFill} from "react-icons/pi";
import {FastAverageColor} from "fast-average-color";
import {useEffect, useState} from "react";

const CardSongOfHomepage = (props) => {
  const {itemSong, rank} = props;
  const fac = new FastAverageColor();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [averageColor, setAverageColor] = useState('#615e57');
  const handlePlayNow = () => {
    dispatch(playOneSongNow(itemSong));
  }
  const handleAddToQueue = () => {
    dispatch(addOneSong(itemSong));
  }
  useEffect(() => {
    (async () => {
      try {
        // await fetch('https://mybucketmusic.s3.ap-south-1.amazonaws.com/song/avatars/9cadbfb7f41d45e6aa1cedbef1eb919b.png').then(obj => console.log(obj));
        // const color = await fac.getColorAsync(itemSong.avatar + "");
        // setAverageColor(color.hex);
      } catch (e) {
        console.log(e);
      }
    })()
  }, [fac, itemSong.avatar]);
  return (
    <div
      style={{
        userSelect: "none",
        borderRadius: "9px",
        padding: "15px",
        backgroundColor: averageColor,
        marginRight: "64px",
        boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
        position: "relative"
      }}
    >
      {rank && <div
        style={{
          userSelect: "none",
          position: "absolute", left: "-50px", fontWeight: 700, fontSize: 245, display: "block", color: "#31c27c",
          textShadow:
            `0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4, 2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 3px 2px 2px #5dabcd,
          3px 4px 2px #378ab4,
          4px 3px 3px #5dabcd,
          4px 5px 3px #378ab4,
          5px 4px 2px #5dabcd,
          5px 6px 2px #378ab4,
          6px 5px 2px #5dabcd,
          6px 7px 1px #378ab4,
          7px 6px 1px #5dabcd,
          7px 8px 0px #378ab4,
          8px 7px 0px #5dabcd`
        }}><span>{rank}</span></div>}
      <Card
        bodyStyle={{padding: 2}}
        bordered={true}
        hoverable
        style={{
          userSelect: "none",
          width: 160,
          marginBottom: 8,
          zIndex: 999,
          height: "100%"
        }}
        size="small"
        cover={
          <>
            {itemSong.avatar ?
              (
                <img
                  alt="example"
                  src={itemSong.avatar}
                  style={{
                    userSelect: "none",
                    width: 160,
                    height: 160,
                  }}
                />
              ) : (
                <img
                  alt="example"
                  src="https://play-lh.googleusercontent.com/D9X7m5dTNzjeSPxBqzh1RwrZLXJDFTpht9-8W8RJtiaOAlFxNvL5MnSDRxoDnQRYhz0"
                  style={{
                    userSelect: "none",
                    width: 160,
                    height: 160,
                  }}
                />
              )
            }
            <Tooltip
              placement="topLeft"
              title={<span style={{color: "#222222"}}>Play now</span>}
              color={"#fff"}
            >
              <Button
                className="btn-play-song"
                shape="circle"
                icon={<FaPlay/>}
                size="large"
                onClick={handlePlayNow}
                style={{
                  marginTop: -52,
                  marginLeft: 12,
                  zIndex: "999 !important",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </Tooltip>
          </>
        }
      >
        <Card.Meta
          title={
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 0"}}>
              <span style={{overflow: "hidden", textOverflow: "ellipsis"}} title={itemSong.name}>{itemSong.name}</span>
              <Tooltip
                placement={"topLeft"}
                title={<span style={{color: "#222222"}}>Add to queue</span>}
                color={"#fff"}
              >
                <Button size={"small"} className="btn-song-of-playlist" onClick={handleAddToQueue}>
                  <PiQueueFill/>
                </Button>
              </Tooltip>
            </div>
          }
          description={
            itemSong.singers.length > 0 ?
              (
                <span style={{overflow: "hidden", textOverflow: "ellipsis"}}>{itemSong.singers.map((i, ind) => {
                  return <span className={"hover-decoration"} key={ind}
                               onClick={() => navigate(`/singer-profile/${i.id}`)}>{i.name}, </span>
                })}</span>
              ) : (
                <span><i>No singer</i></span>
              )
          }
          style={{padding: "0px 5px 5px 5px"}}
        />
      </Card>
    </div>
  );
}

export default CardSongOfHomepage;