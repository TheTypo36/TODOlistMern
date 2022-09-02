import CreateTask from './CreateTask.js';
import TaskList from './TaskList.js'
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      {/* CreateTask component */}
      <CreateTask />
      {/* TaskList componnent */}
      <TaskList />
    </div>
  );
}

export default App;
