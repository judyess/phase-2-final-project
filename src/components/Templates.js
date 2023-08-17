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
    
    function formatHeaders() {
        let headers;
        headers = `${tblHeaders}`; // have to convert to string before I can separate the headers
        headers = headers.split(",").map((item) => item.trim());
        headers.forEach((header)=> {return objs[header]= []});
    }

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
        /* OLD TABLE POST
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
        return(
            <option key={template.id} value={template.id}>{template.id}</option>
        )
    })

    function optionHandler(event) {
        event.preventDefault();
        setSelection(event.target.value);
        mkForm(event.target.value);
    }

    // this function creates the form from given arguments
    function form(title="", headerData=[]) {
        const data = Object.entries(headerData);
        console.log("successfully sent to form");
        console.log(data);
    }

 
    // this function gets specific json obj data and sends it to form()
    // if obj exists then get and send data to form, else, send no args to form.
    function mkForm(selection) {
        if(selection !== "newTemplate"){
            fetch(`http://localhost:3000/custom/${selection}`)
            .then((response) => response.json())
            .then((data)=>{
                console.log(data)
                console.log(data.tblData);
                form({selection}, Object.entries(data.tblData));
            })
        } else{
            form();
        }
    }
    
    return(
        <div>
            <select onChange={optionHandler}>
                <option value="newTemplate"></option>
                {listAll}
            </select>
            {form}
        </div>
    )
}

export default Templates
