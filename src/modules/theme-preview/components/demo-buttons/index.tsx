import { Button, ButtonGroup } from '@mui/material'

const DemoButtons = () => {
  return (
    <div className="demo-buttons-wrapper">
      <ButtonGroup disableElevation variant="contained">
        <Button>Joy UI</Button>
        <Button>Material UI</Button>
        <Button>Base UI</Button>
      </ButtonGroup>
    </div>
  )
}

export default DemoButtons
