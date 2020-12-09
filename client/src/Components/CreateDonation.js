import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export function CreateDonation() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Organization"
        name="Orgname"
        rules={[
          {
            required: true,
            message: 'Please input your the organization name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Name on card',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="card number"
        name="card number"
        rules={[
          {
            required: true,
            message: 'Card number',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="date"
        name="date"
        rules={[
          {
            required: true,
            message: 'MM/YY',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="cvc"
        name="cvc"
        rules={[
          {
            required: true,
            message: 'CVC',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Recurring Donation</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}