import { Col, Row } from "antd";
import CardLikedSong from "../CardLikedSong";
import CardPlaylistOfLibrary from "../CardPlaylistOfLibrary";

const ListPlaylistOfLibrary = () => {
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
      </Row>
    </>
  );
};

export default ListPlaylistOfLibrary;
