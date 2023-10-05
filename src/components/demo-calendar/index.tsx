import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { Paper } from "@mui/material";

const DemoCalendar = () => {
  return (
    <div className="demo-calendar-wrapper">
      <Paper>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </Paper>
    </div>
  );
};

export default DemoCalendar;
