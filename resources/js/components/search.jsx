import FormControl from '@mui/material/FormControl';
import { OutlinedInput } from '@mui/material';
import {InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
export default function Search(){
    return(
       
        <FormControl 
        sx={{ m: 1}}
         variant="outlined">
          <OutlinedInput sx={{color : '#B3BFCF' ,height : '45px' , width: '25ch' , background: 'rgba(100, 116, 139, 0.3)',border : '2px solid #64748B' , borderRadius : 50 }}
            placeholder ='search'
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"> < SearchIcon /></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>
      
    )
}