import { useState, useEffect } from "react";

const LocalTime = () => {
 // toLocaleTimeString()格式化时间
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  useEffect(() => {
    // 每一秒刷新一次
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>当前时间: {currentTime}</h1>
    </div>
  );
};

export default LocalTime;
