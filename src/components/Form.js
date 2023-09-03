import {React} from "react";

function Form(props) {
    const objArray = Object.entries(props.data);
    const form = props.data;

    function handleNewTitle(event) {
        event.preventDefault();
        let objId = event.target.value;
        console.log(objId);
    }

    function handledBValue(event, key, oldValue){
        event.preventDefault();
        if(event.target.value !== ""){
            form[key] = event.target.value;
        } else{
             form[key] = oldValue;
        }
    }
// -------------<Input> tags creator-----------------
    const formViewer = objArray.map((item)=>{
        const index = objArray.indexOf(item);
        return(
            <div key={`${props.title}${index}`}>
           <label>{item[0]}</label>
            <input type="text" key={`${props.title}${index}`} placeholder={item[1]} onChange={(event)=>handledBValue(event, item[0], item[1])}/>
            </div>
        )
    })

    function print() {
        props.func(form);
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