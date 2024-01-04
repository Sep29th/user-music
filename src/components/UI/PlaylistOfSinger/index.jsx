import { Col, Row } from "antd";
import CardPlaylistOfSinger from "../CardPlaylistOfSinger";

const PlaylistOfSinger = () => {
  return (
    <>
      <Row gutter={[20, 20]}>
        {[...Array(10)].map(() => {
          return (
            <>
              <CardPlaylistOfSinger />
              <br />
              <hr />
              <br />
            </>
          );
        })}
      </Row>
    </>
  );
};
export default PlaylistOfSinger;
