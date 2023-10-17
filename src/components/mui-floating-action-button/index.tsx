import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NavigationIcon from "@mui/icons-material/Navigation";

const MuiFloatingActionButton = () => {
  return (
    <div className="mui-floating-action-button-wrapper">
      <h1>Floating action button</h1>
      <Box>
        <Fab size="small" color="secondary" sx={{ mr: 1 }}>
          <AddIcon />
        </Fab>
        <Fab size="medium" color="secondary" sx={{ mr: 1 }}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" sx={{ mr: 1 }}>
          <AddIcon />
        </Fab>
      </Box>

      <h1>Floating extended action button</h1>
      <Box>
        <Fab variant="extended" size="small" color="primary" sx={{ mr: 1 }}>
          <NavigationIcon sx={{ mr: 1 }} />
          Extended
        </Fab>
        <Fab variant="extended" size="medium" color="primary" sx={{ mr: 1 }}>
          <NavigationIcon sx={{ mr: 1 }} />
          Extended
        </Fab>
        <Fab variant="extended" color="primary" sx={{ mr: 1 }}>
          <NavigationIcon sx={{ mr: 1 }} />
          Extended
        </Fab>
      </Box>
    </div>
  );
};

export default MuiFloatingActionButton;
