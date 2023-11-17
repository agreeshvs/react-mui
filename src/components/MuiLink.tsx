import { Link, Stack, Typography } from '@mui/material';
import React from 'react'

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction={'row'} m={4}>
        <Link href='#'>Link</Link>
        <Typography variant='h6'>
        <Link href='#' 
        color={'secondary'}
        underline='hover'
        >Secondary</Link>
        </Typography>
        <Link href='#' variant='body2'
        color={'secondary'}
        underline='none'
        >No underline</Link>
    </Stack>
  )
}
