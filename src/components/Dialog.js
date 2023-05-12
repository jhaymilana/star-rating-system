import React from "react";
import ReactDOM from "react-dom";

// Googled Creating Modals in React
const Dialog = ({ visible, toggle }) => visible ? ReactDOM.createPortal(
  <div className="modal">
    <div className="modal-pop" role="dialog" aria-modal="true">
      <h3>Hello World</h3>
      <button type="button" onClick={toggle}>Close</button>
    </div>  
    <div className="modal-overlay"></div>    
  </div>, document.body
) : null;

export default Dialog;