import React from 'react'

const Button = (props) => {
  const classNameText = props.red ? "btn btn-danger" : "btn custom-button mt-3";
    return(
        <button onClick={props.onClick} className={classNameText} >
        {props.text}
      </button>
    )
}

export default Button
