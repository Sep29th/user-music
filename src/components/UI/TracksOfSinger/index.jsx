import {Col, List, Row} from "antd";
import CardSongItem from "../CardSongItem";
import {useEffect, useState} from "react";
import {getAllSongBySingerId} from "../../../services/api/song/index.js";

const TracksOfSinger = (props) => {
  const {singerProfile} = props;
  const [listSong, setListSong] = useState([]);
  useEffect(() => {
    (async () => {
      setListSong((await getAllSongBySingerId(singerProfile.id)).content.filter(i => i.status === 2));
    })()
  }, [singerProfile]);
  return (
    <>
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
    </>
  );
};
export default TracksOfSinger;
