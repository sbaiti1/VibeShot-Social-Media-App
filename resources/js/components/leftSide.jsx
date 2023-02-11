import Box from '@mui/material/Box';
import '../../css/leftSection.css'
import Search from './search';
import Trending from './trending';
import { Stack } from '@mui/system';
import Suggestions from './suggestions';
import Footer from './footer';

export default function LeftSection (){
    return(
        <Stack spacing={3} className='leftSection' >
            <Search />
            <Trending />
            <Suggestions />
            <Footer />
        </Stack>
    )
}