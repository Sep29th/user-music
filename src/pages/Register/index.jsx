import { Button, Col, ConfigProvider, Form, Input, Row, Tabs } from "antd";
import { FaLock, FaLockOpen, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
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
                    <Form>
                      <Col span={24}>
                        <Form.Item>
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
                        <Form.Item>
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
                        <Form.Item>
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
                    <Form>
                      <Col span={24}>
                        <Form.Item>
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
                        <Form.Item>
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
                        <Form.Item>
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
              Register
            </Button>
          </Col>
        </Row>
      </ConfigProvider>
    </>
  );
};

export default Register;
