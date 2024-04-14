import { BellIcon, AtSignIcon,CopyIcon,DeleteIcon,EmailIcon } from '@chakra-ui/icons'
import IconBox from "../componenets/icon/IconBox";


    const miniStData = [
        {name:'타이틀1', value:'$350.0', startIcon:<IconBox bg={'red.200'} borderRadius={'50%'} display={'flex'} icon={<BellIcon/>}/>}, 
        {name:'타이틀2', value:'$450.0', startIcon:<IconBox bg={'gray.200'} borderRadius={'50%'} display={'flex'} icon={<AtSignIcon/>}/>},
        {name:'타이틀3', value:'$550.0', growth:'15.34%'}, 
        {name:'타이틀4', value:'$650.0', endIcon:<IconBox bg={'red.200'} borderRadius={'50%'} display={'flex'} icon={<CopyIcon/>}/>}, 
        {name:'타이틀5', value:'$750.0', startIcon:<IconBox bg={'red.200'} borderRadius={'50%'} display={'flex'} icon={<DeleteIcon/>}/>}, 
        {name:'타이틀6', value:'$850.0', startIcon:<IconBox bg={'red.200'} borderRadius={'50%'} display={'flex'} icon={<EmailIcon/>}/>}, 
    ]
    


export default miniStData

