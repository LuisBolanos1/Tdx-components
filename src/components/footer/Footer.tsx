import React from "react";
import Container from "@mui/material/Container";
import  Grid from "@mui/material/Grid";
import Link from "@mui/material/Link"
import Box from "@mui/material/Box";

export default function Footer(props:any){
    return <footer>
        <Box px={{ xs: 3, sm: 10 }} 
             py={{ xs: 5, sm: 3 }} 
             bgcolor="#414547" color="white" fontFamily="Arial">
        <Container maxWidth="lg">
            <Box textAlign="center" >
                TELUS International &reg; {new Date().getFullYear()}
            </Box>
        </Container>

        </Box>
    </footer>
}