import {useNavigate} from "react-router-dom";

const CardSingerHomepage = (props) => {
  const {itemSinger} = props;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/singer-profile/${itemSinger.id}`);
  }
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "80%"}}>
      {itemSinger.avatar ?
        (
          <img
            onClick={handleNavigate}
            className={"imageHomePage__hover"}
            src={itemSinger.avatar} alt={"Singer avatar"}
            style={{width: "100%", borderRadius: "50%", aspectRatio: "1/1", objectFit: "cover", cursor: "pointer"}}
          />
        ) : (
          <img
            onClick={handleNavigate}
            className={"imageHomePage__hover"}
            src={"https://mcdn.podbean.com/mf/web/49ppbp/mixcloud.png"} alt={"Singer avatar"}
            style={{width: "100%", borderRadius: "50%", aspectRatio: "1/1", objectFit: "cover", cursor: "pointer"}}
          />
        )
      }
      <h4 onClick={handleNavigate} className={"hover__decoration"} style={{cursor: "pointer", marginBottom: 0, textAlign: "center"}}>{itemSinger.name} - <span style={{fontWeight: 100, color: "#787878"}}>{itemSinger.nickName}</span></h4>
      <span style={{color: "#797979"}}>{itemSinger.followers ? itemSinger.followers : 0} follower</span>
    </div>
  );
}

export default CardSingerHomepage;