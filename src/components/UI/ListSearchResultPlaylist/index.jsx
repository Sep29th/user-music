import { Row } from "antd";
import React from "react";
import CardPlaylistOfSinger from "../CardPlaylistOfSinger";

const ListSearchResultPlaylist = () => {
  return (
    <Row gutter={[20, 20]}>
      {[...Array(10)].map(() => {
        return (
          <>
            <CardPlaylistOfSinger />
          </>
        );
      })}
    </Row>
  );
};

export default ListSearchResultPlaylist;
