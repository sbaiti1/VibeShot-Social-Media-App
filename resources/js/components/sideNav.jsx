import '../../css/sideNav.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Avatar } from '@mui/material';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import logo from '../../../public/icons/VibeShot.svg'
import userImage from '../../../public/images/user.png'
import { Link} from 'react-router-dom';
import styled from 'styled-components';

const AppLink = styled(Link)(()=>({
  color : '#fff' , 
  textDecoration :'none' 
}))
export default function SideNav() {
  
  return (
    <Box className='sideNav'  sx={{height : '100%' , width: '100%', maxWidth: 230}}>

      <nav aria-label="main mailbox folders">
        <List className='list'>
        
          <ListItem sx={{marginLeft : "1rem"}} className='listItem' >
            <img src={logo} alt="" />
          {/* <ListItemText sx={{fontSize : "50px"}} className='logo' primary="Vibeshot" /> */}
          </ListItem>

          <ListItem  className='listItem' >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon style={{color :'#fff'}} />
              </ListItemIcon>
              <ListItemText className='listItemText' primary={<AppLink to='/'>Home</AppLink>} />
            </ListItemButton>
          </ListItem>

          <ListItem className='listItem' >
            <ListItemButton>
              <ListItemIcon>
                <TagIcon style={{color :'#fff'}} />
              </ListItemIcon>
              <ListItemText className='listItemText' primary={<AppLink to='/explore'>Explore</AppLink>} />
            </ListItemButton>
          </ListItem>
       

        <ListItem className='listItem'>
            <ListItemButton>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText className='listItemText' primary={<AppLink to='/notifications'>Notifications</AppLink>} />
            </ListItemButton>
          </ListItem>

          

          <ListItem className='listItem'>
            <ListItemButton>
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText className='listItemText' primary={<AppLink to='/bookmarks'>Bookmarks</AppLink>} />
            </ListItemButton>
          </ListItem>

          <ListItem className='listItem' >
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText className='listItemText' primary={<AppLink to='/settings'>Settings</AppLink>}/>
            </ListItemButton>
          </ListItem>

        
      <ListItem sx={{ mt: 'auto', mx: 1 }} className='last' >
      <ListItemAvatar>
          {/* <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/2.jpg" /> */}
          <Avatar alt="Cindy Baker" src={userImage} />

        </ListItemAvatar>
        <ListItemText className='listItemText' primary="Youssef king" secondary="@ysf_king" />
      </ListItem>
      </List>
      </nav>
      
    </Box>
  );
}