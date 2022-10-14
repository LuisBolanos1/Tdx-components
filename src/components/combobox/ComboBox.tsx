import React from "react";
import { TextField } from "@mui/material";
import { TlTextField } from "../textfield/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TlTitleTextField from "../textfield/TitleTextField";




export function TlComboBox(props:any){
    const data = props.data
    return(
        <div>
            <TlTitleTextField title="Combo test"></TlTitleTextField><br/>
            <Autocomplete
                disablePortal
                options={data.map((option:any) => option.name)}
                sx={{ width: 1, 
                    "& .MuiInputBase-root": {
                        height: 45
                    },}}
                renderInput={(params) => <TlTextField  placeholder="Test" {...params}/>}
            />
        </div>
    )
}

