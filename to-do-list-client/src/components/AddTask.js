import axios from "../api/Axios.js";
import "../styles/AddTask.css";

function AddTask(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(event.target.elements[2].value);
    axios
      .post("add-task", {
        TaskName: event.target.elements[0].value,
        date: event.target.elements[1].value,
        time: event.target.elements[2].value,
      })
      .then((res) => {
        console.log(res);
        props.setList([...props.list, res.data]);
        event.target.elements[0].value = "";
        event.target.elements[1].value = "";
        event.target.elements[2].value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="create-task">
        <input type="text" name="taskName" placeholder="write the task" />
        <div className="operation">
          <input type="date" name="date" />
          <input type="time" name="time" />
          <button type="submit">ADD</button>
        </div>
      </div>
    </form>
  );
}
export default AddTask;
