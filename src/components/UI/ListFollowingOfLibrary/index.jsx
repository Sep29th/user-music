import { Col, Row } from "antd";
import CardLikedSong from "../CardLikedSong";
import CardFollowingOfLibrary from "../CardFollowingOfLibrary";

const ListFollowingOfLibrary = () => {
  return (
    <>
      <Row gutter={[15, 40]}>
        {[...Array(20)].map(() => {
          return (
            <>
              <Col span={4}>
                <CardFollowingOfLibrary />
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default ListFollowingOfLibrary;
