import { Chip, Stack } from '@mui/material'

const DemoChip = () => {
  return (
    <div className="demo-chip-wrapper">
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="secondary" color="secondary" />
        <Chip label="error" color="error" />
        <Chip label="warning" color="warning" />
      </Stack>
    </div>
  )
}

export default DemoChip
