import Box from '@mui/material/Box';
// import '../../css/leftSection.css'
import Search from './search';
import Trending from './trending';
import { Stack } from '@mui/system';
import Suggestions from './suggestions';
import Footer from './footer';
import styled from 'styled-components';

const Container = styled(Stack)(()=>({
    padding: '1rem 0' ,
    height: '100vh',
    minWidth: '250px',
    
    position: 'fixed' ,
    top: 0 ,
    right: '3%' ,
    overflowX: 'hidden' ,
}))
export default function LeftSection (){
    return(
        <Container spacing={3}  >
            <Search />
            <Trending />
            <Suggestions />
            <Footer />
        </Container>
    )
}