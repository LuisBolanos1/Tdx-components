import React from "react";
import './button.css';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';


export const CustomButton = styled(Button)((props:any) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '6px 12px',
    border: '1px solid',
    textDecorationLine: props.styles.decorationLine,
    lineHeight: 1.5,
    backgroundColor: props.styles.backgroundColor,
    borderColor: props.styles.borderColor,
    borderRadius: '100px',
    color: props.styles.myColor,
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
        backgroundColor: props.styles.backgroundHover,
        borderColor: props.styles.borderHover,
        color: props.styles.colorHover,
        boxShadow: 'none',
      }
   }));

export default function TlButton(props:any){
    return(
        <CustomButton variant="contained"  {...props} disableRipple>{props.label}</CustomButton>
    )
}


