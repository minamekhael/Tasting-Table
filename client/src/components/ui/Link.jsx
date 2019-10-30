import React from 'react'
import { Link as RouterLink } from "react-router-dom";


const Link = (props) => {
        return (
          <RouterLink to={props.path} className="btn custom-button mt-3">
            {props.text}
          </RouterLink>
        )
}

export default Link
