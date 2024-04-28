import MiniSt from '../../componenets/card/MiniSt';
import { SimpleGrid, Card} from '@chakra-ui/react'
import ComplexTable from './components/ComplexTable';
import miniStData from '../../data/miniStData';
import LineChart from '../../componenets/charts/LineChart';
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from '../../variables/charts';
import { useEffect, useState } from 'react';


function Home(){
    //마운트 될 때
    const [color, setColor] = useState('yellow')

    useEffect(() => {
        document.body.style.backgroundColor = color //초기값은 yellow
        document.body.id = 'home'
        document.body.classList.add('yellow')

        //언마운트 될 때
        return () => {
            document.body.style.backgroundColor = 'white'
            document.body.id = ''
            document.body.classList.remove(color)
        }
    }, [color]) //마운트 되었을때는 빈배열, update시에는 변경할 상태값을 배열에 넣어주면 됨

    function toggleColor(){
        console.log('changeColor')
        setColor((prevColor) => (prevColor === 'yellow' ? 'skyblue' : 'yellow'))
    }
    return(
        <div>
            <button onClick={toggleColor}>색상변경</button>
            {/* <Logo/> */}
            {/* <Heading as={"h3"} fontSize={30}>홈 화면</Heading> */}
            {/* <SlideMain/> */}
            <Card>
                <LineChart 
                    chartData={lineChartDataTotalSpent}
                    chartOptions={lineChartOptionsTotalSpent}
                />
            </Card>
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
