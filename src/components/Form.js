import {React, useState} from "react";

function Form(props) {
    const [objData, setObjData] = useState()
    const [obj, setObj] = useState(props.data);
    const [title, setTitle] = useState(props.title);

    
    //console.log(props);
    //console.log(props.objectData);
    /*
        props = {[{id:test}, {id:test2}]}
    */

        const data = props.data;
        console.log(data);
        const objArray = Object.entries(data);

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
        let newValue = event.target.value.key;
        setObjData(event.target.value);
        console.log(newValue);
        
        if(event.target.value !== ""){
            console.log(objData);

        } else{
             console.log("dropdown option was null")
        }
    }

    
// -------------<Input> tags creator-----------------

    const formViewer = objArray.map((item)=>{
        const index = objArray.indexOf(item);
        console.log(Object.entries(data)[`${title}`]); // [[key:value], [key:value]]
        console.log((Object.entries(data)))
        // key = Object.entries(data)[0][0]
        // value = Object.entries(data)[0][1]
        //item = Object.entries(data)[0] = ['key', 'value']
        console.log(Object.entries(data)[{index}]); // ['key', 'value']
        //const key = ${props.title}${index};
        return(
            <div key={`${props.title}${index}`}>
            {/*<label key={`${props.title}${index}`}>{item[0]}</label>*/}
            <input type="text" key={`${props.title}${index}`} placeholder={item[1]} onChange={(event)=>handledBValue(event, item[0])}/>
            <label>{`value ${index}`}</label>
            </div>
        )
    })


    function print(event) {
        event.preventDefault();
        console.log();
        console.log(event.target.value);
        console.log(formViewer);
        /*
        [{lab}]

        */
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