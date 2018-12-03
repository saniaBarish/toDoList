import React from "react"
import {Link} from "react-router-dom"

const CloseHeader = ({listName, list}) => {return(
    <span id={"head"}>
        <Link to={String(list.id)}>{listName}</Link>
    </span>
)}

export default CloseHeader