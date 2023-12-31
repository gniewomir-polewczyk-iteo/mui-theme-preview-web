import { Box, FormControlLabel, FormGroup, Switch } from "@mui/material";

const MuiSwitch = () => {
  return (
    <div className="mui-switch-wrapper">
      <h1>Switch</h1>
      <Box>
        <Switch defaultChecked />
        <Switch />
        <Switch disabled defaultChecked />
        <Switch disabled />
      </Box>

      <h1>Switch label</h1>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel required control={<Switch />} label="Required" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>
    </div>
  );
};

export default MuiSwitch;
