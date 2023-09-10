import {React} from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Editor from "./Editor";
import Creator from "./Creator";


function App() {

  return (
    <div className="App">
      <h1 className="header">Data Builder!</h1>
      
      <Navbar />
        <Switch>
          <Route exact path="/editor"><Editor /></Route>
          <Route exact path="/creator"><Creator /></Route>
          <Route path="/"><Home /></Route>
          {/*<Route exact path="/display"><Display data = {data}/></Route>*/}
        </Switch>
    </div>
  );
}

export default App;