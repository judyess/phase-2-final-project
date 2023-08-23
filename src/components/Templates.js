import {React, useEffect, useState} from "react";
import Form from "./Form"

function Templates (props){
    const objs = {};
    const [templateId, setTemplateId] = useState("");
    const [templateData, setTemplateData] = useState([]);
    const [selectedObj, setSelectedObj] = useState();

    useEffect((x) => {
        console.log("used effect");
    }, selectedObj);

    //console.log(props.data[1].id);

    const listTemplates = props.data.map((template) =>{

        return(
            <option key={template.id} value={template.id}>{template.id}</option>
        )
    })

    /* this function looks for an object using it's ID in the URI. if the URL is valid, then the object exists and its data gets passed. if the URL doesn't exist, then empty values are passed instead. */
/*    function mkForm(event) {
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
            })} else {setTemplateId("");setTemplateData([]);}}
*/

        function dropdownHandler(event) {
            console.log("mkForm")
            setSelectedObj(event.target.value);
        }

    // this function takes 2 arguments, the objects id to be used in the URI and it's properties
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
    } //
    
    return(
        <div>
            <select onChange={dropdownHandler}>
                <option value="newTemplate"></option>
                {listTemplates}
            </select>
            <Form title={templateId} data={templateData} change={postChanges} />
            <p> although the input fields don't update when the template changes, they also don't represent the actual value</p>
            <p> Make input field text always match actual value</p>
        </div>
    )
}

export default Templates
