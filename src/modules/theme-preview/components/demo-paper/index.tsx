import { Avatar, Box, LinearProgress, Paper, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CodeIcon from '@mui/icons-material/Code'

const DemoPaper = () => {
  return (
    <div className="demo-paper-wrapper">
      <Paper>
        <Box display={'flex'}>
          <AccessTimeIcon />
          <Typography variant="caption">March 25th</Typography>
        </Box>
        <Box>
          <CodeIcon />
          <Typography variant="body1">
            Customize every button and chip instance primary color
          </Typography>
        </Box>
        <Box display={'flex'}>
          <Avatar alt="Remy Sharp" src="/public/images/avatar/1.jpg" />
          <div>
            <Typography variant="body1">Assigned to</Typography>
            <Typography variant="body2">Michael Scott</Typography>
          </div>
        </Box>
        <Box>
          <LinearProgress value={60} />
          <Typography variant="body2">60%</Typography>
        </Box>
      </Paper>
    </div>
  )
}

export default DemoPaper
