import { Form, Input, Button, Checkbox, Select } from 'antd';
import api from '../Scripts/api';

const { Option } = Select;

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

export function SignUpPage() {
    const onFinish = (values) => {
        console.log('Success:', values);
        postData(values);
      };
    
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

      const postData = async (values) => {
          if (values.type === "User") {
            await api.createUser(values);
          } else {
            api.createOrg(values);
          }
          console.log("Pushed data!");
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
            label="Username"
            name="username"
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
                name="type"
                label="type"
                rules={[
                    { required: true,},
                ]}
                >
            <Select
                placeholder="Select a option"
                // onChange={this.onGenderChange}
                allowClear
            >
                <Option value="Organization">Organization</Option>
                <Option value="User">User</Option>
            </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}