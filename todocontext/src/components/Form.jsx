import React, { useState, useRef } from 'react'
import { useTodo } from '../contexts/todocontext'


export default function Form() {
  const {todo, setTodo, saveTodo}= useTodo()

 const val= useRef()
  const handlevalue=(e)=>
  {
      setTodo(e.target.value)
   }
    const handleSubmit=  (e)=>
    { e.preventDefault()
      if(todo!== '')
      {saveTodo(todo)}
      setTodo('')
      
    }

  return (
    <form className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                ref={val}
                value={todo}
                onChange={handlevalue}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                />
            <button type="submit"   className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
  )
}
