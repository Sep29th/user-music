import { Alert, Button, Col, ConfigProvider, Form, Input, Row, Tabs } from "antd";
import { useState } from "react";
import { FaLock, FaLockOpen, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { singerRegister, userRegister } from "../../services/api/auth";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
import { saveFavoritePlaylist } from "../../services/api/playlist"

const Register = () => {
  const [status, setStatus] = useState("1");
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = () => {
    if (status === "1") {
      let name = form1.getFieldValue('name');
      let email = form1.getFieldValue('email');
      let password = form1.getFieldValue('password');
      let repassword = form1.getFieldValue('repassword');
      if (password !== repassword) setAlert("Password and repass don't match!");
      else {
        (async () => {
          setLoading(true);
          let infomation = await userRegister({ name: name, email: email, password: password });
          if (infomation.status === "BAD_REQUEST") setAlert(infomation.message);
          else {
            await saveFavoritePlaylist(infomation.content);
            dispatch(login(infomation.content));
            navigate("/");
          }
          setLoading(false);
        })();
      }
    } else {
      let name = form2.getFieldValue('name');
      let email = form2.getFieldValue('email');
      let password = form2.getFieldValue('password');
      let repassword = form2.getFieldValue('repassword');
      if (password !== repassword) setAlert("Password and repass don't match!");
      else {
        (async () => {
          setLoading(true);
          let infomation = await singerRegister({ name: name, email: email, password: password });
          if (infomation.status === "BAD_REQUEST") setAlert(infomation.message);
          else {
            await saveFavoritePlaylist(infomation.content);
            dispatch(login(infomation.content));
            navigate("/");
          }
          setLoading(false);
        })();
      }
    }
  }
  return (
    <>
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
        <Row
          gutter={[0, 15]}
          justify={"center"}
          align={"middle"}
          style={{
            padding: "20px",
            borderRadius: "10px",
            backdropFilter: "blur(15px)",
            border: "1px solid #585858",
          }}
        >
          <Col span={22} style={{ textAlign: "center" }}>
            <span className={"Login__title"}>REGISTER</span>
          </Col>
          <Col span={22} style={{ textAlign: "start" }}></Col>
          <Col span={22}>
            <Tabs
              onChange={e => setStatus(e)}
              items={[
                {
                  label: (
                    <p
                      style={{
                        fontSize: "25px",
                        color: "#31c27c",
                        margin: 0,
                      }}
                    >
                      Listener
                    </p>
                  ),
                  key: "1",
                  children: (
                    <Form form={form1}>
                      <Col span={24}>
                        <Form.Item rules={[{ required: true }]} name={"name"}>
                          <Input
                            size={"large"}
                            addonBefore={
                              <FaUser
                                style={{ color: "#363a37", fontSize: 24 }}
                              />
                            }
                            placeholder={"Username"}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item rules={[{ required: true }]} name={"email"}>
                          <Input
                            size={"large"}
                            addonBefore={
                              <FaUser
                                style={{ color: "#363a37", fontSize: 24 }}
                              />
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
                              <FaLock
                                style={{ color: "#363a37", fontSize: 24 }}
                              />
                            }
                            placeholder={"Password"}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item rules={[{ required: true }]} name={"repassword"}>
                          <Input.Password
                            size={"large"}
                            addonBefore={
                              <FaLockOpen
                                style={{ color: "#363a37", fontSize: 24 }}
                              />
                            }
                            placeholder={"Re-type password"}
                          />
                        </Form.Item>
                      </Col>
                    </Form>
                  ),
                },
                {
                  label: (
                    <p
                      style={{
                        fontSize: "25px",
                        color: "#31c27c",
                        margin: 0,
                      }}
                    >
                      Singer
                    </p>
                  ),
                  key: "2",
                  children: (
                    <Form form={form2}>
                      <Col span={24}>
                        <Form.Item rules={[{ required: true }]} name={"name"}>
                          <Input
                            size={"large"}
                            addonBefore={
                              <FaUser
                                style={{ color: "#363a37", fontSize: 24 }}
                              />
                            }
                            placeholder={"Username"}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item rules={[{ required: true }]} name={"email"}>
                          <Input
                            size={"large"}
                            addonBefore={
                              <FaUser
                                style={{ color: "#363a37", fontSize: 24 }}
                              />
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
                              <FaLock
                                style={{ color: "#363a37", fontSize: 24 }}
                              />
                            }
                            placeholder={"Password"}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item rules={[{ required: true }]} name={"repassword"}>
                          <Input.Password
                            size={"large"}
                            addonBefore={
                              <FaLockOpen
                                style={{ color: "#363a37", fontSize: 24 }}
                              />
                            }
                            placeholder={"Re-type password"}
                          />
                        </Form.Item>
                      </Col>
                    </Form>
                  ),
                },
              ]}
            />
          </Col>
          <Col
            span={19}
            style={{
              borderRadius: "50px",
              fontSize: "18px",
              color: "#363a37",
              marginTop: -24,
              marginBottom: 24,
              fontWeight: 600,
            }}
          >
            <span
              style={{
                fontSize: 18,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Already have account? {"  "}
              <Link
                to={"/login"}
                style={{ textDecoration: "underline", color: "#31c27c" }}
              >
                {" "}
                Login here
              </Link>
            </span>
          </Col>
          {alert &&
            <Col span={15}>
              <Alert
                message={alert}
                type="error"
                showIcon
              />
            </Col>
          }
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
              onClick={handleRegister}
            >
              Register
            </Button>
          </Col>
        </Row>
      </ConfigProvider>
    </>
  );
};

export default Register;
