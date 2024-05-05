export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (task, state) => ({
    type: ADD_TODO,
    // dispatch({type: 'ADD', payload: newTodo}) //새로운 todo를 맨 앞쪽에 추가
    payload: {
        id :  new Date().getTime(),
        isDone : false,
        task,
        createdDate : new Date().getTime()
    }
})

  
export  const updateTodo = (id) => ({
    type: UPDATE_TODO,
    payload: id
})

export  const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
})