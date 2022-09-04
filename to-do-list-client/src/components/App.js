import { useState, useEffect } from "react";
import axios from "axios";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import "../styles/App.css";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchTask() {
      const req = await axios.get("http://localhost:5005/get-task");

      setList(req.data);
    }
    fetchTask();
  }, []);
  return (
    <div className="App">
      <h1 className="heading">TO DO List</h1>
      {/* CreateTask component */}
      <AddTask list={list} setList={setList} useEffect={useEffect} />
      {/* TaskList componnent */}
      <TaskList list={list} setList={setList} />
    </div>
  );
}

export default App;
