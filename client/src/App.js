import "./App.scss";
import { Route, BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import { Menu, Layout} from "antd";
import React from "react";
import { ProfilePage } from "./Pages/ProfilePage";
import { OrgsPage } from "./Pages/OrgsPage";
import { HomePage } from "./Pages/HomePage";
import { SignUpPage } from "./Pages/SignUpPage";
import { LogInPage } from "./Pages/LogInPage";
import useUser from "./Scripts/userManager";

const { Header, Footer, Sider, Content } = Layout;

// function setUser(user) {
//   sessionStorage.setItem('user', JSON.stringify(user));
// }

// function getUser() {
//   let user = sessionStorage.getItem('user') || undefined;
//   user = JSON.parse(user);
//   return user; 
// }

function App() {

  const { user, setUser } = useUser();
  return (
    <Router style={{ height: "100vh" }}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <h1 style={{ color: "white" }}>
            Impact{" "}
            <span style={{ fontStyle: "italics", fontWeight: "lighter" }}>
              {" "}
              - Giving made easy
            </span>
          </h1>
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
              { user != null ?
                <Menu.Item key="profile">
                  <Link to="/profile">My Profile</Link>
              </Menu.Item>
              : <></>
              }
              <Menu.Item key="loginUser">
                <Link
                  to="/login/user"
                  onClick={() => {
                    if (user) {
                      setUser(undefined);
                      window.location.reload();
                    }
                  }}
                >
                  {user ? "Log Out" : "Log In"}
                </Link>
              </Menu.Item>
              {/* <Menu.Item key="loginOrg">
              <Link to="/login/org">Login Org</Link>
            </Menu.Item> */}
            </Menu>
          </Sider>
          <Content style={{ padding: "2em" }}>
            <Route path="/orgs" component={OrgsPage} /> 
            <Route path="/signup/:type" component={SignUpPage} />
            <Route path="/login/:type">
              <LogInPage setUser={setUser} />
            </Route>
            <Route path="/" exact component={HomePage} />
            <Route path="/profile" component={ProfilePage} />
            <Route exact path="/profile"
                render={props => user != null ? ProfilePage : <Redirect to="/login/user" />} />
          </Content>
        </Layout>
        <Footer>Made with &hearts; by the Impact team</Footer>
      </Layout>
    </Router>
  );
}

export default App;
