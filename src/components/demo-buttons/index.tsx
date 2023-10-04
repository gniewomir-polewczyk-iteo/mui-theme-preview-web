import { Button, Stack } from '@mui/material'

const DemoButtons = () => {
  return (
    <div className="demo-buttons-wrapper">
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          sx={{ fontSize: '0.85em', textTransform: 'none', width: '100%' }}
        >
          Install everything
        </Button>
        <Button
          variant="outlined"
          sx={{ fontSize: '0.85em', textTransform: 'none', width: '100%' }}
        >
          Learn about it
        </Button>
      </Stack>
    </div>
  )
}

export default DemoButtons
