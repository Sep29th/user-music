import { Col, Row } from "antd";
import CardLikedSong from "../CardLikedSong";

const ListLikedSong = () => {
  return (
    <>
      <Row gutter={[15, 40]}>
        {[...Array(20)].map(() => {
          return (
            <>
              <Col span={4}>
                <CardLikedSong />
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default ListLikedSong;
