import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { TlTitle } from '../titles/Titles';
import { ConstantsTypography } from '../Constants';

export default function TlInitialHeader(props:any){
    return (
        <Grid container>
            <Grid sx={{ flexGrow: 1, display: { xs: 'flex', }, justifyContent: 'flex-start' }}>
                <TlTitle text="Welcome to Test Data Orchestrator v1.05" styles={ConstantsTypography.Title}></TlTitle>
            </Grid>
        </Grid>
    )
}