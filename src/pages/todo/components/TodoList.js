import { Box, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todo, updateTodo, deleteTodo}) => {
    const [search, setSearch] = useState('')
    
    function onChangeSearch(e) {
        setSearch(e.target.value)
    }

    const filteredTodo = () => {
        return todo.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()))
    }


    return (
        <Box>
            <Heading as={'h2'} fontSize={20}>할 일 목록</Heading>
            <Input 
                value={search} 
                onChange={onChangeSearch} 
                placeholder='search' 
                htmlSize={50} 
                width='auto' 
                mb={3}
            />
            <ul>
                {filteredTodo().map((item) => (
                    <TodoItem key={item.id} {...item} updateTodo={updateTodo} deleteTodo={deleteTodo}/> //전개 연산자 사용으로 데이터 한번에 보냄
                ))}
            </ul>
        </Box>
    )
}

export default TodoList