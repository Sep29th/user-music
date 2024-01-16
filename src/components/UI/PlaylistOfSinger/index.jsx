import {Row} from "antd";
import CardPlaylistOfSinger from "../CardPlaylistOfSinger";
import {useEffect, useState} from "react";
import {getAllPlaylistByUserId} from "../../../services/api/playlist/index.js";
import {useSelector} from "react-redux";

const PlaylistOfSinger = (props) => {
  const {singerProfile} = props;
  const authInfo = useSelector(state => state.auth);
  const [listPlaylist, setListPlaylist] = useState([]);
  useEffect(() => {
    (async () => {
      const data = (await getAllPlaylistByUserId(singerProfile.id)).content;
      if (authInfo.id === singerProfile.id) setListPlaylist(data);
      else setListPlaylist(data.filter(i => i.status === true));
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
