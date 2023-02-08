import { Box } from "@mui/joy"
import { Avatar } from '@mui/material';
import GifIcon from '@mui/icons-material/Gif';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import MoodIcon from '@mui/icons-material/Mood';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GifBoxIcon from '@mui/icons-material/GifBox';
import '../../css/addPost.css'

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
                        <InsertPhotoIcon sx={{fill : '#38B6FF'}} fontSize="small"/>
                        <LocationOnIcon sx={{fill : '#38B6FF'}} fontSize="small"/>
                        <GifBoxIcon sx={{fill : '#38B6FF'}} fontSize="small"/>
                        <MoodIcon sx={{fill : '#38B6FF'}} fontSize="small" />
                    </div>
                </form>
            </div>
        </>
    )
}