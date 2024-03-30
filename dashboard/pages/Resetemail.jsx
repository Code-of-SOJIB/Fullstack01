import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Modal } from 'antd';


const Resetemail = () => {
 
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const showModal = () => {
    //   setIsModalOpen(true);
    // };
    // const handleOk = () => {
    //   setIsModalOpen(false);
    // };
    // const handleCancel = () => {
    //   setIsModalOpen(false);
    // };

    const onFinish = async (values) => {
      console.log('Success:', values);
      
      let data = await axios.post("http://localhost:8000/api/v1/auth/resetemail",{
        email: values.email,
      }
      )  
      console.log(data);
    
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

  return (
    <div>
      {/* <Button type="primary" onClick={showModal}>
        Resend email
      </Button>
      <Modal title="Resend email" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>
      </Modal> */}

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
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
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
    </div>
  )
}

export default Resetemail