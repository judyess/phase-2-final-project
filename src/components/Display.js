/*
import {React} from "react";


function Display(props) {
    //console.log(props.data[0]["id"]);

    function click(item) {
        //event.preventDefault();
        console.log(item)
    }
        // props.data = item => 1 element array containing entire json object
        // item.tblData => dictionary object containing all "key: values"
        // Object.keys(item.tblData) => array containing all headers
        // item.tblData.header => array
        // Object.entries(item.tblData) => array of arrays of key:value pairs
        // props.data[0].id => id (title)
        // props.data[0] => first json object in the server

        const table = props.data.map((table)=>{
            console.log(table.tblData);
            const tblArray = Object.entries(table.tblData);
            {return ( 
                tblArray.map((headerData)=> 
                {
                    return (
                    <tr key={headerData[0]}>
                        <th>{headerData[0]}</th>
                        <td>{headerData[1]}</td>
                    </tr>
                    )
                })
            )}
        })

        
        const listAll = props.data.map((template) =>{
            console.log(template);
            return(
                <option>{template.id}</option>
            )
        })
      

    return (
        <div className = "tableContainer">
            <select>
                <option></option>
                {listAll}
            </select>
            <table>
                <thead>
                    <tr>
                        <th className="tblHeader" id="number">Number</th>
                        <th className="tblHeader" id="name">Name</th>
                        <th className="tblHeader" id="abbreviation">Abbreviation</th>
                        <th className="tblHeader" id="atomicMass">Atomic Mass</th>
                        <th className="tblHeader" id="period">Period</th>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
        </div>
        
    )
}

export default Display;
*/