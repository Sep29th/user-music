import { Button, Col, ConfigProvider, Form, Input, Row } from "antd";
import "./Login.scss";
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "#363a37",
          colorTextPlaceholder: "#707570",
          colorBorder: "none",
          activeBorderColor: "#31c27c",
          colorText: "#31c27c",
          hoverBorderColor: "#31c27c",
        },
        components: {
          Input: {
            activeBorderColor: "#36c27c",
            hoverBorderColor: "#36c27c",
            colorPrimaryActive: "#36c27c",
            fontSize: 11,
            inputFontSizeLG: 20,
          },
          Button: {
            hoverBorderColor: "#31c27c",
            colorBorder: "#31c27c",
          },
        },
      }}
    >
      <Form>
        <Row
          gutter={[0, 20]}
          justify={"center"}
          align={"middle"}
          style={{
            padding: "20px",
            borderRadius: "10px",
            backdropFilter: "blur(15px)",
            border: "1px solid #585858",
          }}
        >
          <Col span={24} style={{ textAlign: "center" }}>
            {" "}
            <span className={"Login__title"}>USER LOGIN</span>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Input
                size={"large"}
                addonBefore={
                  <FaUser style={{ color: "#363a37", fontSize: 24 }} />
                }
                placeholder={"username"}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Input.Password
                size={"large"}
                addonBefore={
                  <FaLock style={{ color: "#363a37", fontSize: 24 }} />
                }
                placeholder={"password"}
              />
            </Form.Item>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "end",
            }}
          >
            <span
              style={{
                borderRadius: "50px",
                fontSize: "18px",
                color: "#363a37",
                marginTop: -24,
                marginBottom: 24,
                fontWeight: 600,
              }}
            >
              Don't have an account?{" "}
              <Link
                to={"/register"}
                style={{ textDecoration: "underline", color: "#31c27c" }}
              >
                Sign up now
              </Link>
            </span>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              className="btn-song-of-playlist"
              size={"large"}
              style={{
                background: "#31c27c",
                color: "#363a37",
                width: "40%",
                display: "flex",
                justifyContent: "center",
                fontSize: 24,
              }}
            >
              Login
            </Button>
          </Col>
        </Row>
      </Form>
    </ConfigProvider>
  );
};
export default Login;
