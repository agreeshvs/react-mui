import React, { useState } from 'react'
import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from '@mui/material'

const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    console.log({checked});
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }
    const label = { inputProps: { 'aria-label': 'Size switch demo' } };
  return (
    <Box>
        <FormControlLabel label='' 
            control={<Switch size='small' color='success' checked={checked} {...label} 
            onChange={handleChange} />} 
        />

        <FormControl>
            <FormLabel>Theme</FormLabel>
            <FormGroup row>
                <FormControlLabel label='Theme' control={<Switch />}></FormControlLabel>
            </FormGroup>
        </FormControl>
    </Box>
  )
}

export default MuiSwitch
