import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getHistoryByUserId} from "../../../services/api/user/index.js";
import {Col, Row} from "antd";
import CardSongHistoryOfLibrary from "../CardSongHistoryOfLibrary/index.jsx";

const ListSongHistoryOfLibrary = () => {
  const authInfo = useSelector(state => state.auth);
  const [listSong, setListSong] = useState([]);
  useEffect(() => {
    (async () => {
      setListSong((await getHistoryByUserId(authInfo.id)).content);
    })();
  }, [authInfo.id]);
  return (
    <Row gutter={[15, 40]}>
      {listSong.length > 0 && listSong.map((i, ind) => {
        return (
          <Col span={4} key={ind}>
            <CardSongHistoryOfLibrary item={i} key={i.id}/>
          </Col>
        );
      })}
    </Row>
  );
}
export default ListSongHistoryOfLibrary;