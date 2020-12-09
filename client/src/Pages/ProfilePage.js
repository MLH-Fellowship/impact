import { Tabs } from "antd";
import PaymentTable from "../Components/PaymentTable";

const { TabPane } = Tabs;

export function ProfilePage() {
  return (
    <>
      <Tabs defaultActiveKey="1">
    <TabPane tab="Donations" key="1">
      <h2>My Profile</h2>
      <PaymentTable />
    </TabPane>
    <TabPane tab="Saved Cards" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Account" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
    </>
  );
}

export default ProfilePage;