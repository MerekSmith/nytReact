import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "center", width:300, height:100, marginBottom: 10 }} className="btn btn-success">
    {props.children}
  </button>
);
