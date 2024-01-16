import {Col, Row, Tabs} from "antd";
import "./style.css";
import ListLikedSong from "../../components/UI/ListLikedSong";
import ListPlaylistOfLibrary from "../../components/UI/ListPlaylistOfLibrary";
import ListFollowingOfLibrary from "../../components/UI/ListFollowingOfLibrary";
import ListSongHistoryOfLibrary from "../../components/UI/ListSongHistoryOfLibrary/index.jsx";

const items = [
  {
    key: "1",
    label: (
      <a
        className="tab-label ant-tabs-tab ant-tabs-tab  ant-tabs-tab-btn"
        style={{fontSize: 24}}
      >
        Liked
      </a>
    ),
    children: <ListLikedSong/>,
  },
  {
    key: "2",
    label: (
      <a
        className="tab-label ant-tabs-tab ant-tabs-tab  ant-tabs-tab-btn"
        style={{fontSize: 24}}
      >
        Playlist
      </a>
    ),
    children: <ListPlaylistOfLibrary/>,
  },
  {
    key: "3",
    label: (
      <a
        className="tab-label ant-tabs-tab ant-tabs-tab  ant-tabs-tab-btn"
        style={{fontSize: 24}}
      >
        Following
      </a>
    ),
    children: <ListFollowingOfLibrary/>,
  },
  {
    key: "4",
    label: (
      <a
        className="tab-label ant-tabs-tab ant-tabs-tab  ant-tabs-tab-btn"
        style={{fontSize: 24}}
      >
        History
      </a>
    ),
    children: <ListSongHistoryOfLibrary/>,
  }
];

const Library = () => {
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

export default Library;
