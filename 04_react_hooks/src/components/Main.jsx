import LoginForm from "./LoginForm";
import LogoutButton from "./LogoutButton";
import UserProvider from "./UserProvider";
import UserStatus from "./UserStatus";
import "./style.css";

const Main = () => {
  return (
    <UserProvider>
      <div className="container">
        <UserStatus />
        <LoginForm />
        <LogoutButton />
      </div>
    </UserProvider>
  );
};

export default Main;
