import {Button, Col, ConfigProvider, Result, Row, Select} from "antd";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {getAllActiveSong} from "../../../services/api/song/index.js";
import {getAllActiveSinger} from "../../../services/api/singer/index.js";
import {searchAllPlaylistByNameForUser} from "../../../services/api/playlist/index.js";
import {debounce} from "../../../helpers/debounce/index.js";
import {useDispatch} from "react-redux";
import {playOneSongNow} from "../../../redux/actions/songQueue/index.js";

const SearchInputSelect = () => {
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState('');
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const handleRenderOptions = (options) => {
    if (options.data.searchType === 'song') {
      return (
        <Row align={"middle"} onClick={() => dispatch(playOneSongNow(options.data))}>
          <Col span={4} style={{display: "flex", alignItems: "center"}}>
            {options.data.avatar ?
              (
                <img
                  src={options.data.avatar}
                  style={{width: 45, aspectRatio: "1/1", objectFit: "cover", borderRadius: "9px"}}
                />
              ) : (
                <img
                  src={"https://play-lh.googleusercontent.com/D9X7m5dTNzjeSPxBqzh1RwrZLXJDFTpht9-8W8RJtiaOAlFxNvL5MnSDRxoDnQRYhz0"}
                  style={{width: 45, aspectRatio: "1/1", objectFit: "cover", borderRadius: "9px"}}
                />
              )
            }
          </Col>
          <Col span={17}>
            <h4 style={{
              margin: 0,
              padding: 0,
              width: "80%",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}>{options.data.name}</h4>
            <span style={{
              fontSize: 12,
              color: "#6d6d6d"
            }}>{options.data.singers[0]?.name ? options.data.singers[0]?.name : "No singer"}</span>
          </Col>
          <Col span={3}>
            <span style={{color: "#dcdcdc"}}>Track</span>
          </Col>
        </Row>
      );
    } else if (options.data.searchType === 'singer') {
      return (
        <Row align={"middle"} onClick={() => navigate(`/singer-profile/${options.data.id}`)}>
          <Col span={4} style={{display: "flex", alignItems: "center"}}>
            {options.data.avatar ?
              (
                <img
                  src={options.data.avatar}
                  style={{width: 35, aspectRatio: "1/1", objectFit: "cover", borderRadius: "50%"}}
                />
              ) : (
                <img
                  src={"https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg"}
                  style={{width: 35, aspectRatio: "1/1", objectFit: "cover", borderRadius: "50%"}}
                />
              )
            }
          </Col>
          <Col span={17}>
            <h4 style={{
              margin: 0,
              padding: 0,
              width: "80%",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}>{options.data.name}</h4>
          </Col>
          <Col span={3}>
            <span style={{color: "#dcdcdc"}}>Singer</span>
          </Col>
        </Row>
      );
    } else if (options.data.searchType === 'playlist') {
      return (
        <Row align={"middle"} onClick={() => navigate(`/list-song-of-playlist/${options.data.id}`)}>
          <Col span={4} style={{display: "flex", alignItems: "center"}}>
            <img
              src={"https://images.unsplash.com/photo-1611339555312-e607c8352fd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fHNwb3RpZnl8ZW58MHx8fHwxNjQ2MjE2MDQ2&ixlib=rb-1.2.1&q=80&w=2000"}
              style={{width: 60, height: 55, objectFit: "cover"}}
            />
          </Col>
          <Col span={17}>
            <h4 style={{
              margin: 0,
              padding: 0,
              width: "80%",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}>{options.data.name}</h4>
            <span style={{
              fontSize: 12,
              color: "#6d6d6d"
            }}>List by {options.data.creator.name}</span>
          </Col>
          <Col span={3}>
            <span style={{color: "#dcdcdc"}}>Playlist</span>
          </Col>
        </Row>
      );
    }
  }
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#31c27c",
          colorPrimaryHover: "#31c27c",
          colorPrimaryActive: "#31C27C"
        }
      }}
    >
      <div style={{display: "flex", justifyContent: "space-between", gap: 3}}>
        <Select
          listHeight={700}
          size={"large"}
          style={{flex: 1}}
          placeholder={"Search tracks, singers, playlist and album you want..."}
          showSearch
          notFoundContent={
            <Result
              status="404"
              title="Tell us what are you looking for ?"
              subTitle="More than 250k tracks are waiting for you"
            />
          }
          suffixIcon={<></>}
          options={options}
          variant={"borderless"}
          optionRender={handleRenderOptions}
          filterOption={() => true}
          onSearch={debounce((e) => {
            (async () => {
              setValueSearch(e);
              if (e !== '') {
                let dataSong = (await getAllActiveSong(e)).content.map(i => {
                  return {
                    ...i,
                    searchType: 'song'
                  }
                });
                let dataSinger = (await getAllActiveSinger(e)).content.map(i => {
                  return {
                    ...i,
                    searchType: 'singer'
                  }
                });
                let dataPlaylist = (await searchAllPlaylistByNameForUser(e)).content.map(i => {
                  return {
                    ...i,
                    searchType: 'playlist'
                  }
                });
                setOptions([...dataSong, ...dataSinger, ...dataPlaylist].sort((a, b) => {
                  let nameA = a.name.toLowerCase();
                  let nameB = b.name.toLowerCase();
                  if (nameA < nameB) return -1;
                  if (nameA > nameB) return 1;
                  return 0;
                }).splice(0, 10));
              } else {
                setOptions([]);
              }
            })()
          }, 300)}
        />
        <Button size={"large"} style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                icon={<FaSearch/>}
                onClick={() => valueSearch !== '' && navigate(`/search-result?search=${valueSearch}`)}></Button>
      </div>
    </ConfigProvider>
  );
}

export default SearchInputSelect;