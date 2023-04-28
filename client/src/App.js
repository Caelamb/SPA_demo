import './App.css';

import Home from './views/home/Home';
import Create from './views/create/Create';
import Detail from './views/detail/Detail';

function App() {
  return (
    <div className="App">
      <Home/>
      <Create/>
      <Detail />
    </div>
  );
}

export default App;
