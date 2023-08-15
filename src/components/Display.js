import {React, useEffect} from "react";


function Display(props) {

    
    useEffect(() =>{
      print();
    }, []);
    

    function print() {
        console.log(props)
    }

    function renderElements(arr=props) { 
        const tableBody = document.querySelector('.tableBody');
        const headers = document.getElementsByClassName("tblHeader");
        console.log(headers);
        arr.forEach(element => {
          const tr = document.createElement('tr');
          tr.setAttribute('class', 'rowData');
          tableBody.appendChild(tr);
          for(let i = 0; i < headers.length; i++){ 
            const td = document.createElement("td");
            const key = headers[i].getAttribute('id');
            tr.appendChild(td);
            td.innerHTML = element[`${key}`]; 
          }
        });
      }


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
            </table>
        </div>
        
    )
}

export default Display;