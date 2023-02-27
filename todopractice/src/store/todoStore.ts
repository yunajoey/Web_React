// https://blacklobster.tistory.com/3
// https://plainenglish.io/blog/using-zustand-and-typescript-to-make-a-to-do-list-in-react
// https://bigstar-vlog.tistory.com/
// https://codesandbox.io/s/github/MohamedJellali/Todo-App-with-Zustand/tree/master/?file=/src/store/todoStore.js
// https://ssungkang.tistory.com/entry/React-React-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-create-react-app
// https://bigstar-vlog.tistory.com/40
// https://github.com/microsoft/
import {create} from 'zustand'; 

export interface Todo {        
    id: number;
    task : string;  
    // iscompleted: boolean;  
}      

interface TodoState {
    tasks: Todo[];
    start_num: number;
    addTask: (task: string) => void; 
    deleteTask: (id : number) => void;    
    deletedTasks: Todo[];
}  

const useStore = create<TodoState>((set) =>({
start_num: 0,
// initial state
tasks: [],  
addTask: (task: string) => {
    set((state) => ({
        start_num : state.start_num  + 1,
        tasks: [
            ...state.tasks, 
            {
                id: state.start_num, 
                task:task, 
                iscompleted: false, 
            }  
        ],   
    })); 
},   

deletedTasks: [], 
    deleteTask: (id: number) => {         
        set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),        
        deletedTasks: [...state.deletedTasks, ...state.tasks.filter((task) => task.id === id)]
        
    }));
},   






    




}));   



export default useStore; 





