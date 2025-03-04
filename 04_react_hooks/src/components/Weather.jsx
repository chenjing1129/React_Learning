import { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("Nanjing"); // 当前输入的城市，默认为南京
  const [data, setData] = useState(null); // 存储天气数据
  const [error, setError] = useState(null); // 存储错误信息

  // 使用 useEffect 监听 city 的变化，并重新获取天气数据
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e9cec322f31a437b6f72421768418529`
        );

        if (!response.ok) {
          throw new Error("城市未找到或网络请求失败");
        }

        const json = await response.json();
        setData(json); // 更新天气数据
        setError(null); // 清除错误信息
      } catch (error) {
        setError(error.message); // 捕获错误并存储错误信息
        setData(null); // 清空天气数据
      }
    };

    // 如果城市名称为空，不进行请求
    if (city.trim()) {
      fetchWeather();
    }
  }, [city]); // 依赖项为 city，当 city 发生变化时重新请求

  // 处理输入框的变化
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  // 渲染组件
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>天气查询</h1>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="输入城市名称"
        style={inputStyle}
      />
      {error && <p style={errorStyle}>{error}</p>}
      {!data && !error && <p style={loadingStyle}>加载中...</p>}

      {data && (
        <div style={weatherCardStyle}>
          <h2 style={cityNameStyle}>{data.name} 的天气</h2>
          <div style={weatherInfoStyle}>
            <p style={weatherDescriptionStyle}>
              {data.weather[0].main} ({data.weather[0].description})
            </p>
            <p style={temperatureStyle}>
              {(data.main.temp - 273.15).toFixed(1)} ℃
            </p>
            <div style={detailsStyle}>
              <p>体感温度：{(data.main.feels_like - 273.15).toFixed(1)} ℃</p>
              <p>湿度：{data.main.humidity}%</p>
              <p>风速：{data.wind.speed} m/s</p>
              <p>云量：{data.clouds.all}%</p>
              <p>
                日出时间：
                {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
              </p>
              <p>
                日落时间：
                {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// 样式定义
const containerStyle = {
  maxWidth: "600px",
  margin: "20px auto",
  padding: "20px",
  textAlign: "center",
  fontFamily: "'Arial', sans-serif",
  backgroundColor: "#f0f4f8",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
};

const titleStyle = {
  fontSize: "28px",
  color: "#333",
  marginBottom: "20px",
};

const inputStyle = {
  width: "80%",
  padding: "12px",
  fontSize: "16px",
  marginBottom: "20px",
  border: "2px solid #ccc",
  borderRadius: "8px",
  outline: "none",
  transition: "border-color 0.3s ease",
};

const errorStyle = {
  color: "#ff4d4f",
  marginTop: "10px",
};

const loadingStyle = {
  color: "#666",
  marginTop: "10px",
};

const weatherCardStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
};

const cityNameStyle = {
  fontSize: "24px",
  color: "#333",
  marginBottom: "10px",
};

const weatherInfoStyle = {
  marginTop: "20px",
};

const weatherDescriptionStyle = {
  fontSize: "18px",
  color: "#555",
  marginBottom: "10px",
};

const temperatureStyle = {
  fontSize: "48px",
  color: "#007BFF",
  fontWeight: "bold",
  margin: "20px 0",
};

const detailsStyle = {
  textAlign: "left",
  marginTop: "20px",
  fontSize: "14px",
  color: "#666",
};

export default Weather;
