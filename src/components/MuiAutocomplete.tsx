import React, { useState } from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'

const MuiAutocomplete = () => {
    type Skill = {
        id: number
        label: string
    }
    const skills = ['HTML','CSS','JavaScript','Typescript','React']

    const skillOptions = skills.map( (skill,index) => ({
        id: index + 1,
        label : skill
    }))
    const [value,setValue] = useState<string | null>(null)
    const [skill,setSkill] = useState<Skill | null>(null)
    console.log({value})
    console.log({skill});
    
  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete options={skills}
        freeSolo
        renderInput={(params) => <TextField {...params} label='Skills'/>}
        value={value}
        onChange={ (event,newValue: string | null) => setValue(newValue)}/>

        <Autocomplete options={skillOptions}
            renderInput={(params) => <TextField {...params} label='Skills'/>}
            value={skill}
            onChange={ (event,newValue: Skill | null) => setSkill(newValue)}/>
    </Stack>
    
  )
}

export default MuiAutocomplete
