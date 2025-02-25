import { useState } from "react";
import RegistForm from "./RegistForm";

const RegistPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "" }); // 用于存储表单数据

  const handleFormSubmit = (data) => {
    setFormData(data); // 更新表单数据
  };

  return (
    <div>
      <h1>用户注册</h1>
      <RegistForm onSubmit={handleFormSubmit} />
      <div>
        <h2>提交数据：</h2>
        <p>姓名：{formData.name}</p>
        <p>邮箱：{formData.email}</p>
      </div>
    </div>
  );
};

export default RegistPage;
