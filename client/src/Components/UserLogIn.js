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

export function UserLogIn(props) {
    const onFinish = async (values) => {
        console.log('Success:', values);
        let user = await api.loginUser(values);
        props.setUser(user);
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
