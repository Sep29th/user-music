import {Button, Col, Row, Tooltip} from "antd";
import {useEffect, useState} from "react";
import {FaLock, FaLockOpen} from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";
import {useDispatch, useSelector} from "react-redux";
import {addSongToPlaylist, getAllSongByPlaylistId, updatePlaylist} from "../../../services/api/playlist/index.js";
import {updateOnePlaylistOfListPlaylist} from "../../../redux/actions/playlist/index.js";

const ItemPlaylist = (props) => {
  const {item, songTarget} = props;
  const [allSongOfPlaylist, setAllSongOfPlaylist] = useState([]);
  const [isPublic, setIsPublic] = useState(item.status);
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const statusPlaylistChangeTo = (targetStatus) => {
    (async () => {
      const playlistAfterUpdate = (await updatePlaylist({
        id: item.id,
        name: item.name,
        status: targetStatus
      })).content;
      dispatch(updateOnePlaylistOfListPlaylist(playlistAfterUpdate));
      setIsPublic(!isPublic);
    })();
  }
  const handleAddToPlaylist = () => {
    (async () => {
      const newData = (await addSongToPlaylist(item.id, songTarget.id)).content;
      dispatch(updateOnePlaylistOfListPlaylist(newData));
      setIsAdded(true);
    })();
  };
  useEffect(() => {
    (async () => {
      const obj = await getAllSongByPlaylistId(item.id);
      if (obj.content) setAllSongOfPlaylist(obj.content);
      if (obj.content.findIndex(i => i.id === songTarget.id) !== -1) setIsAdded(true);
    })();
  }, []);
  return (
    <Col
      span={24}
      style={{
        height: 70,
        padding: "10px 0px",
        borderBottom: "1px solid #cacaca",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {
          allSongOfPlaylist[0]?.avatar ?
            (
              <img
                src={allSongOfPlaylist[0].avatar}
                style={{
                  height: "100%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
              />
            ) : (
              <img
                src="https://cdn.smehost.net/dailyrindblogcom-orchardprod/wp-content/uploads/2016/03/playlist2.png"
                style={{
                  height: "100%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
              />
            )
        }
        <span style={{fontSize: 18, fontWeight: 500}}>{item.name}</span>
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginRight: 8,
        }}
      >
        {!isPublic ? (
          <Tooltip
            placement="left"
            title={<span style={{color: "#222222"}}>set to public</span>}
            color={"#fff"}
          >
            <Button
              size={"small"}
              className="btn-song-of-playlist"
              onClick={() => statusPlaylistChangeTo(true)}
            >
              <FaLock/>
            </Button>
          </Tooltip>
        ) : (
          <Tooltip
            placement="left"
            title={<span style={{color: "#222222"}}>set to private</span>}
            color={"#fff"}
          >
            <Button
              size={"small"}
              className="btn-song-of-playlist"
              onClick={() => statusPlaylistChangeTo(false)}
            >
              <FaLockOpen/>
            </Button>
          </Tooltip>
        )}
        {isAdded ? (
          <Button
            size={"small"}
            disabled
          >
            Added
          </Button>
        ) : (
          <Button
            size={"small"}
            className="btn-song-of-playlist"
            onClick={handleAddToPlaylist}
          >
            Add to playlist
          </Button>
        )}
      </div>
    </Col>
  );
};

const AddToPlaylistOfModal = (props) => {
  const {songTarget} = props;
  const listPlaylist = useSelector(state => state.playlist);
  return (
    <>
      <InfiniteScroll
        className={"rightSidebarScroll"}
        dataLength={10}
        height={400}
        scrollableTarget="scrollableDiv"
      >
        <Row>
          {listPlaylist.map((i, ind) => {
            return <ItemPlaylist item={i} songTarget={songTarget} key={ind}/>;
          })}
        </Row>
      </InfiniteScroll>
    </>
  );
};

export default AddToPlaylistOfModal;
