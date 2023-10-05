import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FontDownloadIcon from '@mui/icons-material/FontDownload'
import FolderIcon from '@mui/icons-material/Folder'

const DemoAccordion = () => {
  return (
    <div className="demo-accordion-wrapper">
      <Paper>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ mr: 1 }}>
                <FontDownloadIcon />
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.95em', fontWeight: 'bold' }}>
                  Typography
                </Typography>
                <Typography sx={{ fontSize: '0.85em' }}>
                  Fonts used in this website revamp project.
                </Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: '0.85em' }}>
              Tag line headings (h1, h2) use General Sans, whereas the rest of
              the website use IBM Plex Sans.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ mr: 1 }}>
                <FolderIcon />
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.95em', fontWeight: 'bold' }}>
                  Hacks
                </Typography>
                <Typography sx={{ fontSize: '0.85em' }}>
                  Some of our secrets to make this website.
                </Typography>
              </Box>
            </Box>
          </AccordionSummary>
        </Accordion>
      </Paper>
    </div>
  )
}

export default DemoAccordion
