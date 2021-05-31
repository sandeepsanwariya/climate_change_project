//import logo from './logo.svg';
import World from './pages/World';
import FloridaMap from './pages/FloridaMap';
import BangladeshMap from './pages/BangladeshMap';
import BangkokMap from './pages/BangkokMap';
import KolkataMap from './pages/KolkataMap';
import UAEMap from './pages/UAEMap';
import HaitiMap from './pages/HaitiMap';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <Router>
            <Switch>
              <Route path="/" exact component={World}></Route>
              <Route path="/florida" component={FloridaMap}></Route>
              <Route path="/kolkata" component={KolkataMap}></Route>
              <Route path="/bangkok" component={BangkokMap}></Route>
              <Route path="/bangladesh" component={BangladeshMap}></Route>
              <Route path="/haiti" component={HaitiMap}></Route>
              <Route path="/UAE" component={UAEMap}></Route>
              
            </Switch>
          </Router>
  );
}

export default App;
