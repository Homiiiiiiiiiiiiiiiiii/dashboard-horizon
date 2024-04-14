import MiniSt from '../../componenets/card/MiniSt';
import { SimpleGrid, Card} from '@chakra-ui/react'
import ComplexTable from './components/ComplexTable';
import miniStData from '../../data/miniStData';
import LineChart from '../../componenets/charts/LineChart';
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from '../../variables/charts';


function Home(){

    return(
        <div>
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
