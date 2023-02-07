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
export default function SideNav() {
  
  return (
    <Box className='sideNav'  sx={{height : '100%' , width: '100%', maxWidth: 230}}>

      <nav aria-label="main mailbox folders">
        <List className='list'>
          <ListItem>
          <ListItemText className='logo' primary="Vibeshot" />

          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon style={{color :'#fff'}} />
              </ListItemIcon>
              <ListItemText className='listItemText' primary="Inbox" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <TagIcon style={{color :'#fff'}} />
              </ListItemIcon>
              <ListItemText className='listItemText' primary="Explore" />
            </ListItemButton>
          </ListItem>
        </List>

        <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText className='listItemText' primary="Notifications" />
            </ListItemButton>
          </ListItem>

          

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText className='listItemText' primary="Bookmarks" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText className='listItemText' primary="Settings" />
            </ListItemButton>
          </ListItem>
          </nav>
      <Divider />

      <ListItem className='last' >
      <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/2.jpg" />

        </ListItemAvatar>
        <ListItemText className='listItemText' primary="Youssef king" secondary="@ysf_king" />
      </ListItem>
     
    </Box>
  );
}