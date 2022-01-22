import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton } from '@mui/material'
import Controls from "./controls/Controls";
import NotListedLocationIcon from '@mui/material/icons/NotListedLocation';

 
export default function ConfirmDialog(props) {

    const { confirmDialog, setConfirmDialog } = props; 

    return (
        <Dialog open={confirmDialog.isOpen}>
            <DialogTitle >
                <IconButton disableRipple>
                    <NotListedLocationIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent >
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions >
                <Controls.Button
                    text="No"
                    color="default"
                    onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} />
                <Controls.Button
                    text="Yes"
                    color="secondary"
                    onClick={confirmDialog.onConfirm} />
            </DialogActions>
        </Dialog>
    )
}
