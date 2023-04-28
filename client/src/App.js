import './App.css';

import {Route, Switch} from "react-router-dom"
import Home from './views/home/Home';
import Create from './views/create/Create';
import Detail from './views/detail/Detail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/detail/:id" component={Detail} /> 
        <Route exact path="/create" component={Create} /> 
      </Switch>
    </div>
  );
}

export default App;
