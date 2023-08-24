import {React, useState} from "react";
//create a reset button that restores input fields to original server data
// not sure how to make the data fields editable
// FIGURE OUT HOW TO UPDATE TBLDATA INPUT FIELDS, RAGHHHH
function Form(props) {


    //const localData = [...Object.entries(props.objectData)];
    const testObj = {...props.objectData};
    const [deleteItems, setDeleteItems] = useState([]);





    //works, use state currentTitle to update new Obj
    function handleNewTitle(event) {
        event.preventDefault();
        let objId = event.target.value;
        console.log(objId);
    }

    // adding to DeleteItems works, but a new input is created everytime the change event is triggered
    // currently unused while testing other functions. Will be used in final submit function
    function handleKey(event, item){
        event.preventDefault();
        let newKey = event.target.value;
        if (!deleteItems.includes(item[0])){
            setDeleteItems((deleteItems)=>[...deleteItems, item[0]]); //works but now creates new inputs
        }
        console.log(newKey);
        //console.log(thisKey);
    }

    // works
    function handleValue(event, key){
        event.preventDefault();
        let newValue = event.target.value;
        if(event.target.value !== ""){
            console.log(newValue);
        } else{
             console.log("dropdown option was null")
        }
        //console.log(`testObj ${JSON.stringify(testObj) }`);   
    }

    const localData = Object.entries(props.objectData);
    const generateForm = localData.map((item)=>{
        const index = props.objectData.indexOf(item);
        return(
            <div key={index}>
            <label>{item[0]}</label>
            <input type="text" id={`value${index}`} placeholder={item[1]} onChange={(event)=>handleValue(event, item[0])}/>
            </div>
        )
    })

    function print(event) {
        event.preventDefault();
        console.log(props.objectData);
        
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
                <input value={props.objectData.id} onChange={handleNewTitle}/>
                {generateForm}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form