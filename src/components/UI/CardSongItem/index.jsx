import {Avatar, List} from "antd";
import GroupButtonOfSongItem from "../GroupButtonOfSongItem";

const CardSongItem = (props) => {
  const {item} = props;
  return (
    <>
      <List.Item className="song-item-list-a">
        <List.Item.Meta
          avatar={
            item.avatar ?
              (
                <Avatar
                  size={"large"}
                  shape="square"
                  src={item.avatar}
                />
              ) : (
                <Avatar
                  size={"large"}
                  shape="square"
                  src={`https://play-lh.googleusercontent.com/D9X7m5dTNzjeSPxBqzh1RwrZLXJDFTpht9-8W8RJtiaOAlFxNvL5MnSDRxoDnQRYhz0`}
                />
              )
          }
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <a className="display-name-song-of-playlist">
                  {item.name}
                </a>
                {" - "}
                <a
                  className="display-name-singer-of-playlist"
                  style={{color: "#999999", fontWeight: "300"}}
                >
                  {item.singers.map(i => i.name).join(", ")}
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                <GroupButtonOfSongItem songTarget={item}/>
              </div>
            </div>
          }
          description={`release date: ${item.createdDate.slice(0, 10)}`}
        />
      </List.Item>
    </>
  );
};

export default CardSongItem;
