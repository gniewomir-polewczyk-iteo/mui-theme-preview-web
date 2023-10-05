import { useState } from "react";
import { Box, Slider } from "@mui/material";

const MuiSlider = () => {
  const [value, setValue] = useState<number>(30);
  const [range, setRange] = useState<number[]>([20, 37]);

  const handleChangeValue = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const valuetext = (value: number) => {
    return `${value}`;
  };

  const handleChangeRange = (event: Event, newValue: number | number[]) => {
    setRange(newValue as number[]);
  };

  return (
    <div className="mui-slider-wrapper">
      <h1>Slider</h1>
      <Box sx={{ minWidth: 120, maxWidth: 480 }}>
        <Slider value={value} onChange={handleChangeValue} />
      </Box>

      <h1>Discrete slider</h1>
      <Box sx={{ minWidth: 120, maxWidth: 480 }}>
        <Slider
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
      </Box>

      <h1>Range slider</h1>
      <Box sx={{ minWidth: 120, maxWidth: 480 }}>
        <Slider
          getAriaLabel={() => "Range"}
          value={range}
          onChange={handleChangeRange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
    </div>
  );
};

export default MuiSlider;
