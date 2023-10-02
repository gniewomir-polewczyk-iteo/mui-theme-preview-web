import { Grid } from '@mui/material'
import DemoPaper from './components/demo-paper'
import DemoButtons from './components/demo-buttons'
import DemoCalendar from './components/demo-calendar'

const ThemePreview = () => {
  return (
    <div className="theme-preview-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DemoPaper />
          <DemoButtons />
          <DemoCalendar />
        </Grid>
        <Grid item xs={6}>
          xxx
        </Grid>
      </Grid>
    </div>
  )
}

export default ThemePreview
