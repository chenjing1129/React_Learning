import { Row, Col } from "antd";
import CustomCard from "./Card";

const data = [
  {
    title: "标题1",
    description: "标题1",
    image: "/images/背景图1.jpg",
    cover: "/images/背景图1.jpg", // 封面图
  },
  {
    title: "标题2",
    description: "标题2",
    image: "/images/背景图2.jpg",
    cover: "/images/背景图2.jpg", // 封面图
  },
  {
    title: "标题3",
    description: "标题3",
    image: "/images/背景图3.jpg",
    cover: "/images/背景图3.jpg", // 封面图
  },
];

const CardList = () => {
  return (
    <>
      <div style={{ padding: "0 50px" }}>
        <Row gutter={16} style={{ marginTop: 16 }}>
          {data.map((item, index) => (
            <Col span={8} key={index}>
              <CustomCard
                cover={item.cover}
                avatar={item.image}
                title={item.title}
                content={item.description}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default CardList;
