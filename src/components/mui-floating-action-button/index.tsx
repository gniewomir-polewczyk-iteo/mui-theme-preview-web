import AddIcon from '@mui/icons-material/Add'
import NavigationIcon from '@mui/icons-material/Navigation'
import { Box, Fab } from '@mui/material'

const MuiFloatingActionButton = () => {
  return (
    <div className="mui-floating-action-button-wrapper">
      <h1>Floating action button</h1>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab size="small" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>

      <h1>Floating action button</h1>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab variant="extended" size="small" color="primary">
          <NavigationIcon sx={{ mr: 1 }} />
          Extended
        </Fab>
        <Fab variant="extended" size="medium" color="primary">
          <NavigationIcon sx={{ mr: 1 }} />
          Extended
        </Fab>
        <Fab variant="extended" color="primary">
          <NavigationIcon sx={{ mr: 1 }} />
          Extended
        </Fab>
      </Box>
    </div>
  )
}

export default MuiFloatingActionButton
