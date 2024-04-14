import { Heading } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

function Title(){

const location = useLocation()
const pathArr = location.pathname.split('/').filter(Boolean)
const pageTitle = pathArr.length > 0 ? pathArr[pathArr.length-1] : 'Home'
const title = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)

    return <Heading as={'h2'}>{title}</Heading>
}

export default Title

