import React, { useState } from "react";
import ReactDOM from "react-dom";
import TextField from "@material-ui/core/TextField";

export default function NewPoint() {
  return (
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
  );
}
