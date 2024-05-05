import { Box, Button, Heading, Input } from '@chakra-ui/react'
import React, { useCallback, useState } from 'react'
// import { useTodoDispatch, useTodoState } from '../../../context/TodoContext'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/slices/todoSlice'

const TodoEditor = () => {

    const [task, setTask] = useState('')
    // const state = useTodoState()
    // const dispatch = useTodoDispatch()

    const dispatch = useDispatch()
   
    const onChange = useCallback((e) => {
        setTask(e.target.value)
    }, [])

    const onSubmit = useCallback(() => {
        if (!task) return
        dispatch(
            addTodo({
                id: Date.now(),
                isDone: false,
                task,
                createdDate: new Date().getTime(),
            })
        )
        setTask('')
    }, [task, dispatch])

    const onKeyDown = useCallback((e) =>{
        if (e.key === 'Enter') {
            onSubmit()
        }
    },[onSubmit])

  return (
    <div>
        <Box py={5}>
            <Heading as={'h2'} fontSize={20}>새로운 todo 작성하기</Heading>   
            <Input 
                ref={(inputRef) => inputRef && inputRef.focus()}
                value={task} 
                onChange={onChange} 
                onKeyDown={onKeyDown}
                type="text" 
                placeholder='할 일을 추가하세요.' 
                htmlSize={50} 
                width='auto' 
                mr={3}
            />
            <Button onClick={onSubmit} colorScheme='blue' size='md'>추가</Button>
        </Box>
    </div>
  )
}

export default TodoEditor