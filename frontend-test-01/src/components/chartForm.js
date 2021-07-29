import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NewPoint from "./newPoint";

export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const [countPoints, setCountPoints] = useState(1);

  const addNewPoint = () => {
    setCountPoints(countPoints + 1);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCountPoints(1);
  };

  return (
    <div>
      <Fab color="default" aria-label="add" onClick={handleClickOpen}>
        <AddIcon style={{ color: "white" }} />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <TextField
            autoFocus
            id="widgetTitle"
            label="Widget Title"
            type="text"
            fullWidth
          />
          {[...Array(countPoints)].map(() => {
            return <NewPoint></NewPoint>;
          })}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ margin: "15px 0 0 0 " }}
            onClick={() => {
              console.log(countPoints);
              addNewPoint();
            }}
          >
            <AddIcon style={{ color: "white" }}></AddIcon>
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
