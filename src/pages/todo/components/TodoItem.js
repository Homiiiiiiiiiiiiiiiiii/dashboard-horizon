import { Button, Checkbox, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
// import { useTodoDispatch } from '../../../context/TodoContext'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../../store/slices/todoSlice'

const TodoItem = ({id, isDone, task, createdDate}) => {
  
  // const dispatch = useTodoDispatch()
  const dispatch = useDispatch()

  return (
        <Flex key={id} as={'li'} gap={3} alignItems={'center'} p={1}>
            <Checkbox type="checkbox" isInvalid checked={isDone} onChange={() => dispatch(updateTodo(id))}>
                <Text textDecoration={isDone ? 'line-through' : 'none'} as={'strong'} fontSize={20} fontWeight={600}>{task}</Text>
                <Text as={'span'} mr={5}>{new Date(createdDate).toLocaleDateString()}</Text>
            </Checkbox>
            <Spacer/>
            <Button colorScheme='blue' size='md' onClick={() => dispatch(deleteTodo(id))}>삭제</Button>
        </Flex>
  )
}

export default React.memo(TodoItem)