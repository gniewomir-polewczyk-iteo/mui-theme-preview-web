import { Avatar, Box, LinearProgress, Paper, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CodeIcon from "@mui/icons-material/Code";

const DemoPaper = () => {
  return (
    <div className="demo-paper-wrapper">
      <Paper sx={{ bgcolor: "primary.main", p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <AccessTimeIcon
            sx={{ color: "primary.contrastText", mr: 1, width: "16px" }}
          />
          <Typography
            sx={{ color: "primary.contrastText", fontSize: "0.75em" }}
          >
            March 25th
          </Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
          <CodeIcon sx={{ color: "primary.contrastText" }} />
          <Typography
            sx={{ color: "primary.contrastText", fontSize: "1.15em" }}
          >
            Customize every button and chip instance primary color
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Avatar
            alt="Avatar"
            src="/images/avatar/1.jpg"
            sx={{ border: "2px solid white", mr: 1 }}
          />
          <div>
            <Typography
              sx={{ color: "primary.contrastText", fontSize: "0.75em" }}
            >
              Assigned to
            </Typography>
            <Typography
              sx={{ color: "primary.contrastText", fontSize: "0.85em" }}
            >
              Michael Scott
            </Typography>
          </div>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "80%" }}>
            <LinearProgress
              variant="determinate"
              value={60}
              sx={{
                ".MuiLinearProgress-bar": {
                  backgroundColor: "primary.contrastText",
                },
              }}
            />
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "primary.contrastText",
              fontSize: "0.85em",
              textAlign: "center",
              width: "20%",
            }}
          >
            60%
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default DemoPaper;
