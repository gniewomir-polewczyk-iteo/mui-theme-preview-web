import { Grid, Paper, Typography } from '@mui/material'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab'
import { timelineItemClasses } from '@mui/lab/TimelineItem'

const DemoTimeline = () => {
  return (
    <div className="demo-timeline-wrapper">
      <Paper>
        <Grid container>
          <Grid item xs={2}>
            1
          </Grid>
          <Grid item xs={10}>
            <Typography>
              Install one of our production-ready libraries to get your next app
              started inevitably successful:
            </Typography>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Material UI</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Base UI</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Joy UI</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default DemoTimeline
