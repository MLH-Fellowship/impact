import "./App.scss";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { Menu, PageHeader, Layout} from "antd";
import React from "react";
import { OrgsPage } from "./Pages/OrgsPage";
import { HomePage } from "./Pages/HomePage";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Router style={{height: '100vh'}}>
      <Layout style={{minHeight: '100vh'}}>
      <Header>
        <h1 style={{color: 'white'}}>Impact <span style={{'fontStyle': 'italics', 'fontWeight': 'lighter'}}> - Giving made easy</span></h1>
      </Header>
      <Layout>
      <Sider theme="light">
          <Menu>
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="orgs">
              <Link to="/orgs">Organizations</Link>
            </Menu.Item>
          </Menu>
      </Sider>
      <Content style={{padding: '2em'}}>
        <Route path="/orgs" component={OrgsPage} />
        <Route path="/" exact component={HomePage} />
      </Content>
      </Layout>
      <Footer>Made with &hearts; by the Impact team</Footer>
      </Layout>
    </Router>
  );
}

export default App;
