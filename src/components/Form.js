import {React, useState} from "react";

function Form(props) {

    // props.objectData holds a state object. What happens if we assign that to a regular variable?
    const testObj = {...props.objectData}; // THIS WAS USED TO HOLD THE NEW JSON OBJECT FOR POST/PUT
    const [deleteItems, setDeleteItems] = useState([]);

    //works, should this be a state var???
    function handleNewTitle(event) {
        event.preventDefault();
        let objId = event.target.value;
        console.log(objId);
    }

    // adding to DeleteItems works, check that the form is updating correctly. 
    // bc Previously was creating new inputs with each change
    function handleKey(event, item){
        event.preventDefault();
        let newKey = event.target.value;
        if (!deleteItems.includes(item[0])){
            setDeleteItems((deleteItems)=>[...deleteItems, item[0]]); 
        }
        console.log(newKey);
    }

    // works, simple regular HTML like form handling
    function handleValue(event, key){
        event.preventDefault();
        let newValue = event.target.value;
        if(event.target.value !== ""){
            console.log(newValue);
        } else{
             console.log("dropdown option was null")
        }
    }

// -------------<Input> tags creator-----------------
    const formViewer = props.objectData.map((item)=>{
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
        console.log(formViewer);

        
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
                {formViewer}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form