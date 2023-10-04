import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useState } from 'react'

const DemoToggleButtons = () => {
  const [alignment, setAlignment] = useState('material-ui')

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment)
  }

  return (
    <div className="demo-toggle-buttons-wrapper">
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="joy-ui">Joy UI</ToggleButton>
        <ToggleButton value="material-ui">Material UI</ToggleButton>
        <ToggleButton value="base-ui">Base UI</ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default DemoToggleButtons
