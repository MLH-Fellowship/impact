import { useEffect, useState } from 'react';
import { Table } from 'antd';
import api from '../Scripts/api';

const columns = [
  {
    title: "Organization",
    dataIndex: "orgid",
    key: "orgid",
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
    sorter: (a, b) => a.age - b.age
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

function PaymentTable() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      try {
        let newData = await api.getPayments();

        for (var i = 0; i < newData.length; i++) {
          newData[i].active = newData[i].active ? 'Active' : 'Paused';
        }

        setData(newData);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, [])

  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default PaymentTable;