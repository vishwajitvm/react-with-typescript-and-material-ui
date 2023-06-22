import { InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'

const MuiTextField = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined' />
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='standard' />
            </Stack>

            {/* small size input */}
            <Stack direction='row' spacing={2}>
                <TextField label='Small secondary' size='small' color='secondary' variant='outlined' />
            </Stack>

            {/* Required */}
            <Stack direction='row' spacing={2}>
                <TextField label='Form Input' required />
                <TextField type='password' label='Password' helperText='DO not share you password with anyone' />
                <TextField label='Disabled input' disabled />
            </Stack>

            {/* Read Only */}
            <Stack direction='row' spacing={2}>
                <TextField label='Read only Input' inputProps={{ readOnly: true }} value="Hello world" />
            </Stack>

            {/* PREFIX AND SUFFIXES [Adornment] */}
            <Stack direction='row' spacing={2}>
                <TextField
                    label='Amount'
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                    }}
                />

                <TextField
                    label='Weight'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>Kg</InputAdornment>,
                    }}
                />
            </Stack>

        </Stack>
    )
}

export default MuiTextField
