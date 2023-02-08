import SideNav from "./components/sideNav"
import '../css/app.css'
import Divider from '@mui/material/Divider';
import { Box } from "@mui/system";
import AddPost from "./components/addPost";
export default function App(){

    return(
        <div className="app">
             <SideNav />  
             
             <Box className='home'>
                <AddPost/>
             </Box>
                     
        </div>
    )
}