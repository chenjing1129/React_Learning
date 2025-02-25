import Input from "./Input";
import { useState } from "react";

const InputParent = () => {
  const [value, setValue] = useState("123");

  const handleInputChange = (newVal) => {
    //  更新组件的状态
    setValue(newVal);
  };

  return (
    <>
      <h2>输入的值是：{value}</h2>
      <Input onInputChange={handleInputChange} />
    </>
  );
};

export default InputParent;
