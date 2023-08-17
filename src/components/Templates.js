import {React, useState} from "react";
import Form from "./Form"

function Templates (props){
    const objs = {};
    const [tblHeaders, setTblHeaders] = useState([]);
    const [templateId, setTemplateId] = useState("");
    const [templateData, setTemplateData] = useState([]);
    const [selection, setSelection] = useState();


    // these two functions were for the table creator idea
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

    // this function is supposed to add new input fields for the user to add more data, needs work
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
        -----------------------------
        This function was for the table app idea. 
        It posts data to the server in this format: (where "objs" is formatted in formatHeaders())
        { custom: [
            {id: title,
            tblData: [
                header: []
                header2: []
            ]}
        ]}
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

 
    // this function gets specific json obj data and sends it to form()
    // if obj exists then get and send data to form, else, send no args to form.
    function mkForm(event) {
        const selection = event.target.value;
        if(selection !== "newTemplate"){
            fetch(`http://localhost:3000/custom/${selection}`)
            .then((response) => response.json())
            .then((data)=>{
                console.log(data)
                console.log(data.tblData);
                setTemplateId(data.id);
                setTemplateData(Object.entries(data.tblData));
            })
        } else{
            setTemplateId("");
            setTemplateData([]);
        }
    }
    
    return(
        <div>
            <select onChange={mkForm}>
                <option value="newTemplate"></option>
                {listAll}
            </select>
            <Form title={templateId} data={templateData} />
        </div>
    )
}

export default Templates
