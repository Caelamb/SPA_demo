import "./App.css";

import { Route, Switch } from "react-router-dom";

import Create from "./views/create/Create";
import Detail from "./views/detail/Detail";
import Home from "./views/home/Home";
import React from "react";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </div>
  );
}

export default App;
