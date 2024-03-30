import React from 'react'
import { Button, Checkbox, Form, Input, Alert, Space } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
     let [loading, setloading] = useState(false)
  let [msg, setMsg] = useState("")
  let navigate = useNavigate()

  const onFinish = async (values) => {
    console.log("Success:", values);
    setloading(true)

    let data = await axios.post(
      "http://localhost:8000/api/v1/auth/registration",
      {
        name: values.username,
        email: values.email,
        password: values.password,
      },
      {
        headers: {
          Authorization: "w70AEQPO5HOJUn",
        },
      }
    );
    console.log(data);
    setloading(false)
    setMsg("Registration successfull . please check your email for verificatio")
    // setTimeout(() => {
    //   navigate(`/OtpVerification/${values.email}`)
    // },1500)
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {msg && <Alert message={msg} type="success" showIcon closable /> }
       
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" loading={loading} disabled={loading} >
            Submit
          </Button>
          <Link to="forgotpass" >Forgot Password</Link>
        </Form.Item>
        <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
      <Link to="/resetemail"> Resend email</Link>
      </Button>
     
     
    </Form.Item>
      </Form>
    </>
  )
}

export default Registration
