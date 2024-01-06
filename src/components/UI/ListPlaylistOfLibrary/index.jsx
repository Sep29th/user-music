import { Button, Col, Modal, Row, Tabs, Tooltip } from "antd";
import CardPlaylistOfLibrary from "../CardPlaylistOfLibrary";
import { FaPlus } from "react-icons/fa";
import { PiQueueFill } from "react-icons/pi";
import { useState } from "react";
import CreateNewPlaylistModal from "../CreateNewPlayListModal";

const items = [
  {
    key: "1",
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
const ListPlaylistOfLibrary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Row gutter={[15, 40]}>
        {[...Array(20)].map(() => {
          return (
            <>
              <Col span={4}>
                <CardPlaylistOfLibrary />
              </Col>
            </>
          );
        })}
        <Col span={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <a>
              <>
                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    gap: 8,
                    bottom: 60,
                    right: 10,
                  }}
                ></div>
              </>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  aspectRatio: "1/1",
                }}
              >
                <Tooltip placement="right" title="Create new playlist">
                  <Button
                    className="btn-song-of-playlist"
                    onClick={() => setIsModalOpen(true)}
                    icon={<FaPlus style={{ fontSize: 40 }} />}
                    style={{
                      display: "flex",
                      flex: 1,
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </Tooltip>
              </div>
            </a>
          </div>
        </Col>
      </Row>

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
    </>
  );
};

export default ListPlaylistOfLibrary;
