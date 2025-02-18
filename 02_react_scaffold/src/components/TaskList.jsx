import Task from "./Task";
const taskList = [
  { id: 1, name: "吃饭", completed: true },
  { id: 2, name: "睡觉", completed: false },
  { id: 3, name: "敲代码", completed: false },
];
const TaskList = () => {
  const unfinishedCount = taskList.filter((task) => !task.completed).length;
  return (
    <div style={{ textAlign: "center" }}>
      <h2>当前未完成任务数：{unfinishedCount}</h2>
      {taskList.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};
export default TaskList;
