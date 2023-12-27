import {NavLink, Outlet} from "react-router-dom";
import {Col, Dropdown, Row} from "antd";
import './UserLLayout.scss';
import imglogo from '../../../assets/logo.png';
import {FaCaretDown} from "react-icons/fa";
import FooterUserLayoutAudioPlayer from "../../UI/FooterUserLayoutAudioPlayer";

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  }
];
const UserLayout = () => {
  return (

    <>
    <Row gutter={[0, 15]} justify={"center"}>
      <Col span={24} style={{backgroundColor: "#333333"}}>
        <Row justify={"center"}>
          <Col span={15} style={{display: "flex", alignItems: "center", height: "70px", textAlign: "center"}}>
            <Col span={4} style={{borderRight: "1px solid #cccccc"}}>
              <NavLink className={"Header__nav"} to={"/"} style={{color: "white", fontSize: "25px", fontWeight: "700"}}>
                KMAMusic
              </NavLink>
            </Col>
            <Col span={2} style={{borderRight: "1px solid #cccccc", textAlign: "center"}}>
              <NavLink className={"Header__nav"} to={"/library"} style={{color: "white", fontSize: "15px", fontWeight: "700"}}>
                Thư viện
              </NavLink>
            </Col>
            <Col span={13}></Col>
            <Col span={3} style={{borderRight: "1px solid #cccccc", textAlign: "center", float: "right"}}>
              <NavLink className={"Header__nav"} to={"/for-artist"} style={{color: "white", fontSize: "15px", fontWeight: "700"}}>
                Dành cho ca sĩ
              </NavLink>
            </Col>
            <Col span={2}>
              <Dropdown menu={{items}} placement="bottomRight">
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <img src={imglogo}
                       style={{width: "26px", height: "26px", borderRadius: "50%", objectPosition: "center"}}/>
                  <FaCaretDown style={{color: "white", marginLeft: "10px"}}/>
                </div>
              </Dropdown>
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
    <FooterUserLayoutAudioPlayer/>
    </>
  );
}

export default UserLayout;