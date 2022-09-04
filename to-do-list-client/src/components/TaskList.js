import react, { useState, useEffect } from "react";
import Task from "./Task.js";
import "../styles/TaskList.css";
import axios from "axios";

function TaskList(props) {
  const list = props.list;
  return (
    <div className="Task-list">
      {/* {console.log("list", list)} */}
      {list.map((task) => (
        <div>
          {console.log("name", task.TaskName)}
          <Task
            key={`todo${task.time}`}
            TaskName={task.TaskName}
            date={task.date}
            time={task.time}
          />
        </div>
      ))}
    </div>
  );
}
export default TaskList;
