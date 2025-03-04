import { useReducer } from "react";

// 定义一个 reducer 函数，用于管理表单的状态变化
const formReducer = (state, action) => {
  switch (action.type) {
    case "update":
      // 如果 action 类型是 "update"，更新 state 中对应的字段
      return { ...state, [action.name]: action.value };
    case "reset":
      // 如果 action 类型是 "reset"，重置 state 为初始值
      return { username: "", email: "" };
    default:
      // 如果 action 类型不匹配，返回当前状态不变
      return state;
  }
};

// Form 组件，使用 useReducer Hook 来管理表单的状态
const Form = () => {
  const [state, dispatch] = useReducer(formReducer, {
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    dispatch({ type: "update", name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`提交成功！\n用户名: ${state.username}\n邮箱: ${state.email}`);
    dispatch({ type: "reset" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <div>
        <button type="submit">提交</button>
        <button type="button" onClick={handleReset}>
          重置
        </button>
      </div>
    </form>
  );
};

export default Form;
