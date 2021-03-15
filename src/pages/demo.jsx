import React, { useState } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'

const Demo = () => {
    const [contacts, setContacts] = useState([{ name: 'zhangsan', mobile: '15011176302' }]);
    console.log('contacts', contacts)
    // 提交
    const [form] = Form.useForm()
    const submitForm = () => {
        form.validateFields()
            .then(values => {
                console.log(values);
            })
    }
    // 添加
    const add = () => {
        form.setFieldsValue({ "contacts": [...contacts, { name: '', mobile: '' }] })
        return setContacts([...contacts, { name: '', mobile: '' }])
    }
    // 删除
    const del = (index) => {
        form.setFieldsValue({ "contacts": [...contacts.slice(0, index), ...contacts.slice(index + 1)] })
        return setContacts([...contacts.slice(0, index), ...contacts.slice(index + 1)])
    }
    // 输入框监听
    const onChange = (index, name, event) => {
        let tempArray = [...contacts];
        if ('name' === name)
            tempArray[index] = { ...tempArray[index], name: event.target.value }
        else
            tempArray[index] = { ...tempArray[index], mobile: event.target.value }
        return setContacts(tempArray)
    }
    const contactsItems = contacts.map((item, index) => {
        return <Row key={index}>
            <Col span={10}>
                <Form.Item label="name" name={['contacts', index, 'name']}><Input onChange={(event) => onChange(index, 'name', event)} /></Form.Item>
            </Col>
            <Col span={10}>
                <Form.Item label="mobile" name={['contacts', index, 'mobile']} ><Input onChange={(event) => onChange(index, 'mobile', event)} /></Form.Item>
            </Col>
            <Col span={3} offset={1}>
                <Button type="primary" onClick={() => del(index)}>-</Button>
            </Col>
        </Row>
    })
    return <Row>
        <Col>
            <Form name="user_form" form={form} layout={'horizontal'} onFinish={submitForm} initialValues={{ contacts: contacts }}>
                <Form.Item label="username" name="username">
                    <Input />
                </Form.Item>
                <Form.Item label="contacts">
                    {contactsItems}
                </Form.Item>
                <Form.Item><Button type="primary" onClick={add}>+</Button></Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType='submit'>submit</Button>
                </Form.Item>
            </Form>
        </Col>
    </Row>
}
export default Demo