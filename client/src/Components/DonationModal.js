import React, { useState } from 'react';
import { Modal, Button, Form, Input, InputNumber, Select, message } from 'antd';
import api from '../Scripts/api';
import useUser from '../Scripts/userManager';

const DonationModal = (props) => {
  const [visible, setVisible] = useState(false);
  const { Option } = Select;
  const { user } = useUser();

  const onFinish = values => {
    try {
      let payload = { ...values, orgid: props.org, userid: user.userID, active: true };
      // POST payment
      api.createPayment(payload);
      message.success("A recurring donation to this organization was created");
    }
    catch {
      message.warning("A recurring donation to this organization already exists.");
    }
    setVisible(false);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Donate Now
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
        <Button form="myForm" htmlType="submit" type="primary">
            Submit
        </Button>
        ]}
      >
          <Form
            name="basic"
        initialValues={{ value: 5, freq:"monthly" }}
            onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          id="myForm"
          >
            <Form.Item label="Choose a card" name="card" rules={[{ required: true, message: 'Please select a card' }]}>
              <Select>
                <Option value="card1">Card 1</Option>
                <Option value="card2">Card 2</Option>
              </Select>
            </Form.Item>
            <Form.Item label="How much would you like to donate in USD?" name="value" rules={[{ required: true, message: 'Please indicate an amount' }]}>
              <InputNumber
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
              />
            </Form.Item>
            <Form.Item label="How often would you like to donate?" name="freq" rules={[{ required: true, message: 'Please select a recurrence' }]}>
              <Select defaultValue="monthly">
                <Option value="daily">Daily</Option>
                <Option value="weekly">Weekly</Option>
                <Option value="monthly">Monthly</Option>
                <Option value="bianually">Biannually</Option>
                <Option value="annually">Anually</Option>
              </Select>
            </Form.Item>
            {/* <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item> */}
          </Form>
      </Modal>
    </>
  );
};

export default DonationModal;