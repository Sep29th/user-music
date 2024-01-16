import {Col, Row} from "antd";
import React, {useEffect, useState} from "react";
import CardPlaylistOfSinger from "../CardPlaylistOfSinger";
import {useLocation} from "react-router-dom";
import {searchAllPlaylistByNameForUser} from "../../../services/api/playlist/index.js";
import CardSingerHomepage from "../CardSingerHomepage/index.jsx";
import CardItemSongHomepage from "../CardItemSongHomepage/index.jsx";

const ListSearchResultPlaylist = () => {
  const location = useLocation();
  const searchString = (new URLSearchParams(location.search)).get('search');
  const [listPlaylist, setListPlaylist] = useState([]);
  useEffect(() => {
    (async () => {
      setListPlaylist((await searchAllPlaylistByNameForUser(searchString)).content);
    })()
  }, [searchString]);
  return (
    <>
      <Row>
        <Col span={24}>
          <Row gutter={[20, 20]}>
            {listPlaylist.map((item, index) => <Col span={7}><div style={{width: "93%"}}><CardItemSongHomepage key={index} itemPlaylist={item}/></div></Col>)}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ListSearchResultPlaylist;
