import Box from '@mui/material/Box';
import '../../css/leftSection.css'
import Search from './search';
import Trending from './trending';
import { Stack } from '@mui/system';

export default function LeftSection (){
    return(
        <Stack spacing={6} className='leftSection' >
            <Search />
            <Trending />
        </Stack>
    )
}