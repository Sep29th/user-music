import { Button, Col, Divider, Row, Tooltip } from "antd";
import "react-multi-carousel/lib/styles.css";
import RightSideBarHomePage from "../../components/UI/RightSideBarHomePage";
import { useEffect, useState } from "react";
import { getAllMainpagePlayList } from "../../services/api/playlist/index.js";
import CardItemSongHomepage from "../../components/UI/CardItemSongHomepage/index.jsx";
import Carousel from "react-multi-carousel";
import { countClickByDay, countClickByMonth, countClickByWeek } from "../../services/api/click/index.js";
import CardSongOfHomepage from "../../components/UI/CardSongOfHomepage/index.jsx";
import { getTopSinger } from "../../services/api/singer/index.js";
import CardSingerHomepage from "../../components/UI/CardSingerHomepage/index.jsx";
import { IoMdPlay } from "react-icons/io";
import { PiQueueFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addSongList, playListSongNow } from "../../redux/actions/songQueue/index.js";
import { getTopSongWithMostListensByCategory } from "../../services/api/song/index.js";

const TopSongByCategory = (props) => {
  const { item, positionDivider } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <Divider orientation={positionDivider} plain>
        <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
          {positionDivider === "left" ?
            (
              <>
                <h2>{item?.category?.name}</h2>
                <Tooltip placement="topRight" title={"Add to queue"}>
                  <Button
                    shape="circle"
                    size={"large"}
                    className="btn-song-of-playlist"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick={() => dispatch(addSongList(item?.songs))}
                  >
                    <PiQueueFill style={{ fontSize: 20 }} />
                  </Button>
                </Tooltip>
                <Tooltip placement="topLeft" title={"Play all now"}>
                  <Button
                    shape="circle"
                    size={"large"}
                    className="btn-song-of-playlist"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onClick={() => dispatch(playListSongNow(item?.songs))}
                  >
                    <IoMdPlay style={{ fontSize: 20 }} />
                  </Button>
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip placement="topLeft" title={"Play all now"}>
                  <Button
                    shape="circle"
                    size={"large"}
                    className="btn-song-of-playlist"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onClick={() => dispatch(playListSongNow(item?.songs))}
                  >
                    <IoMdPlay style={{ fontSize: 20 }} />
                  </Button>
                </Tooltip>
                <Tooltip placement="topRight" title={"Add to queue"}>
                  <Button
                    shape="circle"
                    size={"large"}
                    className="btn-song-of-playlist"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick={() => dispatch(addSongList(item?.songs))}
                  >
                    <PiQueueFill style={{ fontSize: 20 }} />
                  </Button>
                </Tooltip>
                <h2>{item?.category?.name}</h2>
              </>
            )
          }
        </div>
      </Divider>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className="carousel__mainpage"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
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
        {item?.songs.map((itemSong, indexSong) => <CardSongOfHomepage
          key={indexSong} itemSong={itemSong} />)}
      </Carousel>
    </div>
  );
}
const Home = () => {
  const [playlistMainPageList, setPlaylistMainPageList] = useState([]);
  const [listTopSongToday, setListTopSongToday] = useState([]);
  const [listTopSongThisWeek, setListTopSongThisWeek] = useState([]);
  const [listTopSinger, setListTopSinger] = useState([]);
  const [listTopSongByCategory, setListTopSongByCategory] = useState([]);
  const [listTopSongThisMonth, setListTopSongThisMonth] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      setPlaylistMainPageList((await getAllMainpagePlayList()).content);
      setListTopSongToday((await countClickByDay()).content);
      setListTopSinger((await getTopSinger(10)).content);
      setListTopSongByCategory((await getTopSongWithMostListensByCategory()).content);
      setListTopSongThisWeek((await countClickByWeek()).content);
      setListTopSongThisMonth((await countClickByMonth()).content);
    })();
  }, []);
  return (
    <>
      <Row gutter={[0, 15]} justify={"center"}>
        <Col span={16}>
          <div>
            <Divider orientation="left" plain>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h2>Today's Playlist for you</h2>
            </Divider>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className="carousel__mainpage"
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
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
              {playlistMainPageList.map((itemSongOfPlaylist, indexSongOfPlaylist) => <CardItemSongHomepage
                key={indexSongOfPlaylist} itemPlaylist={itemSongOfPlaylist} />)}
            </Carousel>
          </div>
          {listTopSongToday.length > 0 &&
            <div>
              <Divider orientation="right" plain>
                <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
                  <Tooltip placement="topLeft" title={"Play all now"}>
                    <Button
                      shape="circle"
                      size={"large"}
                      className="btn-song-of-playlist"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                      onClick={() => dispatch(playListSongNow(listTopSongToday.map(i => i.song)))}
                    >
                      <IoMdPlay style={{ fontSize: 20 }} />
                    </Button>
                  </Tooltip>
                  <Tooltip placement="topRight" title={"Add to queue"}>
                    <Button
                      shape="circle"
                      size={"large"}
                      className="btn-song-of-playlist"
                      style={{
                        display: "flex",

                        justifyContent: "center",
                      }}
                      onClick={() => dispatch(addSongList(listTopSongToday.map(i => i.song)))}
                    >
                      <PiQueueFill style={{ fontSize: 20 }} />
                    </Button>
                  </Tooltip>
                  <h2>Top songs of today</h2>
                </div>
              </Divider>
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className="carousel__mainpage"
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
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
                {listTopSongToday.map((itemSong, indexSong) => <CardSongOfHomepage
                  key={indexSong} itemSong={itemSong.song} rank={indexSong + 1} />)}
              </Carousel>
            </div>
          }
          <div>
            <Divider orientation="left" plain>
              <h2>Popular artists</h2>
            </Divider>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className="carousel__mainpage"
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
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
              {listTopSinger.map((itemSinger, indexSinger) => <CardSingerHomepage
                key={indexSinger} itemSinger={itemSinger} />)}
            </Carousel>
          </div>
          {listTopSongByCategory.length > 0 &&
            <TopSongByCategory item={listTopSongByCategory[0]} positionDivider={"right"} />}
          <div>
            <Divider orientation="left" plain>
              <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
                <h2>Top songs of this week</h2>
                <Tooltip placement="topRight" title={"Add to queue"}>
                  <Button
                    shape="circle"
                    size={"large"}
                    className="btn-song-of-playlist"
                    style={{
                      display: "flex",

                      justifyContent: "center",
                    }}
                    onClick={() => dispatch(addSongList(listTopSongThisWeek.map(i => i.song)))}
                  >
                    <PiQueueFill style={{ fontSize: 20 }} />
                  </Button>
                </Tooltip>
                <Tooltip placement="topLeft" title={"Play all now"}>
                  <Button
                    shape="circle"
                    size={"large"}
                    className="btn-song-of-playlist"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onClick={() => dispatch(playListSongNow(listTopSongThisWeek.map(i => i.song)))}
                  >
                    <IoMdPlay style={{ fontSize: 20 }} />
                  </Button>
                </Tooltip>
              </div>
            </Divider>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className="carousel__mainpage"
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
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
              {listTopSongThisWeek.map((itemSong, indexSong) => <CardSongOfHomepage
                key={indexSong} itemSong={itemSong.song} rank={indexSong + 1} />)}
            </Carousel>
          </div>
          {listTopSongByCategory.length > 0 &&
            <TopSongByCategory item={listTopSongByCategory[1]} positionDivider={"right"} />}
          <div>
            <Divider orientation="left" plain>
              <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
                <h2>Top songs of this month</h2>
                <Tooltip placement="topRight" title={"Add to queue"}>
                  <Button
                    shape="circle"
                    size={"large"}
                    className="btn-song-of-playlist"
                    style={{
                      display: "flex",

                      justifyContent: "center",
                    }}
                    onClick={() => dispatch(addSongList(listTopSongThisMonth.map(i => i.song)))}
                  >
                    <PiQueueFill style={{ fontSize: 20 }} />
                  </Button>
                </Tooltip>
                <Tooltip placement="topLeft" title={"Play all now"}>
                  <Button
                    shape="circle"
                    size={"large"}
                    className="btn-song-of-playlist"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onClick={() => dispatch(playListSongNow(listTopSongThisMonth.map(i => i.song)))}
                  >
                    <IoMdPlay style={{ fontSize: 20 }} />
                  </Button>
                </Tooltip>
              </div>
            </Divider>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className="carousel__mainpage"
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
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
              {listTopSongThisMonth.map((itemSong, indexSong) => <CardSongOfHomepage
                key={indexSong} itemSong={itemSong.song} rank={indexSong + 1} />)}
            </Carousel>
          </div>
          {listTopSongByCategory.length > 0 &&
            <TopSongByCategory item={listTopSongByCategory[2]} positionDivider={"right"} />}
        </Col>
        <Col
          span={6}
          style={{
            paddingLeft: 16,
            marginLeft: 16,
            borderLeft: "1px solid #f7f7f7"
          }}
        >
          <RightSideBarHomePage />
        </Col>
      </Row>
    </>
  );
};

export default Home;