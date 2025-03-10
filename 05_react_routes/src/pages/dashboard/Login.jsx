import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "../../css/Login.css";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const users = [
    { username: "cj", password: "123456", age: "20" },
    { username: "admin", password: "admin", age: "30" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setUser(user);
      navigate("/dashboard", {
        state: { username: user.username, age: user.age },
      });
    } else {
      setError("用户名或密码错误");
    }
  };

  return (
    <div className="login-container">
      <h2>登录页面</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>用户名:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>密码:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">登录</button>
      </form>
    </div>
  );
};

export default Login;
