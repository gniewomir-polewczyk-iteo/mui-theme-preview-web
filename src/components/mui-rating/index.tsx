import { Box, Rating, Typography } from '@mui/material'
import { useState } from 'react'

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(2)

  return (
    <div className="mui-rating-wrapper">
      <h1>Rating</h1>
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />
      </Box>
    </div>
  )
}

export default MuiRating
