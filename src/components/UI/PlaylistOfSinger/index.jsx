import {Row} from "antd";
import CardPlaylistOfSinger from "../CardPlaylistOfSinger";
import {useEffect, useState} from "react";
import {getAllPlaylistByUserId} from "../../../services/api/playlist/index.js";

const PlaylistOfSinger = (props) => {
  const {singerProfile} = props;
  const [listPlaylist, setListPlaylist] = useState([]);
  useEffect(() => {
    (async () => {
      const data = (await getAllPlaylistByUserId(singerProfile.id)).content;
      setListPlaylist(data.filter(i => i.status === true));
    })();
  }, [singerProfile.id]);
  return (
    <>
      <Row gutter={[20, 20]} justify={"center"}>
        {listPlaylist.map((i, ind) => <CardPlaylistOfSinger item={i} key={ind}/>)}
      </Row>
    </>
  );
};
export default PlaylistOfSinger;
