import {Card} from "antd";
import "./style.css";
import {useNavigate} from "react-router-dom";

const CardAlbumOfSinger = (props) => {
  const {item} = props;
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/list-song-of-album/${item.id}`)}
      className="card-album"
      bodyStyle={{padding: 2}}
      bordered={true}
      style={{
        width: 160,
        marginBottom: 16,
        overflow: "hidden",
        boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
        cursor: "pointer",
      }}
      size="large"
      cover={
        <div
          style={{padding: 16, width: 160, height: 160, background: "#e9e9e9"}}
        >
          <img
            alt="example"
            src={item.thumbnail}
            style={{
              width: 128,
              height: 128,
              display: "flex",
              alignItems: "center",
            }}
          />
        </div>
      }
    >
      <Card.Meta
        title={
          <div
            style={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <span style={{width: "100%", textAlign: "center", overflow: "hidden", textOverflow: "ellipsis"}}>{item.name}</span>
          </div>
        }
        style={{padding: "0px 5px 5px 5px"}}
      />
    </Card>
  );
};
export default CardAlbumOfSinger;
