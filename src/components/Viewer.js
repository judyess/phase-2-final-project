import React from "react";

function Viewer(props) {
    let template;

    function selectTemplate(event, selection) {
        event.preventDefault();
        fetch(`http://localhost:3000/custom/${selection}`)
        .then((response) => response.json())
        .then((data)=>{
            template = data;
        })
    }
    

    return(
        <div>
            
        </div>
    )
}