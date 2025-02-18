import  { useState } from "react";

const ToggleState = () => {
  // 定义状态来存储是否显示文本
  const [isVisible, setIsVisible] = useState(false);

  // 切换显示状态的函数
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>状态切换组件</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? "隐藏文本" : "显示文本"}
      </button>
      {isVisible && (
        <p style={{ marginTop: "10px" }}>你好，这是一个可以切换显示的文本！</p>
      )}
    </div>
  );
};

export default ToggleState;
