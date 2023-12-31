import { useState} from 'react'
import { Stack, Button, ButtonGroup , ToggleButton , ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButtonsComponent = () => {
  const [formats , setFormats] = useState<string[]>([]) ;
  const handelFormateChange = (_event: React.MouseEvent<HTMLElement> , updatedFormate: string[]) => {
    setFormats(updatedFormate) ;
    console.log({formats})
  }
  return (
    <Stack spacing={4}>
      {/* Normal button */}
      <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://google.com'>Click me</Button>
        <Button variant='contained'>contained</Button>
        <Button variant='outlined'>outlined</Button>
      </Stack>

      {/* colored button */}
      <Stack direction='row' spacing={3}>
        <Button variant='contained' color='primary' >Primary color button</Button>
        <Button variant='contained' color='secondary' >Secondary color button</Button>
        <Button variant='contained' color='error' >Error color button</Button>
        <Button variant='contained' color='warning' >Warning color button</Button>
        <Button variant='contained' color='info' >Info color button</Button>
        <Button variant='contained' color='success' >success color button</Button>
      </Stack>

      {/* Button size */}
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' color='success' size='small' >Small</Button>
        <Button variant='contained' size='medium' >Medium</Button>
        <Button variant='contained' color='warning' size='large' >Large</Button>
      </Stack>

      {/* Button With icons [ npm install @mui/icons-material ] */}
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' color='success' startIcon={<SendIcon />} >Send</Button> {/*beforetext*/}
        <Button variant='contained' color='warning' endIcon={<SendIcon />} >Send</Button>  {/*After text*/}
      </Stack>

      {/* IconButton Usage */}
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' color='success' size='small' >Small</Button>
      </Stack>

      {/*  Button Group Usage */}
      <Stack display='block' spacing={2} direction='row'>
        <ButtonGroup variant='outlined'>
      <Button >Left</Button>
      <Button >Middle</Button>
      <Button >Right</Button>
      </ButtonGroup>

      <ButtonGroup variant='text'>
      <Button >Left</Button>
      <Button >Middle</Button>
      <Button >Right</Button>
      </ButtonGroup>

      <ButtonGroup variant='text' orientation='vertical'>
      <Button >Left</Button>
      <Button >Middle</Button>
      <Button >Right</Button>
      </ButtonGroup>
      </Stack>

      {/* Toggle Button Usage */}
      <Stack spacing={2} direction='row'>
        <ToggleButtonGroup aria-label='text formating'value={formats} onChange={handelFormateChange}>
        <ToggleButton value='bold' aria-label='bold'> <FormatBoldIcon/> </ToggleButton>
        <ToggleButton value='italic' aria-label='italic'> <FormatItalicIcon/> </ToggleButton>
        <ToggleButton value='underline' aria-label='underline'> <FormatUnderlinedIcon/> </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MuiButtonsComponent
