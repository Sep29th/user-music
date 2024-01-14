import {Space} from "antd";
import CardAlbumOfSinger from "../CardAlbumOfSinger";
import {useEffect, useState} from "react";
import {getAllAlbumBySingerId} from "../../../services/api/album/index.js";

const AlbumsOfSinger = (props) => {
  const {singerProfile} = props;
  const [listAlbums, setListAlbums] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getAllAlbumBySingerId(singerProfile.id);
      if (data.content) setListAlbums(data.content);
    })();
  }, [singerProfile]);
  return (
    <>
      <Space size={[51, 16]} wrap>
        {listAlbums.map((i, ind) => (
          <CardAlbumOfSinger item={i} key={ind}/>
        ))}
      </Space>
    </>
  );
};
export default AlbumsOfSinger;
