import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const MuiCheckbox = () => {
  return (
    <div className="mui-button">
      <h1>Checkbox</h1>
      <div>
        <Checkbox defaultChecked />
        <Checkbox />
        <Checkbox disabled />
        <Checkbox disabled checked />
      </div>

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
