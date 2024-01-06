import { Avatar, Button, Col, List, Row, Skeleton, Tooltip } from "antd";
import { FaPlay } from "react-icons/fa";
import { MdQueuePlayNext } from "react-icons/md";
import VirtualList from "rc-virtual-list";
import { IoMdPlay } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { PiQueueFill } from "react-icons/pi";
import GroupButtonOfSongItem from "../GroupButtonOfSongItem";
import CardSongItem from "../CardSongItem";
const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "",
  title: `name song ${i}`,
  //avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description: "This is song of ${trackname}",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const TracksOfSinger = () => {
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

  return (
    <>
      <Row>
        <Col span={24}>
          <List
            size="small"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => <CardSongItem />}
          />
        </Col>
      </Row>
    </>
  );
};
export default TracksOfSinger;
