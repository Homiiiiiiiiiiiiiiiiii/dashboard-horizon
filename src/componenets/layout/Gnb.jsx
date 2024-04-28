import { Link} from '@chakra-ui/react'
import { useLocation,Link as ReactRouterLink } from "react-router-dom"
import { AddIcon, EditIcon, LinkIcon, RepeatIcon } from '@chakra-ui/icons'

function Gnb(){

    const navArr = [
        { name: 'Home', path: '/', icon: <RepeatIcon /> },
        { name: 'About', path: '/about', icon: <AddIcon /> },
        { name: 'Login', path: '/login', icon: <LinkIcon /> },
        { name: 'Todo', path: '/todo', icon: <EditIcon /> },
    ]

    const location = useLocation();
    return(
        <nav>
             <ul>
                {navArr.map((item,index)=>(
                    <li key={index}>
                        <Link to={item.path} as={ReactRouterLink} 
                        sx={{
                            color: location.pathname === item.path ? 'primary' : 'inheirt',
                            fontWeight: location.pathname === item.path ? 'bold' : 'inheirt',
                            '&::before':{
                                content:`""`,
                            },
                            '&:hover':{
                                color:'red'
                            }
                        }}>
                            {item.icon} {item.name}
                        </Link>    
                    </li>    
                ))}  
                {/* <li>
                    <Link as={ReactRouterLink} to='/'>Home</Link>    
                </li>
                <li>
                    <Link as={ReactRouterLink} to='/about'>About</Link>    
                </li>
                <li>
                    <Link as={ReactRouterLink} to='/login'>Login</Link>    
                </li> */}
            </ul> 

        </nav>
    )
}

export default Gnb