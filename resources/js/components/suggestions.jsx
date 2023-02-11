import { Box , Stack , Button , Avatar , Typography} from "@mui/material"
import styled from "styled-components"
import userImage from '../../../public/images/Ellipse 8.png'

const Container = styled(Box)(()=>({
    background:' rgba(100, 116, 139, 0.3)' ,
    border: '2px solid #64748B',
    borderRadius: '10px' , 
    padding : '0.8rem 1rem' , 
    width: '300px',

    }))

const FollowBtn = styled(Button)(()=>({
    background : '#fff' , 
    borderRadius : 50 , 
    color : '#000' , 
    fontSize : '15px' , 
    textTransform : 'lowercase' , 
    fontStyle: 'normal',
    lineHeight: '18px' ,
    letterSpacing: '0.08em' ,

    color: '#1E293B'
}))
const Item = styled(Box)(()=>({
    display : 'flex' , 
    alignItems : 'center' , 
    justifyContent : 'space-between'
}))
export default function Suggestions(){

    return(
        <Container>
                <Typography variant="h6" >People you might know</Typography>
                <Stack mt={2} spacing={2}>
                    <Item>
                        <Stack direction='row' spacing={1}>
                            <Avatar src={userImage} />
                            <div>
                            <Typography variant="div" >Ahlam Noaman</Typography>
   
                            </div>
                        </Stack>
                        <FollowBtn>follow</FollowBtn>
                    </Item>
                    
                    <Item>
                        <Stack direction='row' spacing={1}>
                            <Avatar src={userImage} />
                            <div>
                            <Typography variant="div" >Ahlam Noaman</Typography>
   
                            </div>
                        </Stack>
                        <FollowBtn>follow</FollowBtn>
                    </Item>
                    <Item>
                        <Stack direction='row' spacing={1}>
                            <Avatar src={userImage} />
                            <div>
                            <Typography variant="div" >Ahlam Noaman</Typography>
   
                            </div>
                        </Stack>
                        <FollowBtn>follow</FollowBtn>
                    </Item>
                </Stack>
        </Container>
    )
}