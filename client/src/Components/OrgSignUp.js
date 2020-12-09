import { Form, Input, Button} from 'antd';
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

export function OrgSignUp() {
    const onFinish = (values) => {
        console.log('Success:', values);
        api.createOrg(values);
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
            label="Name"
            name="name"
            rules={[
                {
                required: true,
                message: 'Please input your name!',
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
            <Form.Item
            label="Website"
            name="website"
            rules={[
                {
                required: true,
                message: 'Please input your website\'s URL!',
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            label="Description"
            name="desc"
            rules={[
                {
                required: false,
                message: 'Please input your description!',
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            label="Cause"
            name="cause"
            rules={[
                {
                required: false,
                message: 'Please input your cause!',
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            label="Location"
            name="location"
            rules={[
                {
                required: false,
                message: 'Please input your location!',
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}