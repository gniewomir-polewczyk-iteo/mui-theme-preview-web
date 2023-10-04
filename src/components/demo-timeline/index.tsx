import { Box, Chip, Paper, Stack, Typography } from '@mui/material'
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
      <Paper sx={{ p: 2 }}>
        <Box>
          <Stack direction="row" spacing={2}>
            <Chip label="1" color="primary" variant="outlined" size="small" />
            <Typography sx={{ fontSize: '0.8em' }}>
              Install one of our production-ready libraries to get your next app
              started inevitably successful:
            </Typography>
          </Stack>
        </Box>
        <Box>
          {' '}
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
                pr: 3,
              },
            }}
          >
            <TimelineItem sx={{ minHeight: 48 }}>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: 'primary.main' }} />
                <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ fontSize: '0.8em' }}>
                Material UI
              </TimelineContent>
            </TimelineItem>
            <TimelineItem sx={{ minHeight: 48 }}>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: 'primary.main' }} />
                <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ fontSize: '0.8em' }}>
                Base UI
              </TimelineContent>
            </TimelineItem>
            <TimelineItem sx={{ minHeight: 0 }}>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: 'primary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ fontSize: '0.8em' }}>
                Joy UI
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Paper>
    </div>
  )
}

export default DemoTimeline
