import { useState } from 'react'
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
} from '@mui/material'

const MuiSelect = () => {
  const [example, setExample] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setExample(event.target.value as string)
  }

  return (
    <div className="mui-select-wrapper">
      <h1>Select</h1>
      <Box sx={{ minWidth: 120, maxWidth: 480 }}>
        <FormControl fullWidth>
          <InputLabel>Example</InputLabel>
          <Select value={example} label="Example" onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <h1>Native select</h1>
      <Box sx={{ minWidth: 120, maxWidth: 480 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Example
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: 'example',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </div>
  )
}

export default MuiSelect
