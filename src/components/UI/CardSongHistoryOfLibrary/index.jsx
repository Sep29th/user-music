import {FaHeart} from "react-icons/fa";
import GroupButtonOfSongItem from "../GroupButtonOfSongItem/index.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const CardSongHistoryOfLibrary = (props) => {
  const {item} = props;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      style={{display: "flex", flexDirection: "column"}}
    >
      <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isHovered && (
          <>
            <div
              style={{
                position: "absolute",
                display: "flex",
                gap: 8,
                bottom: 60,
                right: 10,
              }}
            >
              <GroupButtonOfSongItem songTarget={item}/>
            </div>
          </>
        )}
        {item.avatar ?
          (
            <img
              src={item.avatar}
              style={{
                width: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
          ) : (
            <img
              src="https://play-lh.googleusercontent.com/D9X7m5dTNzjeSPxBqzh1RwrZLXJDFTpht9-8W8RJtiaOAlFxNvL5MnSDRxoDnQRYhz0"
              style={{
                width: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
          )
        }
      </a>
      <a
        className="display-name-song-of-card-liked-song"
        style={{
          display: "inline-block",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "#424242",
          fontSize: 16,
        }}
      >
        <span>{item.name}</span>
      </a>
      <a
        style={{
          display: "inline-block",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "#969595",
          fontSize: 14,
        }}
      >
        <span>{item.singers.map((i, ind) => <span key={ind}
                                                  className="display-name-song-of-card-liked-song"
                                                  onClick={() => navigate(`/singer-profile/${i.id}`)}>{`${i.name} - `}</span>)}</span>
      </a>
    </div>
  );
}

export default CardSongHistoryOfLibrary;