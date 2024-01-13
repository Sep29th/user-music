import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Col, Dropdown, Row } from "antd";
import "./UserLLayout.scss";
import { FaCaretDown } from "react-icons/fa";
import FooterUserLayoutAudioPlayer from "../../UI/FooterUserLayoutAudioPlayer";
import {useSelector} from "react-redux";

const UserLayout = () => {
  const navigate = useNavigate();
  const authInfo = useSelector(state => state.auth);

  const items = [
    {
      key: "1",
      label: (
        <a
          rel="noopener noreferrer"
          onClick={() => navigate("/detail-information")}
        >
          Account
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          rel="noopener noreferrer"
          onClick={() => navigate(`/singer-profile/${authInfo.id}`)}
        >
          Your wall
        </a>
      ),
    },
    {
      key: "3",
      danger: true,
      label: (
        <a rel="noopener noreferrer" onClick={() => navigate("/login")}>
          Sign out
        </a>
      ),
    },
  ];
  return (
    <>
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
                  Sountify
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
  );
};

export default UserLayout;
