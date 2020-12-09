import { Form, Input, Button } from 'antd';
import api from '../Scripts/api';

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

export function UserSignUp() {
    const onFinish = (values) => {
        values.card = [];
        console.log('Success:', values);
        api.createUser(values);
      };
    
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

      

    return(
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
            label="Firstname"
            name="firstname"
            rules={[
                {
                required: true,
                message: 'Please input your firstname!',
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            label="Lastname"
            name="lastname"
            rules={[
                {
                required: true,
                message: 'Please input your lastname!',
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
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}