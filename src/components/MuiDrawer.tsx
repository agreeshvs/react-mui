import { Box, Drawer, Grid, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
        <IconButton size='large' 
            edge='start'
            color='inherit'
            aria-label='logo'
            onClick={()=>setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
        <Drawer anchor='left' open={isDrawerOpen}
            onClose={()=> setIsDrawerOpen(false)}>
            <Box p={2} width={'250px'} 
            textAlign={'center'}
            role='presentation'>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <Typography variant='h6'>
                            Side Panel
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <CloseIcon color='inherit' onClick={()=> setIsDrawerOpen(false)}></CloseIcon>
                    </Grid>
                </Grid>                
            </Box>
        </Drawer>
    </>
  )
}
