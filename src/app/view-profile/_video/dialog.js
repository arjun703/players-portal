import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
export default function DialogBox({handleCancel,  handleConfirm}){

    return(

        <Dialog
            fullWidth={true}
            maxWidth='xs'
            TransitionComponent={Transition}
            open={true}
            onClose={handleCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle >
                Delete Video
            </DialogTitle>
            <DialogContent>
                <DialogContentText >
                    Are you sure to delete this item?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button color="error" onClick={handleConfirm} autoFocus> Confirm </Button>
            </DialogActions>
        </Dialog>

    )
        
}