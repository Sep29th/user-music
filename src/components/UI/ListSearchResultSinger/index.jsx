import {Col, List, Row} from "antd";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {getAllActiveSinger} from "../../../services/api/singer/index.js";
import CardSingerHomepage from "../CardSingerHomepage/index.jsx";

const ListSearchResultSinger = () => {
  const location = useLocation();
  const searchString = (new URLSearchParams(location.search)).get('search');
  const [listSinger, setListSinger] = useState([]);
  useEffect(() => {
    (async () => {
      setListSinger((await getAllActiveSinger(searchString)).content);
    })()
  }, [searchString]);
  return (
    <>
      <Row>
        <Col span={24}>
          <Row gutter={[20, 20]}>
            {listSinger.map((item, index) => <Col span={6}><CardSingerHomepage key={index} itemSinger={item}/></Col>)}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ListSearchResultSinger;
