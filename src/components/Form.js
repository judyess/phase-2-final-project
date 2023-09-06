import {React} from "react";

function Form(props) {
    const objArray = Object.entries(props.data);
    const form = props.data;

    function handleValue(event, key, oldValue){
        event.preventDefault();
        if(event.target.value !== ""){
            form[key] = event.target.value;
        } else{
             form[key] = oldValue;
        }
    }

// -------------<Input> tags creator-----------------
    const formViewer = 
        objArray.map((item)=>{
        const index = objArray.indexOf(item);
        return(
            <div key={`${props.title}${index}`}>
           <div><label>{item[0]}</label></div>
           <div><input type="text" key={`${props.title}${index}`} placeholder={item[1]} onChange={(event)=>handleValue(event, item[0], item[1])}/>
           </div></div>
        )
    });
    

    function post() {
        props.func(form);
    }


    return(
        <div>
            <form id="myForm" onSubmit={post}>
                <label>{props.title}</label> 
                <br/><br/>
                {formViewer}
                <br/>
                <button id="save" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form