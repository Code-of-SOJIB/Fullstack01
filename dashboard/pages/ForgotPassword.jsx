import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
 

const ForgotPassword = () => {

  let [loading,setloading]= useState(false)

  const onFinish = async(values) => {
    console.log('Success:', values);
    let data = await axios.post(
      "http://localhost:8000/api/v1/auth/forgotPass",
      {
       
        email: values.email,
      },
      {
        headers: {
          Authorization: "w70AEQPO5HOJUn",
        },
      }
    );
    console.log(data);
    setloading(false)
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
      label="email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
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
      <Button type="primary" loading={loading} disabled={loading} htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </>
  )
}

export default ForgotPassword
