import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigate from './Components/main-site/navigation';
import Mainsite from './Components/main-site';
import About from './Components/about';
import Service from './Components/services';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigate />
        <Switch>
          <Route exact path="/"><Mainsite /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/services"><Service /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
