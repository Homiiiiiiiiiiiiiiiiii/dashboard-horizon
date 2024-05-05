import React, { useReducer, useState } from 'react'
import TodoHd from './components/TodoHd'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../store/slices/todoSlice'

const store = configureStore({
    reducer: {
        todo: todoSlice,
    },
})
const Todo = () => {
    return (
        <Provider store={store}>
            <TodoHd />
            <TodoEditor />
            <TodoList />
        </Provider>
    )
}
export default Todo