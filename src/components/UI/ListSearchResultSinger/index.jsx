import { Col, Row } from "antd";
import React from "react";
import CardFollowingOfLibrary from "../CardFollowingOfLibrary";

const ListSearchResultSinger = () => {
  return (
    <>
      <Row gutter={[15, 40]}>
        {[...Array(20)].map(() => {
          return (
            <>
              <Col span={5}>
                <CardFollowingOfLibrary />
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default ListSearchResultSinger;
