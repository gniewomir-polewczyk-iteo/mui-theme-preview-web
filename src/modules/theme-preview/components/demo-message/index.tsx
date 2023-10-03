import { Avatar, Chip, Grid, Paper, Typography } from '@mui/material'

const DemoMessage = () => {
  return (
    <div className="demo-message-wrapper">
      <Paper>
        <Grid container>
          <Grid item xs={2}>
            <Avatar alt="Remy Sharp" src="/public/images/avatar/3.jpg" />
          </Grid>
          <Grid item xs={8}>
            <Typography>From: Angela Erickson</Typography>
            <Typography>Incredible discoveries!</Typography>
            <Typography>
              Just found out Material UI & Joy UI and wow...
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>9:41</Typography>
            <Chip label="3" />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default DemoMessage
