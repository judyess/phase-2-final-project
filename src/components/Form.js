import {React, useState, useEffect} from "react";

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
        //const arr = [headers.forEach((header)=> header[""])];
        setTblHeaders(`${event.target.value}`);
    }

    function headerData(event){
        event.preventDefault();
    }

    function getFormData(event) {
        event.preventDefault();
        console.log(tblTitle);
        console.log(tblHeaders);
    }
    
    function formatHeaders(event) {
        event.preventDefault();
        let headers = `${tblHeaders}`; // have to convert to string before I can separate the headers
        headers = headers.split(",").map((item) => item.trim());
        
        //let count = 0;
        const headerObjs =  headers.forEach((header)=> {return objs[header]= []});
        console.log(objs);
        setTblHeaders(objs);
        console.log(tblHeaders);
    }

    function post(event) { 
        event.preventDefault();   
        fetch("http://localhost:3000/tables", {
            method: "POST",
            body: JSON.stringify({
                "id" : `${tblTitle}`
            }),
            headers: {"content-type": "application/json; charset=UTF-8"}
        })
        .then((response)=>response.json())
        .then((data) => console.log(data))

    }
        
    
    return(
        <div>
                <form onSubmit={formatHeaders}>
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
