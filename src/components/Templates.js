import {React, useEffect, useState} from "react";
import Form from "./Form"

function Templates (){
    const [option, setOption] = useState();
    const [serverData, setData] = useState([]);
    const [dropdownOptions, setDropdown] = useState();
    const [IdList, setIdList] = useState([]);

  
    // initializes local data with server data. set ServerData.
    useEffect(() => {
      getFetch();
    }, []); // data = [{test}, {test2}]


// TESTING: URI set to "test"
// get server data, all or specific. (sets "serverData")
    function getFetch() {
        let URI;
        console.log("fetching...")
        if(option){
            URI = {option};
            console.log("true");
            console.log(URI);
        } else {
            URI = "";
            console.log("null");
        }
        fetch(`http://localhost:3000/custom/${URI}`)
        .then((response)=>response.json())
        .then((arrayOfServerData) => {
            JSON.stringify(arrayOfServerData);
            setData(arrayOfServerData);
            })
    }

    /* Took out of fetch bc of errors
            setIdList((item)=>arrayOfServerObjects.map((object)=>{object["id"]}));
            setDropdown((item)=>arrayOfServerObjects.map((object)=>{object["id"]}))
    */
    const parseData = Object.entries(serverData);
    console.log(parseData); 
    /* RETURNS:
        parseData = [
            [0, {id, data}],
            [1, {id, data}]
        ]
    */

    console.log(serverData); // already jsonified
    /* RETURNS:
        serverData = [
            [{id, data}],
            [{id, data}]
        ]
    */

     // ----- HANDLERS -----

    function dropdownHandler(event) {
        setOption(event.target.value);
    }

    // ----- DOM creators ----
    //const testData = Object.entries(serverData);
    const dropdown = serverData.map((object) =>{
        return(
            <option key={object.id} value={object.id}>{object.id}</option>
     )})

    
    return(
        <div>
            <select onChange={dropdownHandler}>
                <option value="newTemplate"></option>
                {dropdown}
            </select>
            <Form objectData={serverData} />

            <p> although the input fields don't update when the template changes, they also don't represent the actual value</p>
            <p> Make input field text always match actual value</p>
        </div>
    )
}

export default Templates
