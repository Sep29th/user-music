import { Modal, Tabs } from "antd";
import React from "react";
import AddToPlaylistOfModal from "../AddToPlaylistOfModal";
import CreateNewPlaylistModal from "../CreateNewPlayListModal";

const items = [
  {
    key: "1",
    label: (
      <a
        className="tab-label ant-tabs-tab ant-tabs-tab  ant-tabs-tab-btn"
        style={{ fontSize: 20 }}
      >
        Add to playlist
      </a>
    ),
    children: <AddToPlaylistOfModal />,
  },
  {
    key: "2",
    label: (
      <a
        className="tab-label ant-tabs-tab ant-tabs-tab  ant-tabs-tab-btn"
        style={{ fontSize: 20 }}
      >
        Create new playlist
      </a>
    ),
    children: <CreateNewPlaylistModal />,
  },
];

const ModalPlaylist = (props) => {
  const { isModalOpen, setIsModalOpen } = props;
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      cancelButtonProps={{
        style: {
          display: "none",
        },
      }}
      okButtonProps={{
        style: {
          display: "none",
        },
      }}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Tabs defaultActiveKey="1" items={items} />
    </Modal>
  );
};

export default ModalPlaylist;
