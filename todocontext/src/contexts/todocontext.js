import { useContext, createContext } from "react";

const  TodoContext= createContext(
    {
        todos: [
            {
            id:Date.now(),
            todo:'morningExcercise',
            iscomplete:false
            }
    ],
        saveTodo:(todo)=>{} ,       
        updateTodos: (id, todo )=>{},
        deleteTodos:(id)=>{},
        isCompleted:(id)=>{}
    }
)
// custome hook is making 
const useTodo= ()=> useContext(TodoContext)

export  {useTodo, TodoContext}