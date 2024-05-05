import { Box, Heading, Input } from '@chakra-ui/react'
import React, { useMemo, useState } from 'react'
import TodoItem from './TodoItem'
// import { useTodoState } from '../../../context/TodoContext'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const [search, setSearch] = useState('')
    const todos = useSelector((state) => state.todo.todos)
    // const todo = useTodoState()

    function onChangeSearch(e) {
        setSearch(e.target.value)
    }

    const filteredTodo = useMemo(() => {
        // todo 상태가 배열인지 확인하고 배열 메서드를 사용하기
        if (Array.isArray(todos)) {
            return todos.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()))
        } else {
            return []
        }
    }, [search, todos])

    const lookback = useMemo(() => { 
        console.log('lookback')
        const total = todos.length
        const done = todos.filter((item) => item.isDone).length
        const notDone = total - done

        return {
            total, done, notDone
        }
     }, [todos])


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
                {filteredTodo.map((item) => (
                    <TodoItem key={item.id} {...item} /> //전개 연산자 사용으로 데이터 한번에 보냄
                ))}
            </ul>

            <div>
                <h4>통계</h4>
                <p>총 할 일 : {lookback.total}</p>
                <p>완료한 할 일 : {lookback.done}</p>
                <p>미완료한 할 일 : {lookback.notDone}</p>
            </div>
        </Box>
    )
}

export default TodoList