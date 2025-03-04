import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const LogoutButton = () => {
  const { user, logout } = useContext(UserContext);
  if (!user) {
    return null; // 如果用户未登录，不显示登出按钮
  }

  return (
    <button className="logout-button" onClick={logout}>
      登出
    </button>
  );
};

export default LogoutButton;
