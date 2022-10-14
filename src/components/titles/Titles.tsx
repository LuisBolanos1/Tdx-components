import React from "react";
import { createTheme, Typography  } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { styled } from '@mui/material/styles';


const theme = createTheme();

theme.typography.h4 = {
    fontFamily: "sans-serif",
    fontWeight: '100',
    fontSize: '20',
    display: 'block',
};


export const CustomText = styled(Typography)((props:any) => ({
    color: props.styles.color,
    transform: props.styles.transform,
    fontSize: props.styles.fontSize,
    fontWeight: props.styles.fontWeight,
    fontStyle: props.styles.fontStyle,
    fontFamily: ['"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    margin: props.styles.margin
}));


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

export function TlTitle(props:any){
    return(
        <CustomText {...props}>{props.text}</CustomText>
    )
}