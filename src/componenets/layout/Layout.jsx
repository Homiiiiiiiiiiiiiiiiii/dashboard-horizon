import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import {Flex, Box} from '@chakra-ui/react';
import Title from "./Title";

function Layout(){
    return (
        <Flex minH={'100vh'}>
            <Header/>
            <Box id="main" flex={1} p={5}>
                <Title/>
                <Outlet/>
            </Box>
            {/* <Footer/> */}
        </Flex>
    )
}
export function LayoutType2(){
    return(
        <div>
            <h1>Login</h1>
            <p>로그인 화면입니다.</p>
        </div>
    )
}
export default Layout