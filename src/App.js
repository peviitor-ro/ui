import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "../src/screens/home/home";
import Serp from "./screens/serp/serp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/rezultate">
          <Serp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
