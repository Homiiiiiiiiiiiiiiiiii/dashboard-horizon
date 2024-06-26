export const buttonStyles = {
    components:{
        Button:{
            baseStyle:{
                borderRadius: '0',
                boxShadow: '45px 76px 113px 7px rgba(112, 144, 176, 0.08)',
                transition: '.25s all ease',
                boxSizing: 'border-box',
                _focus: {
                    boxShadow: 'none',
                },
                _active: {
                    boxShadow: 'none',
                },
            },
            variants:{
                icon:{
                    w:'45px',
                    h:'45px',
                    bg:'red.100',
                    borderRadius:'50%',
                    color:'white',
                }
            }
        }
    }
}

