import { Avatar, Chip, Grid, Paper, Typography } from "@mui/material";

const DemoMessage = () => {
  return (
    <div className="demo-message-wrapper">
      <Paper sx={{ p: 2 }}>
        <Grid container>
          <Grid item xs={2}>
            <Avatar alt="Remy Sharp" src="/images/avatar/3.jpg" />
          </Grid>
          <Grid item xs={9}>
            <Typography
              sx={{ color: "primary.main", fontSize: "0.75em", mb: 0.5 }}
            >
              From: Angela Erickson
            </Typography>
            <Typography
              sx={{ fontSize: "0.85em", fontWeight: "bold", mb: 0.5 }}
            >
              Incredible discoveries!
            </Typography>
            <Typography sx={{ fontSize: "0.85em" }}>
              Just found out Material UI & Joy UI and wow...
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography
              sx={{ fontSize: "0.75em", fontWeight: "bold", mb: 0.5 }}
            >
              9:41
            </Typography>
            <Chip label="3" color="success" size="small" />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default DemoMessage;
