
import { Typography, Card, Space } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph, } = Typography;

export function HomePage() {
  return (
    <Space direction="vertical">
      <Card>
        <Typography>
          <Title level={2}>Giving made easy.</Title>
          <Title level={3}>For Donators</Title>
          <Paragraph style={{ fontSize: "larger" }}>
            Here at Impact, we try to make charity as easy as possible, so you
            don't have to feel like you're moving mountains to make a
            difference.
          </Paragraph>
          <Title level={3}>For Charities</Title>
          <Paragraph style={{ fontSize: "larger"}}>
              We make things easy for charities too! Just submit your organization to
              our database, and people will be able to donate to your provided payment method.
          </Paragraph>
          <Title level={2}>Ready to get started?</Title>
          <Paragraph style={{ fontSize: "140%"}}>
              Click <Link component={Typography.Link} to="/signup">here</Link> to sign up!
          </Paragraph>
        </Typography>
      </Card>
    </Space>
  );
}
