import React from 'react'
import { ImageList, Stack, ImageListItem, Box, ImageListItemBar, ListSubheader, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
const MuiImageList = () => {
  return (
    <Stack spacing={4}>
        <Typography variant='h5'> Image List with subheader</Typography>
        <ImageList sx={{ width: 500, height: 450 }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">December</ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                    >
                        <InfoIcon />
                    </IconButton>
                    }
                />
                </ImageListItem>
            ))}
        </ImageList>
        <Typography variant='h5'> Image List with overlay</Typography>
       <ImageList sx={
            { width: 500, height: 450}
        }
       >
        {
            itemData.map( item => (
                <ImageListItem key={item.img}>
                    <img 
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                    alt={item.title}
                    loading='lazy' />
                    <ImageListItemBar 
                    title={item.title}
                    position='below'
                    subtitle={<span>By: {item.author}</span>} />
                </ImageListItem>
            ))
        }
       </ImageList>
       <Typography variant='h5'> Image List with variant="quilted"</Typography>
       <ImageList sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
       >
        {
            itemData.map( item => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img 
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                    alt={item.title}
                    loading='lazy' />
                </ImageListItem>
            ))
        }
       </ImageList>
       <Typography variant='h5'> Image List with variant="woven"</Typography>

       <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
            {itemData2.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=161&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </ImageList>
        <Typography variant='h5'> Image List with variant="masonry"</Typography>
        <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
        
            <ImageList  variant="masonry" cols={3} gap={8}>
                {itemData2.map((item) => (
                    <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar position="below" title={item.author} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    </Stack>
  )
}

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
       author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
       author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
       author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
       author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
       author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
       author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
       author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
       author: '@bkristastucchio',
    },
  ];

  const itemData2 = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
        author: 'swabdesign',
      },
      {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
        author: 'Pavel Nekoranec',
      },
      {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
        author: 'Charles Deluvio',
      },
      {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
        author: 'Christian Mackie',
      },
      {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
        author: 'Darren Richardson',
      },
      {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
        author: 'Taylor Simpson',
      },
      {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
        author: 'Ben Kolde',
      },
      {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
        author: 'Philipp Berndt',
      },
      {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
        author: 'Jen P.',
      },
      {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
        author: 'Douglas Sheppard',
      },
      {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
        author: 'Fi Bell',
      },
      {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
        author: 'Hutomo Abrianto',
      },
  ];
export default MuiImageList
