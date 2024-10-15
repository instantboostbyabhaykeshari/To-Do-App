import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDo(){
    let [toDos, setToDos] = useState([{task: "Sample Task", id: uuidv4()}]);
    let [newToDo, setNewToDo] = useState("");

    let addNewTask = ()=>{
        setToDos([...toDos, {task: newToDo, id: uuidv4()}]);
        setNewToDo("");
        console.log(toDos);
    }

    let updateToDoValue = (event)=>{
        setNewToDo(event.target.value);
    }



    return(
        <div>
            <h2>To-Do List</h2>
            <input placeholder="Enter your task..." value={newToDo}  onChange={updateToDoValue} onKeyDown={(event)=>{
                if(event.key === "Enter"){
                    addNewTask();
                }
            }}></input>
            <button onClick={addNewTask}>Add</button>

            <b></b>
            <ol>
                {toDos.map((todo) => <li key={todo.id}>{todo.task}</li>)}
            </ol>
        </div>
    );
}