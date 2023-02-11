import SideNav from "./sideNav"
import '../../css/app.css'
import Divider from '@mui/material/Divider';
import { Box } from "@mui/system";
import AddPost from "./addPost";
import Post from "./post";
import TopNav from "./topNav";
import LeftSection from "./leftSide";
export default function Home(){

    return(
        <div className="app">
             
             
             <Box className='home'>
                <TopNav />
                <AddPost/>
                <Post />
             </Box>
                <LeftSection />
        
        </div>
    )
}


