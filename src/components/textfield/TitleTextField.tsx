import React from "react";
import { Typography } from "@mui/material";

export default function TlTitleTextField(props:any){
    return (
        <Typography variant="subtitle1" display="inline"><b>{props.title}</b></Typography>
    )
}