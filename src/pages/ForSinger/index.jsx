import "./style.css";
import {Col, Row, Tabs,} from "antd";
import UploadSongOfSinger from "../../components/UI/UploadSongOfSinger";
import CreateAlbumOfSinger from "../../components/UI/CreateAlbumOfSinger";
import ManageTracksOfSinger from "../../components/UI/ManageTracksOfSinger";


const ForSinger = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          className="tab-label ant-tabs-tab ant-tabs-tab  ant-tabs-tab-btn"
          style={{fontSize: 24}}
        >
          Upload song
        </a>
      ),
      children: <UploadSongOfSinger/>,
    },
    {
      key: "2",
      label: (
        <a
          className="tab-label ant-tabs-tab ant-tabs-tab  ant-tabs-tab-btn"
          style={{fontSize: 24}}
        >
          Create Album
        </a>
      ),
      children: <CreateAlbumOfSinger/>,
    },
    {
      key: "3",
      label: (
        <a
          className="tab-label ant-tabs-tab ant-tabs-tab  ant-tabs-tab-btn"
          style={{fontSize: 24}}
        >
          Your Tracks
        </a>
      ),
      children: <ManageTracksOfSinger/>,
    },
  ];
  return (
    <>
      <Row justify={"center"}>
        <Col span={16}>
          <Tabs size="large" defaultActiveKey="1" items={items}/>
        </Col>
      </Row>
    </>
  );
};
export default ForSinger;
