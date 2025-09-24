import React,{useState} from "react";
import "../style/Todo.css"

function TodoList(){
    const [task,setTask] = useState("");
    const [tasks,setTasks] = useState([]);

    const handleChange =(e)=>{
        setTask(e.target.value);
    }

    const addTask = () =>{
        if(task.trim() !== ""){
            setTasks([...tasks,task]);
    }
}
       
    return(
        <div className="todo-container">
            <input id="task-box" type="text" value={task} onChange={handleChange} placeholder="Enter the task..." /> 
            <input id="add-btn" type="button" onClick={addTask} value="Add Task" />
        </div>
    )
}
export default TodoList