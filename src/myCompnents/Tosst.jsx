import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";

function Tosst() {
  return (
    <div>
      {/* Your app components */}
      <Form />

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
}

export default Tosst;