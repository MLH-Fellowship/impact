import { Component, useState, useEffect } from 'react';
import { Spin, Table, Modal, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import DonationModal from './DonationModal';
import api from '../Scripts/api';

const OrgTable = () => {
  const [data, setData] = useState();
  const [visible, setVisible] = useState(false); 
  const [loading, setLoading] = useState(true);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => <a target='_blank' rel='noopener noreferrer' href={record.website}>{text}</a>
  },
  {
    title: "Description",
    dataIndex: "desc",
    key: "desc",
  },
  {
    title: "Cause",
    dataIndex: "cause",
    key: "cause",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "",
    dataIndex: "",
    key: "x",
    render: (row) => <DonationModal org={row._id}/> // Pass org id to donation modal
    }
  ];


  useEffect(() => {
    async function getData() {
      try {
        let newData = await api.getOrgs();
        setData(newData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <Spin indicator={antIcon} spinning={loading}>
        <Table columns={columns} dataSource={data} />
      </Spin>
    </>
  );
}

export default OrgTable;