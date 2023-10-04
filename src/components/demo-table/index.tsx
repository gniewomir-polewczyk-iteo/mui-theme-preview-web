import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'

function createData(name: string, size: number) {
  return { name, size }
}

const rows = [
  createData('Dependencies', 44),
  createData('Pictures & videos', 134),
  createData('Source files', 200),
  createData('Typography', 125.6),
]

const DemoTable = () => {
  return (
    <div className="demo-table">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                Name
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                Size
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <FolderIcon
                      sx={{ color: 'primary.main', mr: 1, width: '16px' }}
                    />
                    {row.name}
                  </Box>
                </TableCell>
                <TableCell align="right">{row.size} MB</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DemoTable
