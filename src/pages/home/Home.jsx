import MiniSt from '../../componenets/card/MiniSt';
import { SimpleGrid} from '@chakra-ui/react'
import ComplexTable from './components/ComplexTable';
import miniStData from '../../data/miniStData';


function Home(){

    return(
        <div>
            {/* <Logo/> */}
            {/* <Heading as={"h3"} fontSize={30}>홈 화면</Heading> */}
            {/* <SlideMain/> */}
            <ComplexTable/>
            <SimpleGrid columns={[1, null, 2, 3, 6]}>
                {miniStData.map((data, index)=>(
                    <MiniSt key={index} {...data}/>   
                ))}
            </SimpleGrid>
            {/* <Stack direction={['column',null,null,'row']}></Stack> */}
        </div>
    )
}

export default Home;
