
import React from "react";
import { Form, Input, Button, Checkbox, Radio, InputNumber } from 'antd';
import FormItem from "antd/lib/form/FormItem";
class Compiler extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requiredMark: "optional"
    }
  }
  /**
   * 表单提交
   * */ 
  onFinish = (values) => {
    console.log('Success:', values);
    console.log(this.formRef)
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  resetForm = () => {
    console.log(this.formRef.current)
    this.formRef.current.resetFields()
  }
  /**
   * 表单设置
   * */ 
  setRequiredMarkType = (requiredMarkValue) => {
    this.setState({
      requiredMark: requiredMarkValue
    })
  }
  onRequiredTypeChange = ({ requiredMarkValue }) => {
    console.log('requiredMarkValue', requiredMarkValue)
    this.setRequiredMarkType(requiredMarkValue);
  };
  onNumberChange = (value) => {
    setNumber({ ...validatePrimeNumber(value), value });
  };
  formRef = React.createRef();
  render() {
    const layout = {
      labelCol: {
        span: 2,
      },
      wrapperCol: {
        span: 22,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 2,
        span: 2,
      },
    };

    /**
      * antd form表单相关属性
      * @param initialValues 初始化表单数据
      * @param layout 布局（按删格布局）
      * @param ref (通过React.createRef创建表单数据域)
      * @param requiredMark 控制必选样式切换
      * @param size 表单尺寸
      * @returns {boolean}
    */
    return (
      <div className="wrapper">
        <h3>这是一个表单提交的demo</h3>
        <Form
          {...layout}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          ref={this.formRef}
          initialValues={{
            accound: "18820854754"
          }}
          layout="vertical"
          size="large"
          onValuesChange={this.onRequiredTypeChange}
          requiredMark={this.state.requiredMark}
        >
          <Form.Item label="必选切换" name="requiredMarkValue">
            <Radio.Group>
              <Radio.Button value="optional">Optional</Radio.Button>
              <Radio.Button value>Required</Radio.Button>
              <Radio.Button value={false}>Hidden</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="账号"
            name="accound"
            rules={[
              {
                required: true,
                message: "请输入您的账号！"
              }
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
          >
            <Input.Password></Input.Password>
          </Form.Item>
          <Form.Item
            {...tailLayout}
          >
            <Button htmlType="submit">提交</Button>
            <Button htmlType="button" onClick={this.resetForm}>重置</Button>
          </Form.Item>
          <FormItem>
            <InputNumber min={8} max={12} value={number.value} onChange={onNumberChange} />
          </FormItem>
        </Form>
      </div>
    )
  }
}
export default Compiler