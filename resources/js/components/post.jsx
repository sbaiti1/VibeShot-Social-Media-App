

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import userImage from '../../../public/images/user2.png'
import media1 from '../../../public/images/media1.png'
import media2 from '../../../public/images/media2.jpg'
import { Box } from '@mui/system';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card 
     sx={{ maxWidth: 550 ,
      background : 'transparent' ,
       border : '1px solid #353535' ,
        borderRadius : '20px' , paddingLeft : 3 , margin : '1rem 0'}}>
      <CardHeader  
        avatar={
            <Avatar alt="Cindy Baker" src={userImage} />

        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ali Mansor"
        subheader= {<span className='subheader'>beautiful night spent in the beach ✨ </span>}
        
      />
      
     
     <Box  mt={1} ml={2}  sx={{display : 'flex' , gap : '18px'}}>
     <CardMedia
        component="div"
        alt="Paella dish"
        className='media'
        sx={{backgroundImage : `url(${media1})`}}
      />
      <CardMedia 
        component="div"
        alt="Paella dish"
        className='media'
        sx={{backgroundImage : `url(${media2})`}}
        
      />
     </Box>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
  );
}