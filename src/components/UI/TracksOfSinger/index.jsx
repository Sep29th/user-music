import {Col, List, Row} from "antd";
import CardSongItem from "../CardSongItem";
import {useEffect, useState} from "react";
import {getAllSongBySingerId} from "../../../services/api/song/index.js";
import {useSelector} from "react-redux";

const TracksOfSinger = (props) => {
  const {singerProfile} = props;
  const authInfo = useSelector(state => state.auth);
  const [listSong, setListSong] = useState([]);
  useEffect(() => {
    (async () => {
      const data = (await getAllSongBySingerId(singerProfile.id))?.content;
      if (data) {
        if (authInfo.id === singerProfile.id) setListSong(data);
        else setListSong(data.filter(i => i.status === 2));
      }
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
