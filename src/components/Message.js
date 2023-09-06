import {React, useState, useEffect} from "react";

function Message(props) {
    const [msg, setMsg] = useState("");
    //let msg;
    
    if(props.msg === false){
        //setMsg("");
       setTimeout(()=>{clear()}, 5000);
    } if(props.msg === true) {
        //setMsg("success!");
        setTimeout(()=>{clear()}, 5000);
       // setTimeout(clear, 5000);
    } else {
       // setMsg("");
    }

    function clear() {
       // setMsg("");
    }
    

    return(
        <div>
            <label>{msg}</label>
        </div>
    )
}

export default Message;