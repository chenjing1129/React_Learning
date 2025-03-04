import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserStatus = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="user-status">
      {user ? <p>欢迎你, {user.username}!</p> : <p>请登录</p>}
    </div>
  );
};

export default UserStatus;
