import { Space } from "antd";
import CardItemSongHomepage from "../CardItemSongHomepage";
import CardAlbumOfSinger from "../CardAlbumOfSinger";

const AlbumsOfSinger = () => {
  return (
    <>
      <Space size={[56, 16]} wrap>
        {new Array(20).fill(null).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <CardAlbumOfSinger />
        ))}
      </Space>
    </>
  );
};
export default AlbumsOfSinger;
