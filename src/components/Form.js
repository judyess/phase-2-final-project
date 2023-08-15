import {React, useState} from "react";
//import Display from "./Display"

function Form (){
    const objs = {};
    const [tblTitle, setTblTitle] = useState("new-table");
    const [tblHeaders, setTblHeaders] = useState([]);

    function handleTitle(event) {
        event.preventDefault();
        setTblTitle(event.target.value);
    }

    function handleHeaders(event) {
        event.preventDefault();
        setTblHeaders(`${event.target.value}`);
    }
    
    function formatHeaders() {
        let headers;
        headers = `${tblHeaders}`; // have to convert to string before I can separate the headers
        headers = headers.split(",").map((item) => item.trim());
        headers.forEach((header)=> {return objs[header]= []});
    }

    function post(event) { 
        event.preventDefault(); 
        formatHeaders();  
        fetch("http://localhost:3000/tables", {
            method: "POST",
            body: JSON.stringify({
                "id" : `${tblTitle}`,
                "tblData" : objs
            }),
            headers: {"content-type": "application/json; charset=UTF-8"}
        }).then((response) => response.json())
        .then((data) => console.log(data))
    }
    
    return(
        <div>
                <form onSubmit={post}>
                    <label>Title : </label>
                    <input type="text" onChange={handleTitle}></input>
                    <label>Headers : </label>
                    <input type="text" onChange={handleHeaders}></input>
                    <button type="submit">submit</button>
                </form>
        </div>
    )
}

export default Form;
