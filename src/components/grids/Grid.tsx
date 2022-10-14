import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TlTitle, TlTitle2 } from '../titles/Titles';
import TlTable from '../table/Table';
import { TlTextField } from '../textfield/TextField';
import { TlItem } from './Item';
import { ConstantsButtons, ConstantsTypography, DarkTheme } from '../Constants';
import TlButton from '../buttons/Button';


function testButton(){
    console.log('Hello world')
}

const functionsButtonStack = { click: testButton }

const rows2 = [
    {stack: 'Odyssey', applications: 'Saleforce' , action: 3},
    {stack: 'Merlin', applications: 'Order hub' , action: 3},
    {stack: 'Lorem ipsum', applications: 'Lorem ipsum is simply dummy text' , action: 3},
    {stack: 'Lorem ipsum', applications: 'Lorem ipsum is simply dummy text' , action: 3},
]
const titles2 = [ 'stack', 'applications', 'action' ]

export default function TlGrid(props:any){
    return (
        <ThemeProvider theme={DarkTheme}>
            <CssBaseline/>
            <Box sx={{ flewGrow:1, marginLeft: 1, marginRight: 1 }}>
                <Grid container rowSpacing={3}>

                    <Grid item xs={12}>
                        <TlItem>
                            <Box sx={{  marginTop: 4, marginLeft: 2, marginBottom: 4, marginRight:2}}>
                                <Grid container rowSpacing={4}>
                                    <Grid sx={{ flexGrow: 1, display: { xs: 'flex', }, justifyContent: 'flex-start' }} xs={12}>
                                        <TlTitle text="Application Stacks" styles={ConstantsTypography.Title}/>
                                    </Grid>
                                    <Grid sx={{  justifyContent: 'flex-start' }}>
                                        <Box sx={{ marginTop: 3, marginBottom: 2 }}>
                                            <TlButton label="New Stack" styles={ConstantsButtons.FirstButton} onClick={testButton}></TlButton>
                                        </Box>
                                    </Grid>
                                    <Grid sx={{ flexGrow: 1, display: { xs: 'flex', }, justifyContent: 'flex-end' }}>
                                        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                                            <TlTextField placeholder="Type to filter..."></TlTextField>
                                        </Box>
                                    </Grid>
                                    <Grid xs={12}>
                                        <TlTable rows={rows2} titles={titles2}></TlTable>
                                    </Grid>
                                </Grid>
                            </Box>                        
                        </TlItem>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}