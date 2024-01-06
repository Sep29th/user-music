import React, { useState } from "react";
import "./style.css";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  ConfigProvider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Spin,
  Upload,
} from "antd";
import { FaPlus } from "react-icons/fa";
const { Option } = Select;
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];
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
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
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
              prefix: "86",
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
              <Input />
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
              <Input />
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
              <Input.Password />
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
              <Input />
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
              <Input placeholder="your link" />
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
                style={{ height: 200 }}
              />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                className="btn-song-of-playlistt-update"
                htmlType="submit"
              >
                Update your profile
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>
      </Col>
      <Col span={6}>
        <Upload
          name="avatar"
          listType="picture-circle"
          className="avatar-uploader"
          showUploadList={false}
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          //beforeUpload={beforeUpload}
          // onChange={handleChange}
        >
          <button
            style={{
              border: 0,
              background: "none",
            }}
            type="button"
          >
            {false ? <Spin /> : <FaPlus />}
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload profile image
            </div>
          </button>
        </Upload>
      </Col>
    </Row>
  );
};
export default DetailInfoMation;
