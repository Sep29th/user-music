import {Button, Col, Form, Input, Row, Tabs} from "antd";
import {FaLock, FaLockOpen, FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <>
      <Row gutter={[0, 15]} justify={"center"} align={"middle"} style={{
        padding: "20px",
        borderRadius: "20px",
        backdropFilter: "blur(15px)",
        border: "1px solid #cccccc"
      }}>
        <Col span={22} style={{textAlign: "center"}}>
          <span className={"Login__title"}>ĐĂNG KÝ</span>
        </Col>
        <Col span={22} style={{textAlign: "start"}}>
          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "25px",
            color: "white",
            margin: 0
          }}>Bạn là ?</h2>
        </Col>
        <Col span={22}>
          <Tabs items={[
            {
              label: <p style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "25px",
                color: "white",
                margin: 0}}>Người nghe</p>,
              key: "1",
              children: (
                <Form>
                  <Col span={24}>
                    <Form.Item>
                      <Input size={"large"} addonBefore={<FaUser style={{color: "white"}}/>} placeholder={"Email"}/>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item>
                      <Input.Password size={"large"} addonBefore={<FaLock style={{color: "white"}}/>} placeholder={"Mật khẩu"}/>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item>
                      <Input.Password size={"large"} addonBefore={<FaLockOpen style={{color: "white"}}/>} placeholder={"Nhập lại mật khẩu"}/>
                    </Form.Item>
                  </Col>

                </Form>
              )
            },
            {
              label: <p style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "25px",
                color: "white",
                margin: 0}}>Ca sĩ</p>,
              key: "2",
              children: (
                <Form>
                  <Col span={24}>
                    <Form.Item>
                      <Input size={"large"} addonBefore={<FaUser style={{color: "white"}}/>} placeholder={"Email"}/>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item>
                      <Input.Password size={"large"} addonBefore={<FaLock style={{color: "white"}}/>} placeholder={"Mật khẩu"}/>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item>
                      <Input.Password size={"large"} addonBefore={<FaLockOpen style={{color: "white"}}/>} placeholder={"Nhập lại mật khẩu"}/>
                    </Form.Item>
                  </Col>

                </Form>
              )
            }
          ]}/>
        </Col>
        <Col span={18} style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
          <Button size={"large"} style={{borderRadius: "50px", fontFamily: "'Dancing Script', cursive", fontSize: "20px"}}>Register</Button>
          <span style={{borderRadius: "50px", fontFamily: "'Dancing Script', cursive", fontSize: "25px", color: "white"}}>Đã có tài khoản? → <Link to={"/login"} style={{textDecoration: "underline", color: "#FFA732"}}>Đăng nhập ngay</Link></span>
        </Col>
      </Row>
    </>
  );
}

export default Register;