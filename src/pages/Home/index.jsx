import { Col, Divider, Row } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardItemSongHomepage from "../../components/UI/CardItemSongHomepage";
import RightSideBarHomePage from "../../components/UI/RightSideBarHomePage";
import {useEffect, useState} from "react";
import {getAllMainpagePlayList, getAllSongByPlaylistId} from "../../services/api/playlist/index.js";
import ListCardSongMainpage from "../../components/UI/ListCardSongMainpage/index.jsx";
import {useNavigate} from "react-router-dom";
const Home = () => {
  const [playlistMainpageList, setPlaylistMainpageList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      setPlaylistMainpageList((await getAllMainpagePlayList()).content);
    })();
  }, []);
  return (
    <>
      <Row gutter={[0, 15]} justify={"center"}>
        <Col span={16}>
          {
            playlistMainpageList.map((itemPlaylist, indexPlaylist) => {
              return (
                <div key={indexPlaylist}>
                  <>
                    {indexPlaylist % 2 === 0 ?
                      (
                        <Divider orientation="left" plain>
                          <h2 style={{cursor: "pointer"}} onClick={() => navigate(`/list-song-of-playlist/${itemPlaylist.id}`)}>{itemPlaylist.name}</h2>
                        </Divider>
                      ) : (
                        <Divider orientation="right" plain>
                          <h2 style={{cursor: "pointer"}} onClick={() => navigate(`/list-song-of-playlist/${itemPlaylist.id}`)}>{itemPlaylist.name}</h2>
                        </Divider>
                      )
                    }
                  </>
                  <ListCardSongMainpage itemPlaylist={itemPlaylist}/>
                </div>
              );
            })
          }
        </Col>

        <Col
          span={6}
          style={{
            paddingLeft: 16,
            marginLeft: 16,
            borderLeft: "1px solid #f7f7f7"
          }}
        >
          <RightSideBarHomePage />
        </Col>
      </Row>
    </>
  );
};

export default Home;
