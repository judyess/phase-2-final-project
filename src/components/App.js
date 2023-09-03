import {React} from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Templates from "./Templates";
import Creator from "./Creator";

function App() {

  return (
    <div className="App">
      <Navbar />
        <Switch>
          
          <Route exact path="/templates"><Templates /></Route>
          <Route exact path="/creator"><Creator /></Route>
          <Route path="/"><Home /></Route>
          {/*<Route exact path="/display"><Display data = {data}/></Route>*/}
        </Switch>
    </div>
  );
}

export default App;