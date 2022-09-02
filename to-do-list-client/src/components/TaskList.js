import react,{useState,useEffect} from 'react';
import Task from './Task.js';
import "../styles/TaskList.css"

function TaskList(){
    const [list, setList] = useState([]);
    useEffect(()=>{
        setList([
            {
            "task": "Attend codechef contest",
            "date": '1/2/2',
            "time": '1:00am',
            "label": "coding",
            },
            {
                "task": "Attend codechef contest",
                "date": '1/2/2',
                "time": '1:00am',
                "label": "coding",
            },
            {
                "task": "Attend codechef contest",
                "date": '1/2/2',
                "time": '1:00am',
                "label": "coding",
             },
            ]);
    },[]);
    return(
        <div className="Task-list">
            {list.map((task)=>(
                <div>
                    <Task 
                        key={`todo ${task.time}`}
                        name={task.task} 
                        date={task.date} 
                        time={task.time}
                    />
                </div>
            ))}
        </div>
    );
}
export default TaskList;