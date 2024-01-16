import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllActiveSong} from "../../../services/api/song/index.js";
import {Col, List, Row} from "antd";
import CardSongItem from "../CardSongItem/index.jsx";

const ListSearchResultSong = () => {
  const location = useLocation();
  const searchString = (new URLSearchParams(location.search)).get('search');
  const [listSong, setListSong] = useState([]);
  useEffect(() => {
    (async () => {
      setListSong((await getAllActiveSong(searchString)).content);
    })()
  }, [searchString]);
  return (
    <Row>
      <Col span={24}>
        <List
          size="small"
          itemLayout="horizontal"
          dataSource={listSong}
          renderItem={(item, index) => <CardSongItem key={index} item={item}/>}
        />
      </Col>
    </Row>
  );
};

export default ListSearchResultSong;
