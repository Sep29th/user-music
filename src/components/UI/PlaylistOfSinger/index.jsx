import { Col, Row } from "antd";
import CardPlaylistOfSinger from "../CardPlaylistOfSinger";

const PlaylistOfSinger = () => {
  return (
    <>
      <Row gutter={[20, 20]} justify={"center"}>
        {[...Array(10)].map(() => {
          return (
            <>
              <CardPlaylistOfSinger />
            </>
          );
        })}
      </Row>
    </>
  );
};
export default PlaylistOfSinger;
