import React from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'
import { useState } from 'react'
const MuiTextfield = () => {
    const [value,setValue] = useState('');
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            {/* 3 variants - 
                outlined - default
                Fill and 
                Standard */}
            <TextField label='Name' variant='outlined'
                size='small' />
            <TextField label='Name' variant='filled'></TextField>
            <TextField label='Name' variant='standard'></TextField>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Small secondary' 
                size='small' color='secondary' />
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Form input' 
                size='small' color='secondary' required value={value}
                onChange={ e=>setValue(e.target.value)} error={!value}
                helperText={!value ? "This field is required" : ''} />
            <TextField label='Password' type='password'
                size='small' color='secondary' 
                helperText='Do not share your password to anyone'
                disabled
            />
            {/* Readonly input */}
            <TextField label='Password' type='password' InputProps={{readOnly:true}}/>


        </Stack>
        <Stack spacing={2} direction='row'>
        {/* InputAdornment - add icons in the input field */}
        <TextField label="Amount" InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }} 
        />

        <TextField label="Weight" InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }} 
        />
        </Stack>
    </Stack>
  )
}

export default MuiTextfield
