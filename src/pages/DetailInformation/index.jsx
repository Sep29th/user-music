import "./style.css";
import {Button, Col, ConfigProvider, Form, Input, notification, Row, Upload,} from "antd";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PlusOutlined} from "@ant-design/icons";
import {updateSinger, uploadAvatar} from "../../services/api/singer/index.js";
import {updateUser} from "../../services/api/user/index.js";
import {login} from "../../redux/actions/auth/index.js";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const DetailInfoMation = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const authInfo = useSelector(state => state.auth);
  const [imgSrc, setImgSrc] = useState(authInfo.avatar);
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (title, description) => {
    api['success']({
      key: 1,
      message: title,
      description: description,
    });
  };
  const onFinish = (values) => {
    (async () => {
      setLoading(true);
      let linkS3 = {};
      if (values.avatar) {
        let formData = new FormData();
        formData.append("avatar", values.avatar.file);
        linkS3.avatar = (await uploadAvatar(formData)).content;
      }
      let objUpdt = {
        bio: values.bio,
        email: values.email,
        name: values.name,
        ...linkS3,
        id: authInfo.id,
        socialMediaLink: values.website,
        nickName: values.nickname
      }
      if (values.password) objUpdt.password = values.password;
      let userInfoUpdated = {}
      if (authInfo.role === 3) userInfoUpdated = (await updateSinger(objUpdt)).content;
      else userInfoUpdated = (await updateUser({...values, ...linkS3, id: authInfo.id})).content;
      dispatch(login(userInfoUpdated));
      form.setFieldsValue({
        ...userInfoUpdated,
        nickname: userInfoUpdated.nickName ? userInfoUpdated.nickName : '',
        website: userInfoUpdated.socialMediaLink ? userInfoUpdated.socialMediaLink : '',
      })
      openNotification("Update success", "Update your information was success, get back for detail");
      setLoading(false)
    })();
  };
  return (
    <>
      {contextHolder}
      <Row justify={"center"}>
        <Col
          span={6}
          style={{
            textAlign: "end",
          }}
        >
          <h2>Account Center</h2>
        </Col>
        <Col span={18}></Col>

        <Col span={12}>
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  activeBorderColor: "#31c27c",
                  hoverBorderColor: "#31c27c",
                },
              },
            }}
          >
            <Form
              size="large"
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                name: authInfo.name ? authInfo.name : '',
                email: authInfo.email ? authInfo.email : '',
                nickname: authInfo.nickName ? authInfo.nickName : '',
                website: authInfo.socialMediaLink ? authInfo.socialMediaLink : '',
                bio: authInfo.bio ? authInfo.bio : '',
                password : authInfo.password
              }}
              style={{
                maxWidth: 600,
              }}
              scrollToFirstError
            >
              <Form.Item
                name="name"
                label="Name"
                dependencies={["name"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your name!",
                  },
                ]}
              >
                <Input/>
              </Form.Item>

              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input/>
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password/>
              </Form.Item>

              <Form.Item
                name="nickname"
                label="Nickname"
                tooltip="Your nickname ?"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                    whitespace: true,
                  },
                ]}
              >
                <Input/>
              </Form.Item>

              <Form.Item
                name="website"
                label="Social media link"
                rules={[
                  {
                    required: true,
                    message: "Please input your social media link!",
                  },
                ]}
              >
                <Input placeholder="your link"/>
              </Form.Item>

              <Form.Item
                name="bio"
                label="Bio"
                rules={[
                  {
                    required: true,
                    message: "Please input bio",
                  },
                ]}
              >
                <Input.TextArea
                  showCount
                  maxLength={850}
                  style={{height: 200}}
                />
              </Form.Item>
              <Form.Item
                label="Upload Avatar"
                name={"avatar"}
              >
                <Upload
                  multiple={false}
                  beforeUpload={(file) => {
                    const reader = new FileReader();
                    reader.onload = e => {
                      setImgSrc(e.target?.result + "");
                    }
                    reader.readAsDataURL(file);
                    return false;
                  }}
                  showUploadList={false}
                  listType="picture-card"
                >
                  <button
                    style={{
                      border: 0,
                      background: "none",
                    }}
                    type="button"
                  >
                    <PlusOutlined/>
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Upload
                    </div>
                  </button>
                </Upload>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button
                  className="btn-song-of-playlistt-update"
                  htmlType="submit"
                  loading={loading}
                >
                  Update your profile
                </Button>
              </Form.Item>
            </Form>
          </ConfigProvider>
        </Col>
        <Col span={6}>
          {imgSrc &&
            <img src={imgSrc} style={{width: 200, aspectRatio: "1/1", objectFit: "cover", borderRadius: "50%"}}/>}
        </Col>
      </Row>
    </>
  );
};
export default DetailInfoMation;
