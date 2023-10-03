import { Box, Paper, Slider, Typography } from '@mui/material'

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 50,
    label: '50°C',
  },
  {
    value: 80,
    label: '80°C',
  },
  {
    value: 100,
    label: '100°C',
  },
]

function valuetext(value: number) {
  return `${value}°C`
}

const DemoRange = () => {
  return (
    <div className="demo-range-wrapper">
      <Paper>
        <Box>
          <Typography id="track-inverted-range-slider" gutterBottom>
            Inverted track range
          </Typography>
          <Slider
            valueLabelDisplay="on"
            getAriaValueText={valuetext}
            defaultValue={[20, 37]}
            marks={marks}
          />
        </Box>
      </Paper>
    </div>
  )
}

export default DemoRange
