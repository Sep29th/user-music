import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Col, Dropdown, Row } from "antd";
import "./UserLLayout.scss";
import { FaCaretDown, FaPowerOff, FaUser } from "react-icons/fa";
import FooterUserLayoutAudioPlayer from "../../UI/FooterUserLayoutAudioPlayer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateFavoritePlaylist } from "../../../redux/actions/favorite/index.js";
import {
  getAllPlaylistByUserId,
  getAllSongByPlaylistId,
  getFavoritePlaylistByUserId,
} from "../../../services/api/playlist/index.js";
import { updateListPlaylist } from "../../../redux/actions/playlist/index.js";
import LyricArea from "../../UI/LyricArea/index.jsx";
import { FaGear } from "react-icons/fa6";
import { clearQueue } from "../../../redux/actions/songQueue/index.js";
import { deleteLocalStorage, getLocalStorage } from "../../../services/localStorage/index.js";
import { decode } from "../../../services/api/auth/index.js";
import { login } from "../../../redux/actions/auth/index.js";

const UserLayout = () => {
  const navigate = useNavigate();
  const authInfo = useSelector((state) => state.auth);
  const [view, setView] = useState(false);
  const dispatch = useDispatch();
  const items = [
    {
      key: "1",
      label: (
        <div
          style={{
            width: 140,
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={() => navigate("/detail-information")}
        >
          <span style={{ fontWeight: 700 }}>Your information</span>
          <FaGear
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          style={{
            width: 140,
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={() => navigate(`/singer-profile/${authInfo.id}`)}
        >
          <span style={{ fontWeight: 700 }}>Your profile</span>
          <FaUser
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          />
        </div>
      ),
    },
    {
      key: "3",
      danger: true,
      label: (
        <div
          style={{
            width: 140,
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={() => {
            dispatch(clearQueue());
            deleteLocalStorage('user-token')
            navigate(`/login`);
          }}
        >
          <span style={{ fontWeight: 700 }}>Logout</span>
          <FaPowerOff
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          />
        </div>
      ),
    },
  ];
  useEffect(() => {
    if (getLocalStorage("user-token") != "" ) {
      (async () => {
        if(authInfo.id==null){
          const dataS = await decode(getLocalStorage('user-token'))
          dispatch(login(dataS.content))
          console.log("ok nay ", authInfo)
          setView(true);
          const data = await getAllSongByPlaylistId(
            (
              await getFavoritePlaylistByUserId(authInfo.id)
            ).content.id
          );
          if (data.content) dispatch(updateFavoritePlaylist(data.content));
          dispatch(
            updateListPlaylist(
              (await getAllPlaylistByUserId(authInfo.id)).content
            )
          );
        }
        else if (authInfo.id) {
          setView(true);
          const data = await getAllSongByPlaylistId(
            (
              await getFavoritePlaylistByUserId(authInfo.id)
            ).content.id
          );
          if (data.content) dispatch(updateFavoritePlaylist(data.content));
          dispatch(
            updateListPlaylist(
              (await getAllPlaylistByUserId(authInfo.id)).content
            )
          );
        }
      })();
    } else {
      navigate("/login");
    }
  }, [authInfo,dispatch, navigate]);
  return (
    <>
      {view && (
        <>
          <LyricArea />
          {/* header */}
          <Row gutter={[0, 15]} justify={"center"} style={{ marginBottom: 16 }}>
            <Col span={24} style={{ backgroundColor: "#333333" }}>
              <Row justify={"center"}>
                <Col
                  span={15}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "70px",
                    textAlign: "center",
                  }}
                >
                  <Col span={4} style={{ borderRight: "1px solid #cccccc" }}>
                    <NavLink
                      className={"Header__nav"}
                      to={"/"}
                      style={{
                        color: "white",
                        fontSize: "25px",
                        fontWeight: "700",
                      }}
                    >
                      Soundtify
                    </NavLink>
                  </Col>
                  <Col
                    span={2}
                    style={{
                      borderRight: "1px solid #cccccc",
                      textAlign: "center",
                    }}
                  >
                    <NavLink
                      className={"Header__nav"}
                      to={"/library"}
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "700",
                      }}
                    >
                      Library
                    </NavLink>
                  </Col>
                  <Col span={13}></Col>
                  {authInfo.role === 3 && authInfo.status === true ? (
                    <Col
                      span={3}
                      style={{
                        borderRight: "1px solid #cccccc",
                        textAlign: "center",
                        float: "right",
                      }}
                    >
                      <NavLink
                        className={"Header__nav"}
                        to={"/for-singer"}
                        style={{
                          color: "white",
                          fontSize: "15px",
                          fontWeight: "700",
                        }}
                      >
                        For singer
                      </NavLink>
                    </Col>
                  ) : (
                    <Col
                      span={3}
                      style={{
                        textAlign: "center",
                        float: "right",
                      }}
                    ></Col>
                  )}
                  <Col span={2}>
                    <Dropdown menu={{ items }} placement="bottomRight">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={authInfo.avatar}
                          style={{
                            width: "26px",
                            height: "26px",
                            borderRadius: "50%",
                            objectPosition: "center",
                          }}
                        />
                        <FaCaretDown
                          style={{ color: "white", marginLeft: "10px" }}
                        />
                      </div>
                    </Dropdown>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* body */}
          <Outlet />
          {/* footer */}
          <FooterUserLayoutAudioPlayer />
        </>
      )}
    </>
  );
};

export default UserLayout;
