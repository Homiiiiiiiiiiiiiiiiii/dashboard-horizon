import { Box, Heading, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import React, { useState } from 'react'

const TodoHd = () => {
  return (
    <Box py={5}>
        <Box mt={3}>
            <Heading as={'h2'} fontSize={20}>📝할 일 관리앱</Heading>
            <p><Text as={'span'} fontSize={18} fontWeight={700}>{format(new Date(), 'yyyy-MM-dd')}</Text> 오늘의 할 일을 적어보세요.</p>
        </Box>
    </Box>
  )
}

export default TodoHd