import { Form, Input, Button } from 'antd';
import React from "react";
function Compiler() {
  let [form] = Form.useForm();//使用useForm控制表单数据域/或者使用React.createRef()
  function onFinish(values) {
    console.log(form)
  }
  return (
    <>
      <Form
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="phone"
        >
          <Input placeholder="请输入您的电话号码" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
    </>
  )
}
export default Compiler