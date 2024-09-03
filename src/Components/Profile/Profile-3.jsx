import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, TextField } from '@mui/material';
import Car from '../Images/BMW_PNG67.png'
import SendIcon from '@mui/icons-material/Send';
import Modal3 from '../Models/Model-3';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Profile3() {

  const [input, setInput]=React.useState('')
  const [comment, setComment]=useState([])
  const [increase, setIncrease]=useState(0) 
    const [like, setLike]=React.useState(0);
    const [heart, setHeart]=React.useState(null)

   
    const handleLike = ()=>{
      if(!heart){
        setHeart(true)
        setLike(like+1);
      }else{
        setHeart(false)
        setLike(like-1)
      }
  }
  const handleComment=(e)=>{
    setIncrease(increase+1)
  e.preventDefault();
  const data={
    id:Date.now(),
    input:input,
  }
  setComment([...comment, data])
  setInput('')
  console.log(updatedData)
  }
    
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Z4
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="BMWZ4"
    
      />
       
       <Box sx={{ textAlign:'center',border:'1px solid #bdbdbd'}}>
        <img src={Car} alt='image' style={{width:'300px'}}
        />
      
      </Box>
      <CardContent>
        <Typography variant="body2">
          The roadster That's always one step ahead.🔥
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLike}>
        {!heart? <FavoriteBorderOutlinedIcon  /> :<FavoriteIcon sx={{color:'red'}} />}
            <p style={{fontSize:'20px', margin:'0px 0px 5px 5px'}}>{like}</p>
        </IconButton>
        <IconButton aria-label="comment">
        <ExpandMore
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
           <ChatBubbleIcon /> <p style={{fontSize:'20px', margin:'0px 0px 5px 5px'}}>{increase}</p>
          </ExpandMore>
        </IconButton>
       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent  sx={{position:"relative", }}>
      <TextField
         sx={{width:'250px'}}
          label='Add comment...'
          id="standard-size-small"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          variant="standard"
        
        />
        <SendIcon 
        onClick={handleComment}
         fontSize='small'
          sx={{marginTop:'30px', 
          position:"absolute", 
          right:"5%",
           cursor:"pointer"
        }}
          />
          <Box sx={{ marginTop:'15px',}}>
          {comment.map((value)=>{
            return(
              <>
                 <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Z4
          </Avatar>
        }
       
        title="car@123"
      />          
           <p 
           style=
           {{marginInline:'55px',
           display:'flex', 
           justifyContent:'space-between'
           }}
           >
            {value.input} 
            <span>
              <Modal3 value={value} comment={comment} setComment={setComment} increase={increase} setIncrease={setIncrease}/> 
              </span>
              </p> 
             </>
            )
          })}
          </Box>
      </CardContent> 
      </Collapse>
    </Card>
    
    </>
    
  );
}
