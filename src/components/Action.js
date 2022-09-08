import React from "react";
import '../styles/action.css'

const Action = (props) => {
  return (
    <div className="action">
      <button className="btn">{props.name}</button>
    </div>
  )
}

export default Action;