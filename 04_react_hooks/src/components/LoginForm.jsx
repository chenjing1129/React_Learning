import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const LoginForm = () => {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const { login } = useContext(UserContext);

  const handleSubmit = () => {
    if (username && password) {
      login(username); // 调用登录函数
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>用户名:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>密码:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};

export default LoginForm;
