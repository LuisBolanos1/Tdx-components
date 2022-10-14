import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TlDropdownButton from '../buttons/DropdownButton';
import { ConstantsDropdownButtons } from "../Constants";
import Grid from '@mui/material/Grid';

import Toolbar from '@mui/material/Toolbar';
function testFunction(){
    console.log('Hello world.')
}

const subOptions = [
    { title: 'option1', click: testFunction}, { title: 'option2', click: testFunction }, { title: 'option3', click: testFunction }
]


const pages = [ 
    { buttonTitle: 'Username', options: subOptions }]

export default function TlTopBar(props:any){
    return (
        <AppBar sx={{ bgcolor: '#4B286D', color: '#FFFFFF', height: '40px' }} position="fixed" elevation={0}>
            <Box sx={{ marginTop: 0.4 }}>
            <Container maxWidth='xl'>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'flex-end' }}>
                    <TlDropdownButton buttonTitle={pages[0].buttonTitle} options={pages[0].options} styles={ConstantsDropdownButtons.PurpleButton}></TlDropdownButton>
                    </Box>
            </Container>
            </Box>
        </AppBar>

        )
}