import { Component } from 'react';
import { Table } from 'antd';
import api from '../Scripts/api';

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Password",
    dataIndex: "password",
    key: "password",
  },
];

export class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      // let newData = await (await fetch("http://localhost:5000/org")).json();
      let newData = await api.getUsers();
      let realDataObjs = [];
      for (let obj in newData){
        realDataObjs.push({
          key: obj,
          name: `${newData[obj].firstname} ${newData[obj].lastname}`,
          email: newData[obj].email,
          password: newData[obj].password,
        });
      }
      console.log("Retrieved data!");
      this.setState({data: realDataObjs});
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
            <Table columns={columns} dataSource={this.state.data} />
    );
  }
}