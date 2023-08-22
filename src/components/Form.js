import {React, useEffect, useState,useRef} from "react";
//create a reset button that restores input fields to original server data
// not sure how to make the data fields editable
// FIGURE OUT HOW TO UPDATE TBLDATA INPUT FIELDS, RAGHHHH
function Form({ title, data, change}) {

    const [currentTitle, setTitle] = useState(title);
    const [currentData, setData] = useState(data); //how can I even use this?
    //const [testObj, setTestObj] = useState({...data});

    const dataArray = [...Object.entries(data)];
    const testObj = {...data};
    const [deleteItems, setDeleteItems] = useState([]);



    useEffect(()=>{
        update();
    }, [title]) // updates the form, but the text in the input fields persist through forms and submits

    function update() {
        setTitle(title);
        setData((update)=> {return (update = dataArray)});
        //setText("");
       // inputs();
    }
    //works, use state currentTitle to update new Obj
    function handleNewTitle(event) {
        event.preventDefault();
        let newTitle = event.target.value;
        setTitle((oldTitle)=>oldTitle = newTitle)
        console.log(currentTitle);
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
        if(event.target.value != ""){
            testObj[key] = newValue;
        } else{
            testObj[key] = event.target.placeholder; //placeholder will get updated in final submit function
        }
        //console.log(`testObj ${JSON.stringify(testObj) }`);   
    }

    const showData = dataArray.map((item)=>{
        const index = dataArray.indexOf(item);

        return(
            <div key={index}>
            <label>{item[0]}</label>
            <input type="text" id={`value${index}`} placeholder={item[1]} onChange={(event)=>handleValue(event, item[0])}/>
            </div>
        )
    })

    function print(event) {
        event.preventDefault();
        
        //console.log(`dataArray: ${dataArray}`);
        //console.log(`deleteItems: ${JSON.stringify(deleteItems)}`);
        console.log(`testObj: ${JSON.stringify(testObj)}`);
        //console.log(`title: ${title}`)
        console.log(`data: ${JSON.stringify(data)}`);
    
        change(currentData, title);
        /*
        fetch(`http://localhost:3000/custom/${title}`,{
            method: "PUT",
            body: JSON.stringify({
                data:testObj}),
            headers: {"Content-type": "application/JSON; charset=UTF-8"}
        }) .then((response) => response.json())
        .then((newData) => {console.log(newData); setData((oldData)=>[...Object.entries(newData.data)])});
*/
       setData(testObj);
       //change(currentData, title);
    }


    return(
        <div>
            <form id="myForm" onSubmit={print}>
                <input value={currentTitle} onChange={handleNewTitle}/>
                {showData}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form