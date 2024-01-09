import {
  Button,
  Col,
  ConfigProvider,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Upload,
} from "antd";
import Dragger from "antd/es/upload/Dragger";
import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { PlusOutlined } from "@ant-design/icons";
import { LuUpload } from "react-icons/lu";
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const UploadSongOfSinger = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#31c27c",
          colorPrimaryHover: "#31c27c",
          colorPrimaryBorder: "#31c27c",
        },
        components: {
          Input: {
            activeBorderColor: "#31c27c",
            hoverBorderColor: "#31c27c",
          },
        },
      }}
    >
      <Form layout="vertical" size="medium">
        <Row justify={"center"}>
          <Col span={13}>
            <h2>Upload your music & audio and share.</h2>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Dragger accept="audio/*">
                <p className="ant-upload-drag-icon">
                  <IoCloudUploadOutline style={{ fontSize: 60 }} />
                </p>
                <p className="ant-upload-text">
                  Click or drag song file to this area to upload
                </p>
              </Dragger>
            </Form.Item>
            <Form.Item label="Name">
              <Input />
            </Form.Item>
            <Form.Item label="Category">
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
                }}
                placeholder="Please select category"
                options={options}
              />
            </Form.Item>

            <Form.Item label="Collab Singer">
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
                }}
                placeholder="Please select category"
                options={options}
              />
            </Form.Item>

            <Form.Item
              label="Upload Thumbnail"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload action="/upload.do" listType="picture-card">
                <button
                  style={{
                    border: 0,
                    background: "none",
                  }}
                  type="button"
                >
                  <PlusOutlined />
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

            <Form.Item label="Upload lyrics" name={"file"}>
              <Upload accept=".lrc">
                <Button icon={<LuUpload />}>Click to upload lyrics file</Button>
              </Upload>
            </Form.Item>

            <Form.Item style={{ display: "flex", justifyContent: "end" }}>
              <div style={{ display: "flex", gap: 10 }}>
                <Button type="primary">Submit</Button>
                <Button>Cancel</Button>
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </ConfigProvider>
  );
};

export default UploadSongOfSinger;
