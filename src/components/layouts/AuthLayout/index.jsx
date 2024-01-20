import { Outlet } from "react-router-dom";
import { Col, Row } from "antd";
import "./AuthLayout.scss";
import "animate.css";

const AuthLayout = () => {
  return (
    <div style={{overflow: "hidden", height: "100vh"}}>
      <div className={"AuthLayout__background"}>
        <div className={"AuthLayout__background-overlay"}>
        </div>
        <Row
          gutter={[0, 15]}
          justify={"center"}
          align={"middle"}
          style={{ height: "100%", zIndex: 999, position: "relative" }}
        >
          <Col span={8}>
            <div className={"AuthLayout__card animate__animated animate__fadeInUp"}>
              <Outlet />
            </div>
          </Col>
        </Row>
      </div>
      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
    </div>
  );
};

export default AuthLayout;
