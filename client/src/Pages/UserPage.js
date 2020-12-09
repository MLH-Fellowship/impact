import { Space } from "antd";
import { CreateDonation } from "../Components/CreateDonation";

export function UserPage() {
  return (
    <Space size="large" direction="vertical">
      <h2>User</h2>
      <h4>Make a donation</h4>
      <CreateDonation />
    </Space>
  );
}