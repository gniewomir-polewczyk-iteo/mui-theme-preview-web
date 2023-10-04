import { Button, ButtonGroup } from '@mui/material'

const DemoButtons = () => {
  return (
    <div className="demo-buttons-wrapper">
      <ButtonGroup disableElevation variant="contained">
        <Button>Install everything</Button>
        <Button>Learn about it</Button>
      </ButtonGroup>
    </div>
  )
}

export default DemoButtons
