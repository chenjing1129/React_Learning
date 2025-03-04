import { useState } from "react";

const ThemeToggle = () => {
  // 使用 useState 这个 Hook 来存储当前主题状态
  // isDarkMode 为 true 表示暗黑模式
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((mode) => !mode);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h2>aewqrwedqwqwdqwdqdqw</h2>
      <button onClick={toggleTheme}>
        切换到 {isDarkMode ? "白天" : "暗黑"}模式
      </button>
    </div>
  );
};

export default ThemeToggle;
