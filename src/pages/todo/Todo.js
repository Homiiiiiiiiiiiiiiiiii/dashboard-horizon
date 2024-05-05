import React, { useReducer, useState } from 'react'
import TodoHd from './components/TodoHd';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import { TodoProvider } from '../../context/TodoContext';

const Todo = () => {
  // const [todo, setTodo] = useState(mockTodo)

  // //todo 추가
  // const addTodo = (task) => {
  //   const newTodo = {
  //     id : todo.length + 1,
  //     isDone : false,
  //     task,
  //     createdDate : new Date().getTime()
  //   }
  //   setTodo([newTodo, ...todo]) //새로운 todo를 맨 앞쪽에 추가
  // }

  // //todo 업데이트
  // const updateTodo = (id) => {
  //   setTodo(
  //     todo.map((item) => {
  //       if (item.id === id) {
  //         return{
  //           ...item,
  //           isDone:!item.isDone,
  //         }
  //       }
  //       return item
  //     })
  //   )
  // }

  // //todo 삭제
  // const deleteTodo = (id) => {
  //   setTodo(todo.filter((item) => item.id !== id))
  // }
  
  return (
    <TodoProvider>
      <TodoHd />
      <TodoEditor />
      <TodoList />
    </TodoProvider>

  )
}

export default Todo