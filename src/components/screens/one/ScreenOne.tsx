import React from 'react'
import TlGrid from '../../grids/Grid'
import TlAppBar from '../../navbar/Appbar'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TlFooter from '../../footer/Footer';
import TlHeaderApplications from '../../headers/AppHeader';

export default function TlScreenOne(props:any){
    return (
        <div>
            <Grid container rowSpacing={4}>
                <Grid item xs={12}>
                    <TlAppBar></TlAppBar>
                </Grid>
                <Grid item xs={12}>
                    <TlHeaderApplications></TlHeaderApplications>                    
                </Grid>
                <Grid item xs={12}>
                    <TlGrid></TlGrid>
                </Grid>
                <Grid item xs={12}>
                    <TlFooter></TlFooter>   
                </Grid>
            </Grid>       
        </div>
    )
}