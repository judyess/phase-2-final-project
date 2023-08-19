import {React, useEffect, useState} from "react";
import Form from "./Form"

function Templates (props){
    const objs = {};
    const [tblHeaders, setTblHeaders] = useState([]);
    const [templateId, setTemplateId] = useState("");
    const [templateData, setTemplateData] = useState([]);
    const [achange, setChange] = useState(false);


    // these two functions were for the table creator idea
    function handleHeaders(event) {
        event.preventDefault();
        setTblHeaders(`${event.target.value}`);
    }

    function trackChange(){
        setChange((change)=>!change);
    }

    useEffect(()=>{}, [achange, templateId])

    //this function creates an array by separating a string at the comma, and trims the spaces
    // then creates a new keys in an object
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
       

    const listAll = props.data.map((template) =>{
        return(
            <option key={template.id} value={template.id}>{template.id}</option>
        )
    })


 
    // this function gets specific json obj data and sends it to form()
    // if obj exists then get and send data to form, else, send no args to form.
    function mkForm(event) {
        const selection = event.target.value;
        if(selection !== "newTemplate"){
            fetch(`http://localhost:3000/custom/${selection}`)
            .then((response) => response.json())
            .then((objData)=>{
                const strData = JSON.stringify(objData);
                console.log(objData)
                console.log(`objData.data + ${strData}`);
                console.log(Object.entries(objData.data));
                setTemplateId(objData.id);
                setTemplateData(objData.data);
            })
        } else{
            setTemplateId("");
            setTemplateData([]);
        }
    }

    function postChanges(obj, title){
        console.log(obj);
        console.log(title);
        fetch(`http://localhost:3000/custom/${title}`,{
            method: "PUT",
            body: JSON.stringify({
                data:obj}),
            headers: {"Content-type": "application/JSON; charset=UTF-8"}
        }) .then((response) => response.json())
        .then((newData) => {console.log(newData); setTemplateData((oldData)=>oldData = newData.data)});
    }
    
    return(
        <div>
            <select onChange={mkForm}>
                <option value="newTemplate"></option>
                {listAll}
            </select>
            <Form title={templateId} data={templateData} change={postChanges} />
        </div>
    )
}

export default Templates
