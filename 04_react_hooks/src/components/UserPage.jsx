import { UserContext } from "../context/UserContext";
import UserProfile from "./UserProfile";

const UserPage = () => {
  const user = { name: "张三" };
  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
};

export default UserPage;
