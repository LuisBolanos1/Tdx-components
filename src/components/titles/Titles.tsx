import React from "react";
import { createTheme, Typography  } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const theme = createTheme();

theme.typography.h4 = {
    fontFamily: "sans-serif",
    fontWeight: '100',
    fontSize: 'xx-large',
    display: 'block'
    
    
};

export  function TlSubtitle1(props:any){
    return (
        <Typography variant="subtitle1" display="inline"><b>{props.text}</b></Typography>
    )
}

export function TlTitle2(props:any){
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h4" color="#4B286D">{props.text}</Typography>            
        </ThemeProvider>
    )
}