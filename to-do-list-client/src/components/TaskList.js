import react, { useState, useEffect } from "react";
import Task from "./Task.js";
import "../styles/TaskList.css";
import axios from "axios";

function TaskList(props) {
  const list = props.list;
  return (
    <div className="Task-list">
      {console.log("list", list)}
      {list.map((task, index) => (
        <div>
          {console.log("name", task.TaskName)}
          <Task
            TaskName={task.TaskName}
            date={task.date}
            time={task.time}
            keyId={task._id}
            setList={props.setList}
          />
        </div>
      ))}
    </div>
  );
}
export default TaskList;
