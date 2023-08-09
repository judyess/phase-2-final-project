import {React, useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Form from "./Form";

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() =>{
    fetch("http://localhost:3000/tables")
    .then((response)=>response.json())
    .then((data) => console.log(data))
  }, []);
  
  console.log(data);

  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/form"><Form /></Route>

        </Switch>
    </div>
  );
}

export default App;
