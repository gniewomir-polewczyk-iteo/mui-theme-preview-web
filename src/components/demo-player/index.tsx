import {
  Box,
  Card,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import LoopIcon from "@mui/icons-material/Loop";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShuffleIcon from "@mui/icons-material/Shuffle";

const DemoPlayer = () => {
  return (
    <div className="demo-player-wrapper">
      <Card sx={{ display: "flex", p: 3 }}>
        <CardMedia
          component="img"
          image="/images/birds-of-tokyo.jpg"
          alt="Birds of Tokyo cover"
          sx={{ borderRadius: 2, height: 100, width: 100 }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Stack direction="column" spacing={0}>
            <Typography
              sx={{
                fontSize: "0.85em",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              If This Ship Sinks (I Give In)
            </Typography>
            <Typography sx={{ fontSize: "0.75em", textAlign: "center" }}>
              Birds Of Tokyo
            </Typography>
          </Stack>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <ShuffleIcon sx={{ height: 24, width: 24 }} />
            </IconButton>
            <IconButton>
              <FastRewindIcon sx={{ height: 24, width: 24 }} />
            </IconButton>
            <IconButton>
              <PlayArrowIcon sx={{ height: 48, width: 48 }} />
            </IconButton>
            <IconButton>
              <FastForwardIcon sx={{ height: 24, width: 24 }} />
            </IconButton>
            <IconButton>
              <LoopIcon sx={{ height: 24, width: 24 }} />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default DemoPlayer;
