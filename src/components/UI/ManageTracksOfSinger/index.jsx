import {Col, Divider, List, Row} from "antd";
import {useEffect, useState} from "react";
import CardSongEditOfSinger from "../CardSongEditOfSinger";
import {useSelector} from "react-redux";
import {getAllSongByCreatorId} from "../../../services/api/song/index.js";

const ManageTracksOfSinger = (props) => {
  const {reload} = props;
  const authInfo = useSelector(state => state.auth);
  const [listTrack, setListTrack] = useState([]);
  useEffect(() => {
    (async () => {
      setListTrack((await getAllSongByCreatorId(authInfo.id)).content)
    })()
  }, [authInfo.id, reload]);
  return (
    <Row style={{marginBottom: 100}}>
      <Col>
        <h2>Your tracks</h2>
      </Col>
      <Col span={24}>
        <Divider/>
      </Col>
      <Col span={24}>
        <List
          size="small"
          itemLayout="horizontal"
          dataSource={listTrack}
          renderItem={(item, index) => <CardSongEditOfSinger item={item} listTrack={listTrack} setListTrack={setListTrack} key={index}/>}
        />
      </Col>
    </Row>
  );
};

export default ManageTracksOfSinger;
