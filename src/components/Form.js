import {React, useState} from "react";

function Form(props) {
    //console.log(props);
    //console.log(props.objectData);
    /*
        props = {[{id:test}, {id:test2}]}
    */


    // props.objectData holds a state object. What happens if we assign that to a regular variable?
    //const propData = {...props.objectData}.data; // THIS WAS USED TO HOLD THE NEW JSON OBJECT FOR POST/PUT
    /*console.log(Object.entries(propData["data"]));
    try {
        console.log(Object.entries(propData["data"]));}
    catch {
        console.log(propData);
    }*/
    /*
        propData = {
            0 : {custom[1]},
            1 : {custom[2]}
        }
        propData = {index, objects}
    */

       // console.log(Object.entries(props.objectData["data"]));
    //works, should this be a state var???
    function handleNewTitle(event) {
        event.preventDefault();
        let objId = event.target.value;
        console.log(objId);
    }

    // works, simple regular HTML like form handling
    function handledBValue(event, key){
        event.preventDefault();
        let newValue = event.target.value;
        if(event.target.value !== ""){
            console.log(newValue);
        } else{
             console.log("dropdown option was null")
        }
    }

// -------------<Input> tags creator-----------------

    const formViewer = props.data.map((item)=>{
        const index = props.objectData.indexOf(item);
        return(
            <div key={index}>
            <label>{item[0]}</label>
            <input type="text" id={`value${index}`} placeholder={item[1]} onChange={(event)=>handledBValue(event, item[0])}/>
            </div>
        )
    })



    function print(event) {
        event.preventDefault();
        console.log();
        //console.log(formViewer);
        //console.log(propData);
       
        /*
        fetch(`http://localhost:3000/custom/${title}`,{
            method: "PUT",
            body: JSON.stringify({
                data:testObj}),
            headers: {"Content-type": "application/JSON; charset=UTF-8"}
        }) .then((response) => response.json())
        .then((newData) => {console.log(newData); setData((oldData)=>[...Object.entries(newData.data)])});
        */
    }

    return(
        <div>
            <form id="myForm" onSubmit={print}>
                <input value={props.title} onChange={handleNewTitle}/>
                {formViewer}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form