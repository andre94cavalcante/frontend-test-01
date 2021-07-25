import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // let oneMorePoint = false;

  // const handleAddMoreInput = () => {
  //   this.setState({
  //     oneMorePoint: true,
  //   });
  // };

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
          <div className="point-box">
            <TextField
              id="xValue"
              label="X Value"
              type="text"
              style={{ margin: "10px 5px 0 0 " }}
            />
            <TextField
              id="yValue"
              label="Y Value"
              type="text"
              style={{ margin: "10px 0 0 5px " }}
            />
          </div>
          {/* {this.state.oneMorePoint ? (
            <div className="point-box">
              <TextField
                id="xValue"
                label="X Value"
                type="text"
                style={{ margin: "10px 5px 0 0 " }}
              />
              <TextField
                id="yValue"
                label="Y Value"
                type="text"
                style={{ margin: "10px 0 0 5px " }}
              />
            </div>
          ) : (
            console.log("oneMorePoint false")
          )} */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ margin: "15px 0 0 0 " }}
            onClick={() => {
              console.log("add new point");
              // _onButtonClick();
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
