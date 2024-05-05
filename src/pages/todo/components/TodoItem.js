import { Button, Checkbox, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { useTodoDispatch } from '../../../context/TodoContext'

const TodoItem = ({id, isDone, task, createdDate}) => {
  
  const dispatch = useTodoDispatch()
  
  const updateTodo = (id) => {
    dispatch({type:'update', payload: id})
  }

  const deleteTodo = (id) => {
    dispatch({type:'delete', payload: id})
  }

  return (
        <Flex key={id} as={'li'} gap={3} alignItems={'center'} p={1}>
            <Checkbox type="checkbox" isInvalid checked={isDone} onChange={() => updateTodo(id)}>
                <Text textDecoration={isDone ? 'line-through' : 'none'} as={'strong'} fontSize={20} fontWeight={600}>{task}</Text>
                <Text as={'span'} mr={5}>{new Date(createdDate).toLocaleDateString()}</Text>
            </Checkbox>
            <Spacer/>
            <Button colorScheme='blue' size='md' onClick={() => deleteTodo(id)}>삭제</Button>
        </Flex>
  )
}

export default TodoItem