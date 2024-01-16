import { Outlet } from "react-router-dom";
import { Col, Row } from "antd";
import "./AuthLayout.scss";
import "animate.css";

const AuthLayout = () => {
  return (
    <div className={"AuthLayout__background"}>
      <div className={"AuthLayout__background-overlay"}>
        {/* Phần tử con này sẽ được làm mờ */}
      </div>
      <Row
        gutter={[0, 15]}
        justify={"center"}
        align={"middle"}
        style={{ height: "100%" }}
      >
        <Col span={8}>
          <div
            className={"AuthLayout__card animate__animated animate__rotateIn"}
          >
            <Outlet />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
