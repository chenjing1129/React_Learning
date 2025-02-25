import { Card, Avatar } from "antd";
const { Meta } = Card;

const CustomCard = ({ cover, avatar, title, content }) => (
  <Card
    style={{
      width: 400,
      border: "1px solid #f0f0f0",
      borderRadius: 8,
      overflow: "hidden",
      marginBottom: 16,
    }}
    cover={
      <img alt={title} src={cover} style={{ width: "100%", height: 200 }} />
    }
  >
    <Meta
      avatar={<Avatar src={avatar} size={64} />}
      title={title}
      description={content}
    />
  </Card>
);

export default CustomCard;
