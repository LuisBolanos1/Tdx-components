import React from "react";
import TextField from "@mui/material/TextField"
import TlTitleTextField from "./TitleTextField";
import { alpha, styled } from '@mui/material/styles';


export function TlTextField(props:any){
    return(
            <TextField sx={{ width: { sm: 400, md: 300 }, 
                            "& .MuiInputBase-root": {
                                height: 45
                            }, 
                            border: '1px solid black', borderRadius: 1} 
            } {...props} ></TextField>
    )
}

export function TlTextFieldTitle(props:any){
    return(
        <div>
            <TlTitleTextField title={props.title}></TlTitleTextField><br/> 
            <TlTextField placeholder={props.placeholder}></TlTextField>

        </div>    
    )
}
