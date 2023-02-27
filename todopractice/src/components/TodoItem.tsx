import React from 'react'
import useStore, { Todo } from '../store/todoStore' // 인터페이스가 아니라서? 

function TodoItem({task, flag}:{task:Todo, flag:boolean}) {

const{deleteTask} = useStore((state) => state)

return (   
  <ul> 	  
				<div>           
					{task.task}
          {flag === true && <button className='btn btn-danger' onClick={()=>deleteTask(task.id)}>Delete</button>} 
				</div> 		
  </ul>      

)}

export default TodoItem


