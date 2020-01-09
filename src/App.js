import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
    <Link to="/">Home</Link>
  </div>
);
const HatsPageWithId = props => (
  <div>
    <button onClick={() => props.history.push("/")} className="Button">
      Home
    </button>
    <h1>Hats pageid:{props.match.params.id}</h1>
    <Link to="/">Home</Link>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/hats/:id" component={HatsPageWithId} />
      </Switch>
    </div>
  );
}

export default App;
