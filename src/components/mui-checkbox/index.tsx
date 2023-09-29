import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const MuiCheckbox = () => {
  return (
    <div className="mui-checkbox-wrapper">
      <h1>Checkbox</h1>
      <Box>
        <Checkbox defaultChecked />
        <Checkbox />
        <Checkbox disabled />
        <Checkbox disabled checked />
      </Box>

      <h1>Checkbox label</h1>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
    </div>
  )
}

export default MuiCheckbox
