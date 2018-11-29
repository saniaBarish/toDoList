import React from "react";


const ListElements = ({lists}) =>  lists.map(list => {
    return (
        <option 
            key = {list.id} 
            value ={list.id}
            >
            {list.name}
        </option>
    )
    
}
) 

export default ListElements