import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const MuiRadio = () => {
  return (
    <div className="mui-radio-wrapper">
      <h1>Radio</h1>
      <FormControl>
        <FormLabel>Example</FormLabel>
        <RadioGroup defaultValue="example1" name="radio-buttons-group">
          <FormControlLabel
            value="example1"
            control={<Radio />}
            label="Example 1"
          />
          <FormControlLabel
            value="example2"
            control={<Radio />}
            label="Example 2"
          />
          <FormControlLabel
            value="example3"
            control={<Radio />}
            label="Example 3"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default MuiRadio;
