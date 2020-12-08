import { Space } from "antd";
import { OrgTable } from "../Components/OrgTable";

export function OrgsPage() {
  return (
    <Space size="large" direction="vertical">
      <h2>Organizations</h2>
      <OrgTable />
    </Space>
  );
}
