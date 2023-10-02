import { Grid } from '@mui/material'
import DemoPaper from './components/demo-paper'
import DemoButtons from './components/demo-buttons'
import DemoCalendar from './components/demo-calendar'
import DemoButtons2 from './components/demo-buttons-2'
import DemoTable from './components/demo-table'

const ThemePreview = () => {
  return (
    <div className="theme-preview-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DemoPaper />
          <DemoButtons />
          <DemoCalendar />
          <DemoButtons2 />
          <DemoTable />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  )
}

export default ThemePreview
