import {React, useEffect, useState} from "react";
import Form from "./Form"

function Templates (){
    const [option, setOption] = useState("");
    const [select, setSelect] = useState([]);
    const [serverData, setData] = useState([]);

    const [title, setTitle] = useState("");

    console.log("Component restart");

    useEffect(() => {
        console.log("useEffect");
        fetch(`http://localhost:3000/custom/${option}`)
        .then((response)=>response.json())
        .then((arrayOfServerData) => {
          console.log("fetched");
          JSON.stringify(arrayOfServerData);
          console.log(arrayOfServerData);
          if(Array.isArray(arrayOfServerData)) {
            setSelect(arrayOfServerData);
            //setData({id:"", data:{}});
          } else {
            console.log("not Array")
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

    /*
    function getFetch() {
        console.log("getFetch");
        if(option){
            console.log("if (option) = true");
            URI = {option};
            console.log(URI);
        } else {
            URI = "";
            console.log("else, (option) = false");
        }
        console.log(URI);
        fetch(`http://localhost:3000/custom/${URI}`)
        .then((response)=>response.json())
        .then((arrayOfServerData) => {
            console.log("fetched");
            JSON.stringify(arrayOfServerData);
            console.log(arrayOfServerData);
            setData(arrayOfServerData);})
    }
    */

    //console.log(serverData); 
    /* RETURNS:
        serverData = [
            [{id, data}],
            [{id, data}]
        ]
    */

     // ----- HANDLERS ----- only finds info, makes no changes
    function dropdownHandler(event) {
        setOption(event.target.value);
        //setURI(`${event.target.value}`);
        //testfn(serverData);
    }

    // ----- DOM creators ----
    // const dropdown only creates an array of the data, which is used as a reference to build the dropdown menu
    // data here directly takes the jsonified server data and its ONLY used to build the dropdown
    // no data is changed
    const dropdown = select.map((object) =>{
        return(
            <option key={object.id} value={object.id}>{object.id}</option>
     )})

    function myChild(){
        console.log("no")
    }

    return(
        <div>
            <select onChange={dropdownHandler}>
                <option value=""></option>
                {dropdown}
            </select>
            <Form title={title} data={serverData}/>
            <p> Make sure the input field text always match actual value</p>
        </div>
    )
}

export default Templates