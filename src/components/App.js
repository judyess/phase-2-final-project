import {React} from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Templates from "./Templates";

function App() {

  /*
  8/23 8:41 pm: some items have the same key.  
  Remember that we have the stringified data from fetch, 
  so I don't need to format it again for use.
  */

  return (
    <div className="App">
      <Navbar />
        <Switch>
          
          <Route exact path="/templates"><Templates /></Route>
          <Route path="/"><Home /></Route>
          {/*<Route exact path="/display"><Display data = {data}/></Route>*/}
        </Switch>
    </div>
  );
}

export default App;