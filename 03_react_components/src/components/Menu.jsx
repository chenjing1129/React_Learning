import { Menu } from "antd";
import { MailOutlined, HomeOutlined, SettingOutlined } from "@ant-design/icons";

const items = [
  { label: "首页", key: "home", icon: <HomeOutlined /> },
  { label: "邮件", key: "mail", icon: <MailOutlined /> },
  { label: "设置", key: "setting", icon: <SettingOutlined /> }
];

const MyMenu = () => (
  <Menu mode="horizontal" defaultSelectedKeys={["home"]} items={items} />
);

export default MyMenu;
