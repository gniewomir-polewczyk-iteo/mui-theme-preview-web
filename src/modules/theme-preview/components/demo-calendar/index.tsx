import { Paper } from '@mui/material'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const DemoCalendar = () => {
  return (
    <div className="demo-calendar-wrapper">
      <Paper>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </Paper>
    </div>
  )
}

export default DemoCalendar
