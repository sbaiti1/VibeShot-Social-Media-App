import { Box } from "@mui/material"
import {Button} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import FilterListIcon from '@mui/icons-material/FilterList';
export default function TopNav(){

    return(
        <>
            <Box mb={4} component='div'
             sx={{display : 'flex' , alignItems : 'center' , justifyContent : 'space-between'  }} >

                <Typography variant="h5" component="h2" >Home</Typography>
                <Stack spacing={2} direction="row">
                    <Button sx={{borderRadius : 50 , border : ' 2px solid rgba(71, 85, 105, 0.8)'}} variant="outlined">
                        <Typography sx={{textTransform : 'captilize'}} variant="div" component="div" >All</Typography>
                     </Button>
                    <Button sx={{borderRadius : 50 , border : ' 2px solid rgba(71, 85, 105, 0.8)'}}  variant="outlined"> <FilterListIcon /> </Button>
                </Stack>
            </Box>
           
        </>
    )
}