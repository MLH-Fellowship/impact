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
];

export class OrgTable extends Component {
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
      let newData = await api.getOrgs();
      let realDataObjs = [];
      for (let obj in newData){
        realDataObjs.push({
          key: 'obj',
          name: newData[obj].name,
          cause: newData[obj].cause,
          location: newData[obj].location,
          desc: newData[obj].desc
        });
      }
      console.log("Pushed data!");
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