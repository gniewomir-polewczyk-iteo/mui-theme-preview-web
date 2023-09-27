import { Button, ButtonGroup } from '@mui/material'

const MuiButtonGroup = () => {
  return (
    <div className="mui-button">
      <h1>Text button group</h1>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h1>Contained button group</h1>
      <ButtonGroup variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h1>Outlined button group</h1>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  )
}

export default MuiButtonGroup
