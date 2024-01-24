import { Alert, Button, Col, ConfigProvider, Form, Input, Row } from "antd";
import "./Login.scss";
import { FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { decode, userLogin } from "../../services/api/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
import { getUserById } from "../../services/api/user";
import { getLocalStorage, setLocalStorage } from "../../services/localStorage";
import { info } from "sass";
const Login = () => {
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    (async () => {
      setLoading(true);
      const infomation = await userLogin(values);
      if (infomation.status === "BAD_REQUEST") setAlert(infomation.message);
      else {
        console.log(infomation)
        setLocalStorage("user-token",infomation.content.token);
        const data = await decode(infomation.content.token);
        if(data.status!="ok"){
          setAlert(data.message);
        }
        else{
          dispatch(login(data.content));
          navigate("/");
        }
        
      }
      setLoading(false);
    })();
  };
  useEffect(()=>{
    if(getLocalStorage('user-token')!=""){
      (async()=>{
        const dataDecode = await decode(getLocalStorage('user-token'));
        if(dataDecode.status!="ok"){
          setAlert(dataDecode.message);
        }
        else{
          dispatch(login(dataDecode.content))
          navigate("/")
        }
      })()
    }
  },[])
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
      <Form onFinish={onFinish}>
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
            <Form.Item rules={[{ required: true }]} name={"username"}>
              <Input
                size={"large"}
                addonBefore={
                  <FaUser style={{ color: "#363a37", fontSize: 24 }} />
                }
                placeholder={"Email"}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item rules={[{ required: true }]} name={"password"}>
              <Input.Password
                size={"large"}
                addonBefore={
                  <FaLock style={{ color: "#363a37", fontSize: 24 }} />
                }
                placeholder={"Password"}
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
          {alert && (
            <Col span={15}>
              <Alert message={alert} type="error" showIcon />
            </Col>
          )}
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              loading={loading}
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
              htmlType="submit"
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
