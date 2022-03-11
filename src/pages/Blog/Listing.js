import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Listing() {
  
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <Box>
            <Button variant="contained"> Search</Button>
            <Button variant="contained" className='m2'>  Reset</Button>
            <Button variant="contained">  <Link to={'/addblog'}><i class="bi bi-dash-square-fill"></i> Add Blog</Link></Button>
            
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                <TableCell>#</TableCell>
                  <TableCell>Photo</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"> 1 </TableCell>
                  <TableCell component="th" scope="row"> name </TableCell>
                  <TableCell align="center">calories</TableCell>
                  <TableCell align="center">fat</TableCell>
                  <TableCell align="center">
                    <Button variant="text"><VisibilityIcon/></Button>
                    <Button variant="text">  <EditIcon/></Button>
                    <Button variant="text"><DeleteIcon/></Button>
                  </TableCell>
                </TableRow>
                <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"> 2 </TableCell>
                  <TableCell component="th" scope="row"> name </TableCell>
                  <TableCell align="center">calories</TableCell>
                  <TableCell align="center">fat</TableCell>
                  <TableCell align="center">
                    <Button variant="text"><VisibilityIcon/></Button>
                    <Button variant="text">  <EditIcon/></Button>
                    <Button variant="text"><DeleteIcon/></Button>
                  </TableCell>
                </TableRow>
                <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"> 3 </TableCell>
                  <TableCell component="th" scope="row"> name </TableCell>
                  <TableCell align="center">calories</TableCell>
                  <TableCell align="center">fat</TableCell>
                  <TableCell align="center">
                    <Button variant="text"><VisibilityIcon/></Button>
                    <Button variant="text">  <EditIcon/></Button>
                    <Button variant="text"><DeleteIcon/></Button>
                  </TableCell>
                </TableRow>
                <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"> 4 </TableCell>
                  <TableCell component="th" scope="row"> name </TableCell>
                  <TableCell align="center">calories</TableCell>
                  <TableCell align="center">fat</TableCell>
                  <TableCell align="center">
                    <Button variant="text"><VisibilityIcon/></Button>
                    <Button variant="text">  <EditIcon/></Button>
                    <Button variant="text"><DeleteIcon/></Button>
                  </TableCell>
                </TableRow>
                <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"> 5 </TableCell>
                  <TableCell component="th" scope="row"> name </TableCell>
                  <TableCell align="center">calories</TableCell>
                  <TableCell align="center">fat</TableCell>
                  <TableCell align="center">
                    <Button variant="text"><VisibilityIcon/></Button>
                    <Button variant="text">  <EditIcon/></Button>
                    <Button variant="text"><DeleteIcon/></Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
    
  )
}
