import {Col, ConfigProvider, Row, Tabs} from "antd";
import "./style.css";
import ListSearchResultSong from "../../components/UI/ListSearchResultSong";
import ListSearchResultSinger from "../../components/UI/ListSearchResultSinger";
import ListSearchResultPlaylist from "../../components/UI/ListSearchResultPlaylist";
import SearchInputSelect from "../../components/UI/SearchInputSelect/index.jsx";

const items = [
  {
    key: "1",
    label: "Songs",
    children: <ListSearchResultSong/>,
  },
  {
    key: "2",
    label: "Singers",
    children: <ListSearchResultSinger/>,
  },
  {
    key: "3",
    label: "Playlists",
    children: <ListSearchResultPlaylist/>,
  }
];
const SearchResult = () => {
  return (
    <>
      <Row justify={"center"}>
        <Col span={11}>
          <SearchInputSelect/>
        </Col>
        <Col span={14}>
          <h2 style={{paddingLeft: 24}}>Result: </h2>
        </Col>
        <Col span={14}>
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  itemActiveColor: "#31c27c",
                  itemSelectedColor: "#31c27c",
                  inkBarColor: "#31c27c",
                },
              },
            }}
          >
            <Tabs
              size="large"
              tabBarStyle={{color: "#31c27c"}}
              tabPosition={"left"}
              items={items}
            />
          </ConfigProvider>
        </Col>
      </Row>
    </>
  );
};

export default SearchResult;
