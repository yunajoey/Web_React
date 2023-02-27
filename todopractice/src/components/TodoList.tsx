import React from "react";
import useStore from "../store/todoStore"
import TodoItem from "./TodoItem";

function TodoList(){  
  // importing states from store  
  const { tasks, deletedTasks } = useStore(
      (state) => state  
  )    
  return (
    <>
        <div className="my-8">
            {tasks.map((task) => {
            return <TodoItem key={task.id} task={task} flag={true}            
            />;           
      })}
        </div>
        <div>
            삭제된리스트
            {deletedTasks.map((task) => {
            return <TodoItem key={task.id} task={task} flag={false} ></TodoItem>    
            })}
        </div>  
    </>  
    )  
} 
export default TodoList;