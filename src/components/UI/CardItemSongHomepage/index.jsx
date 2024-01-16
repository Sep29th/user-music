import {Button, Card, Popover, Tooltip} from "antd";
import "./style.css";
import {FaPlay} from "react-icons/fa";
import {IoIosMore} from "react-icons/io";
import {MdOutlineQueueMusic} from "react-icons/md";
import {useDispatch} from "react-redux";
import {addSongList, playListSongNow} from "../../../redux/actions/songQueue/index.js";
import {useEffect, useState} from "react";
import {getAllSongByPlaylistId} from "../../../services/api/playlist/index.js";
import {useNavigate} from "react-router-dom";

const CardItemSongHomepage = (props) => {
  const {itemPlaylist} = props;
  const dispatch = useDispatch();
  const [listSongOfPlaylist, setListSongOfPlaylist] = useState([]);
  const navigate = useNavigate();
  const handleAddSongToQueue = () => {
    dispatch(addSongList(listSongOfPlaylist));
  }
  const handlePlayNow = () => {
    dispatch(playListSongNow(listSongOfPlaylist));
  }
  useEffect(() => {
    (async () => {
      setListSongOfPlaylist((await getAllSongByPlaylistId(itemPlaylist.id)).content);
    })();
  }, []);
  return (
    <div
      style={{
        borderRadius: "9px",
        padding: "15px",
        backgroundColor: "#f2f2f2",
        marginRight: "64px",
        boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
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
            {listSongOfPlaylist[0]?.avatar ?
              (
                <img
                  alt="example"
                  src={listSongOfPlaylist[0].avatar}
                  style={{
                    width: 160,
                    height: 160,
                  }}
                  onClick={() => navigate(`/list-song-of-playlist/${itemPlaylist.id}`)}
                />
              ) : (
                <img
                  alt="example"
                  src="https://cdn.smehost.net/dailyrindblogcom-orchardprod/wp-content/uploads/2016/03/playlist2.png"
                  style={{
                    width: 160,
                    height: 160,
                  }}
                  onClick={() => navigate(`/list-song-of-playlist/${itemPlaylist.id}`)}
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
              <span style={{overflow: "hidden", textOverflow: "ellipsis"}}>{itemPlaylist.name}</span>
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
          style={{padding: "0px 5px 5px 5px"}}
        />
      </Card>
    </div>
  );
};
export default CardItemSongHomepage;
