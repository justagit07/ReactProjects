import React ,{ useState , useEffect} from 'react'
import {useTodo , TodoContext} from './contexts/todocontext'
 import Todolist from './components/todolist'
 import { nanoid } from 'nanoid'
 import Form from './components/Form'

function App() {
  const [todo, setTodo]= useState('')
  const [todos, setTodos]= useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || []
  })
  
  const saveTodo =(todo)=>
  {
    setTodos((todos)=> [...todos, {id:nanoid(), todo, iscomplete:false}] )

    console.log(todos)
    console.log('this is saveTodo is working')
  }
  const updateTodos= (id, todo)=>
  {
    setTodos((todos)=>   todos.map((e)=>( e.id===id? todo: e) ))
     console.log(todos)
  }

  const deleteTodos= (id)=>
  {
    setTodos((todos)=>  todos.filter((e)=>( e.id!==id)))
  }
  const isCompleted= (id)=>
  {
      console.log('hnji')
      console.log('this is the id',id)
    setTodos((todos)=>   todos.map((e)=>( e.id===id? {...e, iscomplete:!e.iscomplete} : e) ))
    console.log('this si after the change todos array', todos)
      
  }


  useEffect(()=>
  {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  
  return (
    <>
      <TodoContext.Provider value={{todo, setTodo,todos, setTodos,deleteTodos, updateTodos, isCompleted, saveTodo}}>


      <div className="bg-[#172842] min-h-screen  ">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-4 text-white">
                    <h1 className="text-2xl font-bold text-center  mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <Form/> 
                    </div>

            <div className="flex flex-wrap gap-y-3">
              {todos.map((todo)=> {return <div key={todo.id}>

                 <Todolist todo={todo}/> 
              </div>
                 })}

                    </div>
                 </div>
                 </div>
      </TodoContext.Provider>

    </>
  )
}

export default App
