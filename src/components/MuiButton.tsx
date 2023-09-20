import React from 'react'
import { Stack,Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatitalicIcon from '@mui/icons-material/FormatItalic'
import Formatunderlinedicon from '@mui/icons-material/FormatUnderlined'
import { FormatUnderlined } from '@mui/icons-material';
import { useState } from 'react'

const MuiButton = () => {
    const [formats,setFormats] = useState<string[]>([])
    console.log(formats);
    
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>,updatedFormats: string[]) => {
        setFormats(updatedFormats)
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                {/* Stack is used to add spacing and arrangment like display:flex .
                    Spacing will give some margins.
                    Varients used to create different types of buttons.
                    Adding href make the button as <a> in the DOM.
                */}
                <Button variant='text' href='https://mui.com/material-ui/customization/default-theme/'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='outlined' color='primary'>Primary</Button>
                <Button variant='outlined' color='secondary'>Secondary</Button>
                <Button variant='outlined' color='error'>Error</Button>
                <Button variant='outlined' color='warning'>Warning</Button>
                <Button variant='outlined' color='info'>Info</Button>
                <Button variant='outlined' color='success'>Success</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>

            </Stack>
            <Stack spacing={2} direction='row'>
                {/* disableRipple - Disable ripple effect */}
                <Button variant='contained' 
                    startIcon={<SendIcon />} 
                    disableRipple
                    onClick={ () => alert('Clicked')}
                >Send</Button>
                {/* disableElevation - used to remove shadow */}
                <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>
                <IconButton aria-label='send' color='success' size='small'>
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup variant='contained' 
                    orientation='vertical' size='small' 
                    color='secondary'
                    aria-label='alignment button group'>
                    <Button onClick={ () => alert('Left clicked')}>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup aria-label='text formatting' 
                    value={formats}
                    onChange={handleFormatChange}
                    size='small'
                    color='success'
                    orientation='vertical'
                    exclusive
                >
                    <ToggleButton value='bold' aria-label='bold'>
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'>
                        <FormatitalicIcon />
                    </ToggleButton>
                    <ToggleButton value='underlined' aria-label='bold'>
                        <Formatunderlinedicon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>

        
    )
}

export default MuiButton
