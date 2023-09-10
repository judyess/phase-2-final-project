import {React, useEffect, useState} from "react";
import Form from "./Form"

function Editor (){
    const [option, setOption] = useState("");
    const [selections, setSelections] = useState([]);
    const [serverData, setData] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/custom/${option}`)
        .then((response)=>response.json())
        .then((arrayOfServerData) => {
          JSON.stringify(arrayOfServerData);
          if(Array.isArray(arrayOfServerData)) {
            setSelections(arrayOfServerData);
          } else {
            setData(arrayOfServerData.data);
            setTitle(arrayOfServerData.id);
          }
            }); 
        return(reset());
    },  [option]);

    function reset(){
        setTitle("");
        setData([]);
    }

    function dropdownHandler(event) {
        setOption(event.target.value);
        setTitle(event.target.value);
    }

    function postData(objData) {
        fetch(`http://localhost:3000/custom/${title}`, {
            method: "PUT",
            body: JSON.stringify({
                data:objData}),
            headers: {"Content-type": "application/JSON; charset=UTF-8"}
        }).then((response) => response.json())
        .then((newData)=> console.log(newData));
        reset();
    }

    const dropdown = selections.map((object) =>{
        return(
            <option key={object.id} value={object.id}>{object.id}</option>
     )})


    return(
        <div>
            <p>Select the template you would like to edit.</p>
            <label>Template: </label>
            <select id="titles" onChange={dropdownHandler}>
                <option value=""></option>
                {dropdown}
            </select>
            <br/>
            <Form title={title} data={serverData} func={postData}/>
        </div>
    )
}

export default Editor