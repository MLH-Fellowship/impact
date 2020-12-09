import { useEffect, useState } from 'react';
import { Table, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import api from '../Scripts/api';


function PaymentTable() {
  const [data, setData] = useState();
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
      title: "Freq",
      dataIndex: "freq",
      key: "freq",
    },
    {
      title: "Value ($)",
      dataIndex: "value",
      key: "value",
      sorter: (a, b) => a.value - b.value,
      sortDirections: ['descend', 'ascend']
    },
    {
      title: "Recurrence",
      dataIndex: "freq",
      key: "freq",
    },
    {
      title: "Status",
      dataIndex: "active",
      key: "active",
    }
  ];

  useEffect(() => {
    async function getData() {
      try {
        let newData = await api.getPayments();
        let orgLookup = await api.getOrgs();

        console.log(newData);
        console.log(orgLookup);

        for (var i = 0; i < newData.length; i++) {
          newData[i].active = newData[i].active ? 'Active' : 'Paused';
          newData[i].name = orgLookup.find(x => x._id === newData[i].orgid).name;
          newData[i].website = orgLookup.find(x => x._id === newData[i].orgid).website;
        }
        console.log(newData);

        setData(newData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, [])

  return (
    <Spin indicator={antIcon} spinning={loading}>
      <Table columns={columns} dataSource={data} />
    </Spin>
  )
}

export default PaymentTable;