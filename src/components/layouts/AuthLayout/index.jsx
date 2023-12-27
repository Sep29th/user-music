import {Outlet} from "react-router-dom";
import {Col, Row} from "antd";
import './AuthLayout.scss';

const AuthLayout = () => {
  return (
    <div className={"AuthLayout__background"}>
      <Row gutter={[0, 15]} justify={"center"} align={"middle"} style={{height: "100%"}}>
        <Col span={12}>
          <div className={"AuthLayout__card animate__animated animate__fadeInUp"}>
            <Outlet/>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AuthLayout;