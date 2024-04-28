import React, { useReducer, useState } from 'react'
import TodoHd from './components/TodoHd';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

const mockTodo = [
  {
      id: 1,
      isDone: false,
      task: '고양이 밥주기',
      createdDate: new Date().getTime(), // 현재 시간
  },
  {
      id: 2,
      isDone: false,
      task: '감자 캐기',
      createdDate: new Date().getTime(),
  },
  {
      id: 3,
      isDone: false,
      task: '고양이 놀아주기',
      createdDate: new Date().getTime(),
  },
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state]
    case 'update':
      return state.map((item) => (item.id === action.payload ? {...item, isDone: !item.isDone} : item))
    case 'delete':
      return state.filter((item) => item.id !== action.payload)
    default:
      return state
  }
}

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

  const [state, dispatch] = useReducer(reducer, mockTodo)

  const addTodo = (task) => {
    const newTodo = {
      id : state.length + 1,
      isDone : false,
      task,
      createdDate : new Date().getTime()
    }
    dispatch({type: 'ADD', payload: newTodo}) //새로운 todo를 맨 앞쪽에 추가
  }

  const updateTodo = (id) => {
    dispatch({type:'update', payload: id})
  }

  const deleteTodo = (id) => {
    dispatch({type:'delete', payload: id})
  }


  return (
    <div>
      <TodoHd />
      <TodoEditor addTodo={addTodo}/>
      <TodoList todo={state} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
    </div>

  )
}

export default Todo