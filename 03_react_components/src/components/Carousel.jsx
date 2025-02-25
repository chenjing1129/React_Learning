import { Carousel } from 'antd';

const contentStyle = {
  height: '300px', // 调整高度以适应图片
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover', // 确保图片覆盖整个区域
};

const MyCarousel = () => (
  <Carousel autoplay>
    <div>
      <div style={contentStyle}>
        <img
          src="/images/背景图1.jpg"
          style={imgStyle}
        />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <img
          src="/images/背景图2.jpg"
          style={imgStyle}
        />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <img
          src="/images/背景图3.jpg"
          style={imgStyle}
        />
      </div>
    </div>
  </Carousel>
);

export default MyCarousel;
