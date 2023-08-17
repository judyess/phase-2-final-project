import {React, useState} from "react";
//import Display from "./Display"

function Templates (props){
    const objs = {};
    const [tblTitle, setTblTitle] = useState("new-table");
    const [tblHeaders, setTblHeaders] = useState([]);
    const [templateId, setTemplateId] = useState("");
    const [templateData, setTemplateData] = useState([]);
    const [selection, setSelection] = useState();

    function handleTitle(event) {
        event.preventDefault();
        setTblTitle(event.target.value);
    }

    function handleHeaders(event) {
        event.preventDefault();
        setTblHeaders(`${event.target.value}`);
    }
    
    function handleHeaderData(event) {

    }
    
    function formatHeaders() {
        let headers;
        headers = `${tblHeaders}`; // have to convert to string before I can separate the headers
        headers = headers.split(",").map((item) => item.trim());
        headers.forEach((header)=> {return objs[header]= []});
    }

    function post(event) { 
        event.preventDefault();
        if (selection === "newTemplate"){
            console.log("new Template");
        }
        else {

        }}

        function addMore(){
            return(
                <div>
                    <input type="text" class="header"/>
                    <select>
                        <option onClick={console.log("add more")}>Add More</option>
                    </select>
                    
                </div>
                
            )
        }
        /* 
        formatHeaders();  
        fetch("http://localhost:3000/custom", {
            method: "POST",
            body: JSON.stringify({
                "id" : `${tblTitle}`,
                "tblData" : objs
            }),
            headers: {"content-type": "application/json; charset=UTF-8"}
        }).then((response) => response.json())
        .then((data) => console.log(data))
        */
       

    const listAll = props.data.map((template) =>{
        //console.log(template);
        return(
            <option key={template.id} value={template.id}>{template.id}</option>
        )
        
    })

    function optionHandler(event) {
        event.preventDefault();
        setSelection(event.target.value);

    }
    function get() {
        fetch(`http://localhost:3000/custom/${selection}`)
                .then((response)=>response.json())
                .then((data) => {
                    setTemplateId(data.id);
                    setTemplateData(data.tblData); //returns all headers and their data
                })
    }
    
    return(
        <div>
            <select onChange={optionHandler}>
                <option value="newTemplate"></option>
                {listAll}
            </select>
            <form onSubmit={post}>
                    <label>Title : </label>
                    <input type="text" onChange={handleTitle}></input>

                            <label>Headers : </label>
                            <input type="text" value={templateId} onChange={handleHeaders} />
                            <input type="text" value={templateData} onChange={handleHeaderData} />

                    
                    <button type="submit">submit</button>  
            </form>
        </div>
    )
}

export default Templates
