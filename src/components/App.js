import {React, useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Templates from "./Templates";
import Display from "./Display";

function App() {
  const [data, setData] = useState([]);
  
  
  useEffect(() =>{
    fetch("http://localhost:3000/custom")
    .then((response)=>response.json())
    .then((data) => setData(data))
  }, []);

  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/templates"><Templates data = {data}/></Route>
          {/*<Route exact path="/display"><Display data = {data}/></Route>*/}
        </Switch>
    </div>
  );
}

export default App;
