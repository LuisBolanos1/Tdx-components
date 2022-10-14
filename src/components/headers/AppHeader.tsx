import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TlButton from '../buttons/Button';
import { ConstantsButtons } from '../Constants';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import TerminalIcon from '@mui/icons-material/Terminal';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';

export default function TlHeaderApplications(props:any){
    return (
        <Grid container>
                <Grid sx={{ flexGrow: 1, display: { xs: 'flex', }, justifyContent: 'flex-end' }}>
                    <Box sx={{ marginRight: 1, marginLeft: 1 }} >
                        <TlButton label="Start Virtualization" endIcon={<SplitscreenIcon/>} styles={ConstantsButtons.FirstButton}></TlButton>
                    </Box>
                    <Box sx={{ marginRight: 1, marginLeft: 1 }} >
                        <TlButton label="New Test Flow" endIcon={<TerminalIcon/>} styles={ConstantsButtons.FirstButton}></TlButton>
                    </Box>
                    <Box sx={{ marginRight: 1, marginLeft: 1 }} >
                        <TlButton label="Setup API" endIcon={<CrisisAlertIcon/>} styles={ConstantsButtons.FirstButton}></TlButton>
                    </Box>
                </Grid>
            </Grid>

    )

}


