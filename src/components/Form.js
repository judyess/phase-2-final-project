import {React, useState, useEffect} from "react";

function Form() {
    const [data, setData] = useState([]);


    useEffect(()=>{
        fetch("http://localhost:3000/elements")
        .then((response)=>response.json())
        .then((data)=>{
            setData(data);
        })
    }, [])


    console.log(data);

    return(
        <div>

        </div>
    )
}

export default Form;