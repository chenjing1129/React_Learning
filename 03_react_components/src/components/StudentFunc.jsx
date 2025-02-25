const Students = ({ name, age}) => {
  return (
    <>
      <h1>学生姓名：{name}</h1>
      <h2>学生年龄：{age}</h2>
      <h3>头像<img src="https://static-cdn-oss.mosoteach.cn/mssvc/default-avatar@2x.png"></img></h3>
    </>
  );
};

export default Students;
