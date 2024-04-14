import { Table,Thead,Tbody,Tr, Th,Td, TableCaption,TableContainer,Card,Progress } from '@chakra-ui/react'
import {MoonIcon,Search2Icon,StarIcon ,PhoneIcon} from '@chakra-ui/icons'

function ComplexTable(){

const complexTable = [
    {id:1, name:'MarketPlace',status:'moon',date:'2024-01-01', progress:10,},
    {id:1, name:'MarketPlace',status:'phone',date:'2024-01-01', progress:70,},
    {id:1, name:'MarketPlace',status:'search',date:'2024-01-01', progress:50,},
    {id:1, name:'MarketPlace',status:'star',date:'2024-01-01', progress:30,},
]

    return(
        <Card my={10}>
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                <Tr>
                    <Th>name</Th>
                    <Th>status</Th>
                    <Th>date</Th>
                    <Th>progress</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {complexTable.map((data)=>(
                        <Tr key={data.id}>
                            <Td>{data.name}</Td>
                            <Td>
                                {data.status === 'moon' && <MoonIcon color={'gold'}/> }
                                {data.status === 'phone' && <PhoneIcon/>}
                                {data.status === 'search' && <Search2Icon color={'gray'} />}
                                {data.status === 'star' && <StarIcon color={'yellow'}/>}
                                {data.status}
                            </Td>
                            <Td>{data.date}</Td>
                            <Td>
                                <Progress value={data.progress}/>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    </Card>
    )
}

export default ComplexTable