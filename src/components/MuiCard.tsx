import { Avatar, Box, Button, Card, CardActions, CardContent,CardHeader,CardMedia,IconButton,Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MuiCard = () => {
  return (
    <Box width={'300px'}>
      <Card>
        <CardHeader 
          avatar={
            <Avatar sx={ {bgcolor:red[500]}} aria-label="React">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title="Learn React"
          subheader="Tutorial on React">

        </CardHeader>
        <CardMedia component='img' alt='image'
            height='140'
            image='https://images.unsplash.com/photo-1692879449085-4ae26a86a5bd?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></CardMedia>
        <CardContent>
            <Typography gutterBottom variant='h5' component={'div'}>
                React
            </Typography>
            <Typography variant='body2' color='text.secondary'>
                React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard
