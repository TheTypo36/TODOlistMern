import react from 'react';
import '../styles/CreateTask.css'
function CreateTask(){
    return(
        <div className="create-task">
            <input type="text" name="taskName" placeholder="write the task" />
            <div className="operation">
               <form action="" methode="POST">

                <input type="date" name ="date" />
                <input type="time" name="time" />
                <button type="submit">ADD</button>
               </form>


            </div>
        </div>
    );
}
export default CreateTask;