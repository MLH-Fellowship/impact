import { Component } from 'react';
import { Table } from 'antd';
import api from '../Scripts/api';

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
          desc: newData[obj].desc,
          website: newData[obj].website
        });
      }
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