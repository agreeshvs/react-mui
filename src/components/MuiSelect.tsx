import React, { useState } from 'react'
import { Box, TextField, MenuItem, Stack, Typography } from '@mui/material'
const MuiSelect = () => {
    const [country,setCountry] = useState('')
    console.log({country});
    
    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }
  return (
    <Box width='250px'>     
        <Stack spacing={2} direction='row'>
            <TextField label='Select country' select
                value={country}
                onChange={handleSelectChange}
                fullWidth
            >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='SL'>Srilanka</MenuItem>
                <MenuItem value='LI'>Switzerland</MenuItem>
            </TextField>
        </Stack>
    </Box>
  )
}

export default MuiSelect
