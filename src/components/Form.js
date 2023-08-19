import {React, useEffect, useState,useRef} from "react";
//create a reset button that restores input fields to original server data
// not sure how to make the data fields editable
// FIGURE OUT HOW TO UPDATE TBLDATA INPUT FIELDS, RAGHHHH
function Form({ title, data}) {

    let currentValue;
    let currentKey;
    const [currentTitle, setTitle] = useState(title);
    const [currentData, setData] = useState(data); //how can I even use this?
    const [thisValue, setValue] = useState(data[currentValue]);
    const [thisKey, setKey] = useState(data[currentKey]);

    const dataArray = Object.entries(data);
    const testObj = data;
    const [deleteItems, setDeleteItems] = useState([]);
    const [newPair, setNewPair] = useState([])
    //let deleteItems=[];

    useEffect(()=>{
        update();
    }, [title]) // watches title bc the dropdown options change this and I need the form to update on change

    function update() {
        setTitle(title);
        setData(data);
    }
    //works, use state currentTitle to update new Obj
    function handleNewTitle(event) {
        event.preventDefault();
        let newTitle = event.target.value;
        setTitle(newTitle)
        console.log(currentTitle);
    }

    // adding to DeleteItems works, but a new input is created everytime the change event is triggered
    function handleKey(event, item){
        event.preventDefault();
        setKey(event.target.value);
        let newKey = event.target.value;
        if (!deleteItems.includes(item[0])){
            setDeleteItems((deleteItems)=>[...deleteItems, item[0]]); //works but now creates new inputs
        }
        console.log(testObj)
        console.log(`deleteItems: ${deleteItems}`);
        //testObj[newKey] = thisValue;

    }
    // works, label changes with input though
    function handleValue(event, thisKey){
        event.preventDefault();
        console.log(`thisKey: ${thisKey}`)
        setValue(event.target.value);
        let strTestObj = JSON.stringify(testObj) // for testing only
        console.log(`testObj ${strTestObj}`);   
        console.log(testObj[thisKey])
    }



    //figure out how to reference the keys and values so the input box values reflect changes and so they remain a pair
    const showData = dataArray.map((item)=>{
        currentKey = item[0];
        currentValue = item[1];
        const index = dataArray.indexOf(item);

        return(
            <div key={index}>
                <label>{currentKey}</label>
                <input type="text" id={`key${index}`} placeholder={item[0]} onChange={(event)=>handleKey(event, item)} />
                <label>{currentValue}</label>
                <input type="text" placeholder={item[1]} onChange={(event)=>handleValue(event, item[0])}/>
                
            </div>
        )
    })

    return(
        <div>
            <form>
                <input value={currentTitle} onChange={handleNewTitle}/>
                {showData}
            </form>
        </div>
    )
}

export default Form