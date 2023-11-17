import React, { useState } from 'react'
import { Rating, Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteborderIcon from '@mui/icons-material/FavoriteBorder'
const MuiRating = () => {
    const [rating,setRating] = useState<number | null>(3.5)
    console.log({rating});
    
    const handleChange = (
        _event: React.ChangeEvent<{}>, 
        newValue: number | null
        ) => {
        setRating(newValue)
    }
    // highlightSelectedOnly - highlight selected icon
  return (
    <Stack spacing={2}>
      <Rating 
        precision={0.5}
        size='large'
        value={rating} 
        onChange={handleChange}
        icon={<FavoriteIcon fontSize='inherit' color='error'/>}
        emptyIcon = {<FavoriteborderIcon fontSize='inherit'/>}
        
        highlightSelectedOnly
        />
    </Stack>
  )
}

export default MuiRating
