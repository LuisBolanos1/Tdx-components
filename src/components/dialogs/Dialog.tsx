import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { TlTitle, TlTitle2 } from "../titles/Titles";
import { TlTextFieldTitle } from "../textfield/TextField";
import { TlComboBox } from "../combobox/ComboBox";
import { Grid, Box } from "@mui/material";
import TlButton from "../buttons/Button";
import { ConstantsButtons, ConstantsTypography } from "../Constants";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TlChipBox from "../combobox/ChipBox";


const data = [
  {name: 'Test', age: 12},
  {name: 'Test1', age: 12},
  {name: 'Test2', age: 12},
  {name: 'Test3', age: 12},
  {name: 'Test4', age: 12},
  {name: 'Test5', age: 12},
  {name: 'Test6', age: 12},
  {name: 'Test7', age: 12},
  {name: 'Test8', age: 12},
  {name: 'Test9', age: 12},
  {name: 'Test10', age: 12},
]

export interface TlCloseButtonProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const TlCloseButton = (props: TlCloseButtonProps) => {
  const { children, onClose, ...other} = props;

  return (
    <DialogTitle sx = {{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick = {onClose}
          sx = {{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
            <CloseIcon/>
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

export function TlDialog(props:any){
    const[open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Open alert dialog
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <TlCloseButton id="" onClose={handleClose}/>
            <Box sx={{  marginLeft: 3, marginRight: 6,  marginBottom: 3 }}>

              <DialogTitle id="alert-dialog-title">
                <TlTitle text="Test title 2" styles={ConstantsTypography.Subtitle}></TlTitle>
              </DialogTitle>
              <DialogContent>
                <Grid container rowSpacing={1}>
                  <Grid item xs={12}>
                    <TlTextFieldTitle title="Stack" placeholder="Stack"></TlTextFieldTitle>
                  </Grid>
                 <Grid item xs={12}>
                    {/* <TlComboBox data={data}></TlComboBox> */}
                    <TlChipBox data={data}></TlChipBox>
                  </Grid>
                  <Grid item xs={3}>
                    <Box sx={{ marginTop: 3 }}>
                    <TlButton label="Proceed" styles={ConstantsButtons.SuccessButton} ></TlButton>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Box sx={{ marginTop: 3 }}>
                      <TlButton label="Cancel" styles={ConstantsButtons.CancelButon} onClick={handleClose}></TlButton>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
            </Box>
          </Dialog>
        </div>
      );

}