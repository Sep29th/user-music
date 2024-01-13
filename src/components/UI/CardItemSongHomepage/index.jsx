import {Button, Card, Popover, Tooltip} from "antd";
import "./style.css";
import {FaPlay} from "react-icons/fa";
import {IoIosMore} from "react-icons/io";
import {MdOutlineQueueMusic} from "react-icons/md";
import {useDispatch} from "react-redux";
import {addOneSong, playOneSongNow} from "../../../redux/actions/songQueue/index.js";

const CardItemSongHomepage = (props) => {
  const {itemSongOfPlaylist} = props;
  const dispatch = useDispatch();
  const handleAddSongToQueue = () => {
    dispatch(addOneSong(itemSongOfPlaylist));
  }
  const handlePlayNow = () => {
    dispatch(playOneSongNow(itemSongOfPlaylist));
  }
  return (
    <div
      style={{
        borderRadius: "9px",
        padding: "15px",
        backgroundColor: "#f2f2f2",
        marginRight: "64px",
      }}
    >
      <Card
        bodyStyle={{padding: 2}}
        bordered={true}
        hoverable
        style={{
          width: 160,
          marginBottom: 16,
        }}
        size="small"
        cover={
          <>
            {itemSongOfPlaylist.avatar ?
              (
                <img
                  alt="example"
                  src={itemSongOfPlaylist.avatar}
                  style={{
                    width: 160,
                    height: 160,
                  }}
                />
              ) : (
                <img
                  alt="example"
                  src="https://play-lh.googleusercontent.com/D9X7m5dTNzjeSPxBqzh1RwrZLXJDFTpht9-8W8RJtiaOAlFxNvL5MnSDRxoDnQRYhz0"
                  style={{
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{overflow: "hidden", textOverflow: "ellipsis"}}>{itemSongOfPlaylist.name}</span>
              <Popover
                content={
                  <div
                    className="hover-add-to-queue"
                    style={{
                      display: "flex",
                      width: 160,
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderRadius: "5px"
                    }}
                    onClick={handleAddSongToQueue}
                  >
                    <span>Add to queue</span>
                    <MdOutlineQueueMusic
                      style={{fontSize: 24, color: "#31c27c"}}
                    />
                  </div>
                }
                placement="bottomLeft"
              >
                <a
                  style={{
                    color: "#31c27c",
                    display: "flex",
                    alignItems: "center",
                    padding: "1px",
                    backgroundColor: "#f0efef",
                    borderRadius: "50%"
                  }}
                >
                  <IoIosMore style={{fontSize: 20}}/>
                </a>
              </Popover>
            </div>
          }
          description={<span style={{
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}>{itemSongOfPlaylist.singers.length > 0 ?
            (
              itemSongOfPlaylist.singers.map(itemSingerOfSong => itemSingerOfSong.name).join(", ")
            ) : (
              <i style={{textDecoration: "underline"}}>Dont have singer</i>
            )
          }</span>}
          style={{padding: "0px 5px 5px 5px"}}
        />
      </Card>
    </div>
  );
};
export default CardItemSongHomepage;
