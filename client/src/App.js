import "./App.scss";
import { Menu, Breadcrumb, PageHeader, Table, Space } from "antd";
import org from './Scripts/api';
import React, { useState, useEffect } from "react";

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

class App extends React.Component {
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
      let newData = await (await fetch("http://localhost:5000/org")).json();
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
      <div>
        <header>
          <nav>
            <PageHeader
              title="Impact"
              ghost="false"
              subTitle="Giving made easy"
            />
          </nav>
        </header>
        <main>
          <Space size="large">
            <Table columns={columns} dataSource={this.state.data} />
          </Space>
        </main>
      </div>
    );
  }
}

// function App() {
//   // Create state
//   const [data, setData] = useState();

//   let getData = async () => {
//     try {
//       return await fetch("localhost:5000/org");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Fetch data
//   useEffect(() => {
//     //setData(getData());
//   });

//   return (
//     <div>
//       <header>
//         <nav>
//           <PageHeader
//             title="Impact"
//             ghost="false"
//             subTitle="Giving made easy"
//           />
//         </nav>
//       </header>
//       <main>
//         <Table columns={columns} data={data} />
//       </main>
//     </div>
//   );
// }

export default App;
