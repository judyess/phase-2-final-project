import {React, useState} from "react";

function Form({title, data}) {
    const [currentTitle, setTitle] = useState(title);

    const showData = data.map((item)=>{
        return(
            <div onChange={pair}>
                <input value={item[0]}/> <input value={item[1]} />
            </div>
        )
    })

    function handleNewTitle(event) {
        event.preventDefault();
        setTitle(event.target.value)
    }

    function patch() {
        console.log("patched")
    }
    function pair(){

    }
    return(
        <div>
            <form onSubmit={patch}>
                <input value={title} onChange={handleNewTitle}/>
                {showData}
            </form>
        </div>
    )
}

export default Form