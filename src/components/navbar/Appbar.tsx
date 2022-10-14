import React from 'react';
import TlNavbar from './Navbar';
import TlTopBar from './Topbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const darkTheme = createTheme({
    palette: {
      background: {
        default: "#F5F5F5"
      }
    }
  });

export default function TlAppBar(props:any){
    return(
          <Stack spacing={5} sx={{ flexGrow: 1 }}>
              <TlTopBar></TlTopBar>
              <Toolbar/>  
              <TlNavbar></TlNavbar>       
          </Stack>


    )
}