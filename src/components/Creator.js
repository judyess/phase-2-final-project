import {React, useState} from "react";

function Creator(props) {

    let templateData ={};
    const [title, setTitle] = useState("");
    const [stat, setStat] = useState("");


    // ---- Functions dealing with "Arr", Credit: https://stackoverflow.com/a/66470038/3127614
    const inputArr = [
        {
          type: "text",
          id: 1,
          value: ""
        }];

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

      function handleChange(error){
        error.preventDefault();
        const index = error.target.id;
        templateData[index] = error.target.value;
        setArr(s => {
          const newArr = s.slice();
          newArr[index].value = error.target.value;
          return newArr;
        });   
      };

      function getTitle(event) {
        event.preventDefault();
        setTitle((old)=>{
          return((event.target.value).replace(" ", "-"))});
      };


      function submitData(event) {
        event.preventDefault();
        arr.map((obj)=>{
            if(obj.value !== "") {
              templateData[obj.value] = "";
            }
            return obj;
        })
          fetch("http://localhost:3000/custom",{
              method: "POST",
              body: JSON.stringify({
                  id: title,
                  data: templateData
              }),
              headers: {"Content-type": "application/JSON; charset=UTF-8"}
          }).then((response) => {
            if(response.ok) {
              setStat("Success! Go to the Editor to add data to your new template!");
              response.json();
          } else {
            setStat("Error: You already have a template with this title.");
            return console.log("Try Again");
          }
          })
          .then((data) => {
            console.log(data)
            setTimeout(clear, 3000);
            return JSON.stringify(data);
            });
    }

    function clear() {
      setStat("");
    }

      return (
        <div> 
          <p>Create a new template here: </p>
            <form onSubmit={submitData}>
            <input placeholder="Enter a Title" onChange={getTitle}/><br/><br/>
            {arr.map((item, keyVal) => {           
                return (
                    <div key={keyVal}>
                    <input
                        onChange={handleChange}
                        placeholder="Enter a Field Name"
                        value={item.value}
                        id={keyVal}
                        type={item.type}
                        size="40"/>
                    </div>   
                );
          })} <button type="button" onClick={addInput}>Add Field</button> {/* have to have type, button, otherwise it will act like its submitting the form*/}
          <br/><br/>
          <button type="submit">Create Template</button>
          
          </form>
          <label>{stat}</label>
        </div>
      );
}



export default Creator;