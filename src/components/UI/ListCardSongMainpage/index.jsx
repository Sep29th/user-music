import {useEffect, useState} from "react";
import {getAllSongByPlaylistId} from "../../../services/api/playlist/index.js";
import CardItemSongHomepage from "../CardItemSongHomepage/index.jsx";
import Carousel from "react-multi-carousel";

const ListCardSongMainpage = (props) => {
  const {itemPlaylist} = props;
  const [listCardSongOfPlaylist, setListCardSongOfPlaylist] = useState([]);
  useEffect(() => {
    (async () => {
      setListCardSongOfPlaylist((await getAllSongByPlaylistId(itemPlaylist.id)).content);
    })();
  }, [itemPlaylist.id]);
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 5,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {listCardSongOfPlaylist.map((itemSongOfPlaylist, indexSongOfPlaylist) => <CardItemSongHomepage
        key={indexSongOfPlaylist} itemSongOfPlaylist={itemSongOfPlaylist}/>)}
    </Carousel>
  );
}

export default ListCardSongMainpage;