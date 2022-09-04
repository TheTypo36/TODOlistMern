import react from "react";
import "../styles/Task.css";

function Task(props) {
  const setBackgroundColor = () => {
    const { label } = props;
    var color;
    switch (label) {
      case "coding":
        color = "red";
        break;
      case "gym":
        color = "yellow";
        break;
      case "friends":
        color = "green";
        break;
      case "girlFriend":
        color = "pink";
        break;
      default:
        break;
    }

    document.getElementByClassName("Task-container").addClassName(color);
  };

  // setBackgroundColor();
  return (
    <div className="Task-container">
      {/* {console.log(props.TaskName)} */}
      <h3>{props.TaskName}</h3>
      <div className="task-detail">
        <span>{props.time}</span>
        <span>{props.date}</span>
      </div>
    </div>
  );
}

export default Task;
