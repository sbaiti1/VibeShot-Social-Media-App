import { Typography ,  Box} from "@mui/material"
import styled from "styled-components"

const Text = styled(Box)(()=>({
    
        fontFamily: 'inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '15px',
        letterSpacing: '0.08em',

        color: '#475569'
}))

const Container = styled(Box)(()=>({
    display : 'flex' , 
    flexDirection : 'column' , 
    alignItems : 'center' , 
    justifyContent : 'center'
}))
export default function Footer(){
    return(
        <Container>
            <Text>Copyright © 2023</Text>
            <Text>All rights reserved to the dev team </Text>
        </Container>
    )
}