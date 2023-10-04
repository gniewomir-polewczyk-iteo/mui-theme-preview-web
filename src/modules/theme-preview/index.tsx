import { Box, Grid } from '@mui/material'
import DemoPaper from '../../components/demo-paper'
import DemoToggleButtons from '../../components/demo-toggle-buttons'
import DemoCalendar from '../../components/demo-calendar'
import DemoButtons from '../../components/demo-buttons'
import DemoTable from '../../components/demo-table'
import DemoMessage from '../../components/demo-message'
import DemoChip from '../../components/demo-chip'
import DemoTimeline from '../../components/demo-timeline'
import DemoRange from '../../components/demo-range'

const ThemePreview = () => {
  return (
    <div className="theme-preview-wrapper">
      <Grid container spacing={2} sx={{ maxWidth: '900px' }}>
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
        <Grid item xs={6}>
          <Box sx={{ m: 3 }}>
            <DemoMessage />
          </Box>
          <Box sx={{ m: 3 }}>
            <DemoChip />
          </Box>
          <Box sx={{ m: 3 }}>
            <DemoTimeline />
          </Box>
          <Box sx={{ m: 3 }}>
            <DemoRange />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default ThemePreview
