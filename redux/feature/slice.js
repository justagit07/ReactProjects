import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState= {
    todos:[{id:1, text:'helloworld'}]
}

export const todoslice=  createSlice({
          name:'todo',
          initialState,
          reducers:
          
          {
            addtodo: (state,action)=>
            {
                const todo={ 
                    id:nanoid(), 
                    text:action.payload
                    }
                
                state.todos.push(todo)

            },
            removeTodo: (state, action)=>{

                  const id= action.payload
                  console.log(state.todos);
                  
                 state.todos= state.todos.filter((e)=> { return e.id!==id})



            }
          }
})

export const  {addtodo, removeTodo} = todoslice.actions

export default todoslice.reducer