import React from "react";
import { Button, Checkbox, Form, Input, Alert, Space } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";

const OtpVerification = () => {
  let params = useParams();
  console.log(params.email);

  const onFinish = async (values) => {
    console.log('Success:', values.otp);
    let data = await axios.post("http://localhost:8000/api/v1/auth/OtpVerification",{
      email: params.email,
      otp: values.otp,
    }
    )
    console.log(data);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="code"
          name="otp"
          rules={[
            {
              required: true,
              message: "Please input your OTP!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default OtpVerification;
