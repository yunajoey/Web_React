// https://codesandbox.io/s/github/MohamedJellali/Todo-App-with-Zustand/tree/master/?file=/src/components/TodoInputs.jsx
// https://plainenglish.io/blog/using-zustand-and-typescript-to-make-a-to-do-list-in-react

import React from "react";
import useStore from "../store/todoStore";  
import { useState } from 'react'; 

function TodoInputs(){ 
  const [task, setTask] = useState('');   
  // importing states from store 
  const { addTask, tasks, start_num } = useStore(
    (state) => state
)  
  return(
      <div>
                  <div className="row m-2">
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          type="text"
          className="col form-control"
          placeholder="Add a Task"
        />
        <button
          className="btn btn-primary mx-2"
          onClick={()=> {
            if(task.length){
              addTask(task);
              setTask(""); 
              // console.log(task) // 잘 나옴   
              console.log(start_num)                 
            }             
          }} 
        >
          ADD NEW TASK
        </button>
      </div>
        </div>
  )   
}   
export default TodoInputs