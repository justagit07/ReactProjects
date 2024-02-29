import React, { useState } from 'react'
import { useTodo } from '../contexts/todocontext';
function TodoItem({ todo }) {
     const {  updateTodos, deleteTodos, saveTodo, isCompleted,setTodo, todos, setTodos}= useTodo()
      console.log(todo)


      const [isTodoEditable, setIsTodoEditable]= useState(false)
      const [data, setdata]=useState(todo.todo)
      const editTodo=()=>
      {
        updateTodos(todo.id, {...todo, todo: data})
        setIsTodoEditable(false)
      }
    return ( 

    
          <div
            className={`flex border gap-10 border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.iscomplete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input 
                type="checkbox"
                className="cursor-pointer"
                checked={todo.iscomplete}
                onChange={()=> (isCompleted(todo.id))}
            />
            <input
                type="text"
                className={`border w-[500px] outline-none  bg-transparent rounded-lg "border-black/10 px-2"
                 ${todo.iscomplete ? "line-through" : ""}`}
                value={data}
                onChange={(e)=>(setdata(e.target.value))}
            />

             <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodos(todo.id)}
            >
                ❌
            </button>

        </div>
    );
}

export default TodoItem;
