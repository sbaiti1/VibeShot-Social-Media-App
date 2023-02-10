import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import {Typography} from '@mui/material';
import trendIcon from '../../../public/icons/trending.png'

const Btn = styled(Button)(({ theme }) => ({
    borderRadius : 50 , 
    background : 'rgba(71, 85, 105, 0.62)' , 
    minWidth: '79px' , 
    height:' 25px' , 
    color: '#D2DBE5' , 
    textTransform : 'lowercase'


 
}));
const Trend = styled(Box)(()=>({
    display : 'flex' , 
    alignItems : 'center' , 
    justifyContent : 'space-between'
}))

const trendingData = [{tag : 'gym_life' , count : 90} ,
{tag : 'healthy_meals' , count : 100} , 
{tag : 'fashion' , count : 70}
]

export default function Trending() {
  return (
    <Box sx={{ width: '100%' ,border:' 2px solid #64748B' , 
    borderRadius: '10px' , padding : '1rem ' }}>
        <Typography mb={2} variant='h6' >
                <img src={trendIcon} alt="" />
                 Today's Trending
        </Typography>
      <Stack spacing={2}>
            {trendingData.map((x , i)=>(
                <Trend key={i}>
                    <Typography sx={{fontWeight : 600}} variant='paragraph' > {x.tag} </Typography>
                    <Btn> {x.count} posts </Btn>
                </Trend>
            ))}
      </Stack>
    </Box>
  );
}