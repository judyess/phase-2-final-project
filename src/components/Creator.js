import {React, useState} from "react";

function Creator(props) {

    let objBody ={};
    const [title, setTitle] = useState("");

    /*
        Works! Except that an error is returned if you try to post a new object
        that does not have a unique id (or title), but idk how to catch the error.
        App doesn't break when that error occurs though, but without being able to 
        catch the error, there's no way for me to at least print a message saying
        that it failed.
    */

    // ---- Start of Credit: https://stackoverflow.com/a/66470038/3127614
    const inputArr = [
        {
          type: "text",
          id: 1,
          value: ""
        }
      ];
      const [arr, setArr] = useState(inputArr);
      const addInput = () => {
        setArr(s => {
          return [
            ...s,
            {
              type: "text",
              value: ""
            }
          ];
        });
      };
      const handleChange = e => {
        e.preventDefault();
        const index = e.target.id;
        objBody[index] = e.target.value;
        setArr(s => {
          const newArr = s.slice();
          newArr[index].value = e.target.value;
          return newArr;
        });
        
      };

      function getTitle(event) {
        event.preventDefault();
        setTitle(event.target.value);
      }

      function submit(event) {
        event.preventDefault();
        arr.map((obj)=>{
            objBody[obj.value] = "";
        })
        console.log(props.selections);
        console.log(objBody);
        console.log(title);
      }

      function submitData(event) {
        event.preventDefault();
        arr.map((obj)=>{
            if(obj.value !== "") {
            objBody[obj.value] = "";
            }
        })
        try{
        fetch("http://localhost:3000/custom",{
            method: "POST",
            body: JSON.stringify({
                id: title,
                data: objBody
            }),
            headers: {"Content-type": "application/JSON; charset=UTF-8"}
        }) .then((response) => response.json())
        .then((data) => console.log(data));
     } catch (err) {
        console.log("error");
     }
    }

    
      return (
        <div> 
            <form onSubmit={submitData}>
            <input placeholder="Enter a Title" onChange={getTitle}/>
            {arr.map((item, i) => {           
                return (
                    <div key={i}>
                    <label>{i}</label>
                    <input
                        onChange={handleChange}
                        placeholder="Enter a Field Name"
                        value={item.value}
                        id={i}
                        type={item.type}
                        size="40"/>
                    </div>   
                );
          })}
          <button type="submit">Submit</button>
          </form>
          <button onClick={addInput}>+</button>
        </div>
      );
      //---------------- End of Credit: https://stackoverflow.com/a/66470038/3127614
    
    /*
    const [newTitle, setNewTitle] = useState("New-Template");
    const [dataFields, setDataFields] = useState({});

    function newDataPoint(event){
        event.preventDefault();
        return(
            <input placeholder="Enter Field Name"></input>
        )
    }

    function submitData(event) {
        event.preventDefault();
        fetch("http://localhost:3000/custom",{
            method: "POST",
            body: JSON.stringify({
                id:newTitle,
                body: dataFields
            }),
            headers: {"Content-type": "application/JSON; charset=UTF-8"}
        }) .then((response) => response.json())
        .then((data) => console.log(data));
    }

    return(
        <div>
            <form>
            <input placeholder="Enter a Title" />
            <br/>
            <input placeholder="Enter Field Name" />
            <button onClick={newDataPoint}>Add New Field</button>
            </form>
        </div>
    )
    */
}



export default Creator;