import { useEffect, useState } from 'react';
import { Table, Spin, Button, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import api from '../Scripts/api';
import useUser from "../Scripts/userManager";


function PaymentTable() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useUser();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const onDelete = (orgid) => {
    try {
      setData(data.filter(x => x._id !== orgid));
      api.deletePayment(orgid);
      message.success("Recurring donation deleted");
    }
    catch {
      console.log("An error occurred");
    }
  }


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
      key: "value"
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
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (row) => <Button onClick={() => { onDelete(row._id) }}>Delete</Button>// Pass org id to donation modal
    }
  ];

  useEffect(() => {
    async function getData() {
      try {
        let newData = await api.getPayments();
        let orgLookup = await api.getOrgs();
        console.log(newData);

        for (var i = 0; i < newData.length; i++) {
          newData[i].active = newData[i].active ? 'Active' : 'Paused';
          newData[i].name = orgLookup.find(x => x._id === newData[i].orgid).name;
          newData[i].website = orgLookup.find(x => x._id === newData[i].orgid).website;
        }
        
        // Get data for only current user
        newData = newData.filter(x => x.userid == user.userID);
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