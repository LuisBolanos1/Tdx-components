import React from "react";
import TextField from "@mui/material/TextField"
import TlTitleTextField from "./TitleTextField";
import { alpha, styled } from '@mui/material/styles';


//border: '1px solid black', borderRadius: 1

export function TlTextField(props:any){
    return(
            <TextField sx={{ width: 1, 
                            "& .MuiInputBase-root": {
                                height: 45
                            },
                            border: '1px solid #676E73',
                            borderRadius: '4px',
                            background: '#FFFFFF',} 
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
