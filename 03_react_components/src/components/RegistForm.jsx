import { useState } from "react";

const RegistForm = ({ onSubmit }) => {
  const [name, setName] = useState(""); // 用于存储姓名
  const [email, setEmail] = useState(""); // 用于存储邮箱

  const handleSubmit = () => {
    onSubmit({ name, email }); // 将数据通过 onSubmit 传递给父组件
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>姓名：</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="请输入姓名"
        />
      </div>
      <div>
        <label>邮箱：</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="请输入邮箱"
        />
      </div>
      <button type="submit">提交</button>
    </form>
  );
};

export default RegistForm;
