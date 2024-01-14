import {Col, Row} from "antd";
import CardLikedSong from "../CardLikedSong";
import {useSelector} from "react-redux";

const ListLikedSong = () => {
  const likedList = useSelector(state => state.favorite);
  return (
    <>
      <Row gutter={[15, 40]}>
        {likedList.length > 0 && likedList.map((i, ind) => {
          return (
            <Col span={4} key={ind}>
              <CardLikedSong item={i} key={i.id}/>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ListLikedSong;
