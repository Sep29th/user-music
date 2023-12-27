import {Button, Col, Form, Input, Row} from "antd";
import './Login.scss';
import {FaLock, FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <Form>
      <Row gutter={[0, 15]} justify={"center"} align={"middle"} style={{
        padding: "20px",
        borderRadius: "20px",
        backdropFilter: "blur(15px)",
        border: "1px solid #cccccc"
      }}>
        <Col span={22} style={{textAlign: "center"}}>
          <span className={"Login__title"}>ĐĂNG NHẬP</span>
        </Col>
        <Col span={18}>
          <Form.Item>
              <Input size={"large"} addonBefore={<FaUser style={{color: "white"}}/>} placeholder={"Email"}/>
          </Form.Item>
        </Col>
        <Col span={18}>
          <Form.Item>
              <Input.Password size={"large"} addonBefore={<FaLock style={{color: "white"}}/>} placeholder={"Mật khẩu"}/>
          </Form.Item>
        </Col>
        <Col span={18} style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
          <Button size={"large"} style={{borderRadius: "50px", fontFamily: "'Dancing Script', cursive", fontSize: "20px"}}>Login</Button>
          <span style={{borderRadius: "50px", fontFamily: "'Dancing Script', cursive", fontSize: "25px", color: "white"}}>Chưa có tài khoản? → <Link to={"/register"} style={{textDecoration: "underline", color: "#FFA732"}}>Đăng ký ngay</Link></span>
        </Col>
      </Row>
    </Form>
  );
}
export default Login;