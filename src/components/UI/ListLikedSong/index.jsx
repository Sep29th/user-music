import {Col, Row} from "antd";
import CardLikedSong from "../CardLikedSong";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllSongByPlaylistId, getFavoritePlaylistByUserId} from "../../../services/api/playlist/index.js";

const ListLikedSong = () => {
  const authInfo = useSelector(state => state.auth);
  const [likedList, setLikedList] = useState({});
  useEffect(() => {
    (async () => {
      setLikedList((await getAllSongByPlaylistId((await getFavoritePlaylistByUserId(authInfo.id)).content.id)));
    })()
  }, []);
  return (
    <>
      <Row gutter={[15, 40]}>
        {likedList.content && likedList.content.map((i) => {
          return (
            <>
              <Col span={4}>
                <CardLikedSong item={i} key={i.id}/>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default ListLikedSong;
