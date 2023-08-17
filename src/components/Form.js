import {React, useEffect, useState} from "react";
//create a reset button that restores input fields to original server data
function Form({ title, data}) {

    const [currentTitle, setTitle] = useState(title);
    const [currentData, setData] = useState(data);
    const thisTitle = title;

    useEffect(()=>{
        update();
    }, [title]) // watches title bc the dropdown options change this

    function update() {
        setTitle(title);
        setData(data);
    }

    const showData = data.map((item)=>{
        return(
            <div key={data.indexOf(item)}>
                <input type="text" value={item[0]} onChange={pair}/><input type="text" value={item[1]} onChange={pair}/>
            </div>
        )
    })

    function handleNewTitle(event) {
        event.preventDefault();
        let newTitle = event.target.value;
        setTitle(newTitle)
        console.log(currentTitle);
    }

    function patch() {
        console.log("patched")
    }
    function pair(){

    }
    return(
        <div>
            <form onSubmit={patch}>
                <input value={currentTitle} onChange={handleNewTitle}/>
                {showData}
            </form>
        </div>
    )
}

export default Form