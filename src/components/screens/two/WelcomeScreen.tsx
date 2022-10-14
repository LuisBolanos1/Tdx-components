import React from 'react'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TlAppBar from '../../navbar/Appbar';
import TlInitialHeader from '../../headers/InitialHeader';
import TlGrid from '../../grids/Grid';
import { TlTitle } from '../../titles/Titles';
import { TlTextField } from '../../textfield/TextField';
import { TlItem } from '../../grids/Item';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ConstantsTypography, DarkTheme } from '../../Constants';
import TlFooter from '../../footer/Footer';

export default function TlWelcomeScreen(props:any){
    return (
        <div>
            <ThemeProvider theme={DarkTheme}>
            <CssBaseline/>
            <Grid container rowSpacing={4}>
                <Grid item xs={12}>
                    <TlAppBar/>
                </Grid>
                <Grid item xs={12}>
                    <TlInitialHeader></TlInitialHeader>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ flewGrow:1, marginLeft: 1, marginRight: 1 }}>
                        <TlItem>
                            <Box sx={{  marginTop: 4, marginLeft: 2, marginBottom: 4, marginRight:2}}>
                                <Grid container rowSpacing={3}>
                                    <Grid sx={{ justifyContent: 'flex-start' }} >
                                        <TlTitle text="What's new?" styles={ConstantsTypography.Title2}/><br></br>
                                    </Grid>
                                </Grid>
                            </Box>                        
                        </TlItem>
                    </Box>

                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ flewGrow:1, marginLeft: 1, marginRight: 1 }}>
                        <TlItem>
                            <Box sx={{  marginTop: 4, marginLeft: 2, marginBottom: 4, marginRight:2}}>
                                <Grid container rowSpacing={3}>
                                    <Grid sx={{ justifyContent: 'flex-start' }} >
                                        <TlTitle text="You have" styles={ConstantsTypography.Title2}/><br></br>
                                    </Grid>
                                </Grid>
                            </Box>                        
                        </TlItem>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ flewGrow:1, marginLeft: 1, marginRight: 1 }}>
                        <TlItem>
                            <Box sx={{  marginTop: 4, marginLeft: 2, marginBottom: 4, marginRight:2}}>
                                <Grid container rowSpacing={3}>
                                    <Grid sx={{ justifyContent: 'flex-start' }} >
                                        <TlTitle text="Last login" styles={ConstantsTypography.Title2}/><br></br>
                                    </Grid>
                                </Grid>
                            </Box>                        
                        </TlItem>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <TlFooter></TlFooter>
                </Grid>
            </Grid>            

            </ThemeProvider>
        </div>
    )
}