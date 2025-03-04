import { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // 使用 useEffect Hook 调用 API
  useEffect(() => {
    // 执行 fetch 请求，从 API 获取数据，会在组件加载完成后执行一次
    fetch("https://api.xygeng.cn/one")
      .then((res) => {
        if (!res.ok) {
          throw new Error("网络请求错误");
        }
        // 将响应数据解析成 json 格式
        return res.json();
      })
      .then((json) => {
        if (json.code === 200 && json.data) {
          setData(json.data);
        } else {
          setError(json.error || "获取数据失败");
        }
      });
  }, []); // 空依赖数组，表示这个 effect 只在组件挂载时执行一次

  if (error) return <p>{error}</p>;

  if (!data) return <p>加载中...</p>;

  // 数据加载成功，渲染数据
  return (
    <div>
      <p>{data}</p>

    </div>
  );
};

export default FetchData;
