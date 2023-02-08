import { Box } from "@mui/joy"
import { Avatar } from '@mui/material';
import GifIcon from '@mui/icons-material/Gif';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import MoodIcon from '@mui/icons-material/Mood';
import { pink } from '@mui/material/colors';
export default function AddPost(){

    return(
        <>
            <div className='addContainer'>
                <div className="userProfile">
               
                <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/2.jpg" />

                </div>
                <form action="">
                    <input className="textField" type="text" placeholder="share your vibe !" />
                    <div className="icons">
                        <InsertPhotoIcon fontSize="small"/>
                        <GifIcon  fontSize="small"/>
                        <MoodIcon fontSize="small"/>
                        <MoodIcon fontSize="small" sx={{ color: pink[500] }} />
                    </div>
                </form>
            </div>
        </>
    )
}