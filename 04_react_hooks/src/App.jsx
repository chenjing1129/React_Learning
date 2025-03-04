// import React, { useState, useDebugValue, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";
import FetchData from "./components/FetchData";
import PageTitle from "./components/PageTitle";
import LocalTime from "./components/LocalTime";
import Weather from "./components/Weather";
import UserPage from "./components/UserPage";
import Main from "./components/Main";
import Counter from "./components/Counter";
import Form from "./components/Form";
import ThemeProvider from "./components/ThemeProvider";
import ThemeButton from "./components/ThemeButton";
import ExpensiveCalculationParent from "./components/ExpensiveCalculationParent";
import ListFilterParent from "./components/ListFilterParent";
import Parent from "./components/Parent";
import ExpensiveComponentParent from "./components/ExpensiveComponentParent";
import FocusInput from "./components/FocusInput";
import PreviousValue from "./components/PreviousValue";
import Parent2 from "./components/Parent2";
import ComponentSize from "./components/ComponentSize";
import AnimateBox from "./components/AnimateBox";
import Data from "./components/Data";
import Search from "./components/Search";

// function useCustomHook(value) {
//   useDebugValue(value ? "Active" : "Inactive");
//   return value;
// }

// function useApi(url) {
//   const [data, setData] = useState(null);

//   useDebugValue(data ? "Data Loaded" : "Loading");

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((json) => setData(json));
//   }, [url]);

//   return data;
// }

const handleSearch = (query) => {
  console.log("Searching foor:", query);
};

const App = () => {
  // const [isActive, setIsActive] = useState(false);
  // useCustomHook(isActive);

  // const data = useApi("https://api.xygeng.cn/one");
  // if (!data) return <p>加载中...</p>;
  return (
    <>
      {/* <ThemeToggle /> */}
      {/* <TextInput /> */}
      {/* <TodoList /> */}
      {/* <FetchData /> */}
      {/* <PageTitle /> */}
      {/* <LocalTime /> */}
      {/* <Weather /> */}
      {/* <UserPage /> */}
      {/* <Main /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <div>
        <ThemeProvider>
          <ThemeButton />
        </ThemeProvider>
      </div> */}
      {/* <ExpensiveCalculationParent /> */}
      {/* <ListFilterParent /> */}
      {/* <Parent /> */}
      {/* <ExpensiveComponentParent /> */}
      {/* <FocusInput /> */}
      {/* <PreviousValue /> */}
      {/* <Parent2 /> */}
      {/* <AnimateBox /> */}
      {/* <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Deactivate" : "Activate"}
      </button> */}

      {/* <div>
        <h2>{data.content}</h2>
        <p>来源：{data.origin}</p>
        <p>作者：{data.name}</p>
        <p>标签：{data.tag}</p>
      </div> */}
      {/* <Data /> */}
      <h1>Search Example</h1>
      <Search onSearch={handleSearch} />
    </>
  );
};

export default App;
