import { Box, Breadcrumbs, Link, Paper, Typography } from '@mui/material';
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2} >
        <Paper sx={{ padding:'32px',margin: '20px' }} elevation={4}>
            <Typography variant='subtitle1'>'-' as seperator</Typography>
            <Breadcrumbs aria-label='breadcrumb' separator='-'>
                <Link underline='hover' href='#'>Home</Link>
                <Link underline='hover' href='#'>Accessory</Link>
                <Link underline='hover' href='#'>Catalog</Link>
            <Typography color='text.primary'>Shoes</Typography>
            </Breadcrumbs>
        </Paper>
        <Paper sx={{ padding:'32px', margin: '20px' }} elevation={4}>
            <Typography variant='subtitle1'>Icon as seperator</Typography>
            <Breadcrumbs 
                aria-label='breadcrumb' 
                maxItems={2}
                itemsAfterCollapse={2}
                itemsBeforeCollapse={2}
                separator={<NavigateNextIcon fontSize='small'/>}>
                <Link underline='hover' href='#'>Home</Link>
                <Link underline='hover' href='#'>Accessory</Link>
                <Link underline='hover' href='#'>Catalog</Link>
                <Link underline='hover' href='#'>Blog</Link>
            <Typography color='text.primary'>Shoes</Typography>
            </Breadcrumbs>
        </Paper>
        
    </Box>
  )
}
