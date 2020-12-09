import React, { useState } from 'react';
import { Modal, Button, Form, Input, InputNumber, Select } from 'antd';

const DonationModal = () => {
  const [visible, setVisible] = useState(false);
  const { Option } = Select;
  // const [form] = Form.useForm();

  async function formComplete() {
    // console.log(form.values);
    setVisible(false);
  }

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Make Donation
      </Button>
      <Modal
        title="Make Donation"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={800}
        footer={[
        <Button onClick={() => setVisible(false)}>
            Cancel
        </Button>,
        <Button form="myForm" htmlType="submit">
            Submit
        </Button>
        ]}
      >
        <>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item label="Choose a Card">
              <Select defaultValue="Card 1">
                <Option value="card1">Card 1</Option>
                <Option value="card2">Card 2</Option>
              </Select>
            </Form.Item>
            <Form.Item label="How much would you like to donate in USD?">
              <InputNumber
                defaultValue={5}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
              />
            </Form.Item>
            <Form.Item label="How often would you like to donate?">
              <Select defaultValue="monthly">
                <Option value="daily">Daily</Option>
                <Option value="weekly">Weekly</Option>
                <Option value="monthly">Monthly</Option>
                <Option value="bianually">Biannually</Option>
                <Option value="annually">Anually</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </>
      </Modal>
    </>
  );
};

export default DonationModal;