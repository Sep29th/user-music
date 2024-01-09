import { Col, Divider, List, Row } from "antd";
import React from "react";
import CardSongEditOfSinger from "../CardSongEditOfSinger";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const ManageTracksOfSinger = () => {
  return (
    <>
      <Row>
        <Col>
          <h2>Your tracks</h2>
        </Col>
        <Col span={24}>
          <Divider />
        </Col>
        <Col span={24}>
          <List
            size="small"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => <CardSongEditOfSinger />}
          />
        </Col>
      </Row>
    </>
  );
};

export default ManageTracksOfSinger;
