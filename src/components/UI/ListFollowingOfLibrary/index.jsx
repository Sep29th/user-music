import {Col, Row} from "antd";
import CardFollowingOfLibrary from "../CardFollowingOfLibrary";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getFollowedSinger} from "../../../services/api/singer/index.js";

const ListFollowingOfLibrary = () => {
  const authInfo = useSelector(state => state.auth);
  const [listFollowed, setListFollowed] = useState({});
  useEffect(() => {
    (async () => {
      setListFollowed((await getFollowedSinger(authInfo.id)));
    })()
  }, []);
  return (
    <>
      <Row gutter={[15, 40]}>
        {listFollowed.content && listFollowed.content.map((i, ind) => {
          return (
            <Col span={4} key={ind}>
              <CardFollowingOfLibrary item={i}/>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ListFollowingOfLibrary;
