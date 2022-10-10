import React from "react";
import './button.css';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';


export const TlButton = styled(Button)((props:any) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: props.backgroundColor,
    borderColor: props.borderColor,
    borderRadius: '20px',
    color: props.myColor,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: props.backgroundHover,
        borderColor: props.borderHover,
        color: props.colorHover,
        boxShadow: 'none',
      }
   }));

export default function CustomButton(props:any){
    return(
        <TlButton variant="contained"  {...props} disableRipple>{props.label}</TlButton>
    )
}


