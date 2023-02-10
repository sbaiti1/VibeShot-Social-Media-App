import SideNav from "./components/sideNav"
import '../css/app.css'
import Divider from '@mui/material/Divider';
import { Box } from "@mui/system";
import AddPost from "./components/addPost";
import Post from "./components/post";
import TopNav from "./components/topNav";
import LeftSection from "./components/leftSide";
export default function App(){

    return(
        <div className="app">
             <SideNav />  
             
             <Box className='home'>
                <TopNav />
                <AddPost/>
                <Post />
             </Box>
                <LeftSection />
                     
        </div>
    )
}