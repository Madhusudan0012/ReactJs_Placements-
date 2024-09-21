// eslint-disable-next-line no-unused-vars
import {configuareStore} from '@reduxjs/toolkit';
// eslint-disable-next-line no-unused-vars
import  todoReducer from '../features/todo/todoSlice';
// eslint-disable-next-line no-unused-vars
import reducer from '../features/todo/todoSlice';
export const store = configuareStore({
    reducer: todoReducer
    



}) 