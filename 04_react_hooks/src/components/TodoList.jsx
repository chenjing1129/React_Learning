import { useState } from "react";

const TodoList = () => {
  // 状态管理：输入框的值
  const [inputValue, setInputValue] = useState("");
  // 状态管理：待办事项列表
  const [todos, setTodos] = useState([]);

  // 处理输入框变化
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // 处理添加待办事项
  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      // 将新事项添加到列表中
      setTodos([...todos, { text: inputValue, completed: false }]);
      // 清空输入框
      setInputValue("");
    }
  };

  // 处理切换完成状态
  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed; // 切换完成状态
    setTodos(newTodos);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <div>待办事项:</div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="请输入待办事项"
        />
        <button onClick={handleAddTodo}>添加</button>
      </div>

      {/* 显示待办事项列表 */}
      <div>
        {todos.map((todo, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleToggleComplete(index)}>
              {todo.completed ? "未完成" : "完成"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
