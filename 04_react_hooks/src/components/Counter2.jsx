import { useImperativeHandle, forwardRef, useState } from "react";

// 使用 useImperativeHandle 暴露 reset 方法
const Counter2 = forwardRef((props, ref) => {
  const [count, setCount] = useState(10);

  useImperativeHandle(ref, () => ({
    reset: () => {
      setCount(0); // 重置计数
    },
  }));
  return <div>Count: {count}</div>;
});

export default Counter2;
