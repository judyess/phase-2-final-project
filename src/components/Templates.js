import {React, useEffect, useState} from "react";
import Form from "./Form"

function Templates (){
    const [option, setOption] = useState();
    const [serverData, setData] = useState([]);
  
    useEffect(() => {
      getFetch();
    }, []); 


    function getFetch() {
        let URI;
        if(option){
            console.log("option = true, setting URI...");
            URI = {option};
            console.log(URI);
        } else {
            URI = "";
            console.log("URI is null");
        }
        console.log("fetching...")
        fetch(`http://localhost:3000/custom/${URI}`)
        .then((response)=>response.json())
        .then((arrayOfServerData) => {
            console.log("jsonifying server data...");
            JSON.stringify(arrayOfServerData);
            setData(arrayOfServerData); // the only line that sets serverData, but the if block is not triggering.
            console.log()
            })
    }


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
    }

    // ----- DOM creators ----
    // const dropdown only creates an array of the data, which is used as a reference to build the dropdown menu
    // data here directly takes the jsonified server data and its ONLY used to build the dropdown
    // no data is changed
    const dropdown = serverData.map((object) =>{
        return(
            <option key={object.id} value={object.id}>{object.id}</option>
     )})

     // Form is being sent the JSONified"serverData" straight from the fetch call
     // No changes made to data between the fetch call and sending it to Form
    return(
        <div>
            <select onChange={dropdownHandler}>
                <option value="newTemplate"></option>
                {dropdown}
            </select>
            <Form objectData={serverData} />
            <p> Make sure the input field text always match actual value</p>
        </div>
    )
}

export default Templates
