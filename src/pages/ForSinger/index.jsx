import React, { useState } from "react";

import "./style.css";
import {
  Button,
  Cascader,
  Checkbox,
  Col,
  ColorPicker,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Slider,
  Switch,
  Tabs,
  TreeSelect,
  Upload,
} from "antd";
import Dragger from "antd/es/upload/Dragger";
import UploadSongOfSinger from "../../components/UI/UploadSongOfSinger";
import CreateAlbumOfSinger from "../../components/UI/CreateAlbumOfSinger";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const items = [
  {
    key: "1",
    label: (
      <a
        className="tab-label ant-tabs-tab ant-tabs-tab  ant-tabs-tab-btn"
        style={{ fontSize: 24 }}
      >
        Upload song
      </a>
    ),
    children: <UploadSongOfSinger />,
  },
  {
    key: "2",
    label: (
      <a
        className="tab-label ant-tabs-tab ant-tabs-tab  ant-tabs-tab-btn"
        style={{ fontSize: 24 }}
      >
        Create Album
      </a>
    ),
    children: <CreateAlbumOfSinger />,
  },
];

const ForSinger = () => {
  return (
    <>
      <Row justify={"center"}>
        <Col span={16}>
          <Tabs size="large" defaultActiveKey="1" items={items} />
        </Col>
      </Row>
    </>
  );
};
export default ForSinger;
