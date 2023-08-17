import {React} from "react";


function ElementDisplay(props) {


    function click(item) {
        //event.preventDefault();
        console.log(item)
    }
      
        const element= props.tblData.map((element, key)=>{
            return(
                <tr key={key} onClick={()=>click(element)} >
                    <td>{element.number}</td>
                    <td>{element.name}</td>
                    <td>{element.abbreviation}</td>
                    <td>{element.atomicMass}</td>
                    <td>{element.period}</td>
                </tr>
            )
        })

    return (
        <div className = "tableContainer">
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
                    {element}
                </tbody>
            </table>
        </div>
        
    )
}

export default ElementDisplay;