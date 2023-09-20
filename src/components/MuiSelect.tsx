import React, { useState } from 'react'
import { Box, TextField, MenuItem, Stack, Typography } from '@mui/material'
const MuiSelect = () => {
    // const [country,setCountry] = useState('')
    const [countries,setCountries] = useState<string[]>([])
    // console.log({country});
    console.log({countries});    
    
    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;        
        setCountries(typeof value == 'string' ? value.split(',') : value)
    }
  return (
    <Box width='250px'>     
        <Stack spacing={2} direction='row'>
        {/* fullWidth - Make select full width , 
            other wise width changes with the text or value of select 
        */}
        {/* SelectProps={ {
                    multiple:true
                }} used to make the select in to multiselect 
        */}
            <TextField label='Select country' select
                value={countries}
                onChange={handleSelectChange}
                fullWidth
                SelectProps={ {
                    multiple:true
                }}
                size='small'
                color='secondary'
                helperText='Select country'
                required
                error={countries.length == 0}
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
