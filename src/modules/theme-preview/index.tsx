import { Box, Grid } from '@mui/material'
import DemoPaper from './components/demo-paper'
import DemoToggleButtons from './components/demo-toggle-buttons'
import DemoCalendar from './components/demo-calendar'
import DemoButtons from './components/demo-buttons'
import DemoTable from './components/demo-table'

const ThemePreview = () => {
  return (
    <div className="theme-preview-wrapper">
      <Grid container spacing={2} sx={{ maxWidth: '820px' }}>
        <Grid item xs={6}>
          <Box sx={{ m: 3 }}>
            <DemoPaper />
          </Box>
          <Box sx={{ m: 3 }}>
            <DemoToggleButtons />
          </Box>
          <Box sx={{ m: 3 }}>
            <DemoCalendar />
          </Box>
          <Box sx={{ m: 3 }}>
            <DemoButtons />
          </Box>
          <Box sx={{ m: 3 }}>
            <DemoTable />
          </Box>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  )
}

export default ThemePreview
