import react from "react";
import "../styles/Task.css";
import axios from "../api/Axios.js";
function Task(props) {
  //console.log("key", props.keyid);
  const handleDelete = (event) => {
    //  console.log(event.target.parentElement.parentElement);
    axios
      .post("http://localhost:5005/delete-task", {
        _id: props.keyId,
      })
      .then((res) => {
        console.log("res.data", res.data);
        props.setList([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
      <h3>{props.TaskName.toUpperCase()}</h3>
      <div className="task-detail">
        <button onClick={handleDelete}>
          <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" />
        </button>
        <span>{props.time}</span>
        <span>{props.date}</span>
      </div>
    </div>
  );
}

export default Task;
