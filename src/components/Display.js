import {React, useState, useEffect} from "react";


function Display() {
    const [tblData, setTblData] = useState();

    useEffect(()=>{
        fetch("http://localhost:3000/tables")
        .then ((response) => response.json())
        .then ((data) => setTblData(data))
    }, [tblData])

    console.log(tblData);

    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default Display;