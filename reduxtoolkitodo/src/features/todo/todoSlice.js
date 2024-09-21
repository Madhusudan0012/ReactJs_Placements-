/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {createSlice , nanoid} from '@reduxjs/toolkit'
const initialState = {
    todos: [
        {
            id: 1, text:"Hello World"
        }
    ]
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state ,action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state , section)=>{
            state.todos = state.todos.filter((todos)=>todos.id !==action.payload )

            },

        },  
    })

export const {addTodo , removeTodo} = todoSlice.actions

export default  todoSlice.reducer