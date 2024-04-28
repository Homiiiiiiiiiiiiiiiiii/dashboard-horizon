import { Box, Button, Heading, Input } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

const TodoEditor = ({addTodo}) => {

    const [task, setTask] = useState('')
    const inputRef = useRef()

    function onChange(e){
        setTask(e.target.value)
    }

    function onSubmit(e){
        if (!task) return
        addTodo(task)
        setTask('')
    }

    function onKeyDown(e){
        if (e.key === 'Enter') {
            onSubmit()
        }
    }

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