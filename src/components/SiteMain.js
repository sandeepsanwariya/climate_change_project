import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./HomePage";
import ClimateChange from "./ClimateChange";
import MediaMonitor from "./MediaMonitor";
//import SinglePost from "./SinglePost";
//import Category from "./Category";
//import UltraTheme from "./UltraTheme";
import World from "../pages/World";
import FloridaMap from "../pages/FloridaMap"
import HaitiMap from "../pages/HaitiMap"
import KolkataMap from "../pages/KolkataMap"
import BangkokMap from "../pages/BangkokMap"
import BangladeshMap from "../pages/BangladeshMap"
import UAEMap from "../pages/UAEMap";
import All_country from "../pages/All_country";
import ClimateChange2 from "./ClimateChange2";
class SiteMain extends React.Component {
   
    render() {
        return (
          <Router>
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/climate-change/" component={ClimateChange}></Route>
              <Route path="/climate-change-:fname" component={ClimateChange2}></Route>
              <Route path="/media-monitor" component={MediaMonitor}></Route>
              <Route path="/florida" component={FloridaMap}></Route>
              <Route path="/haiti" component={HaitiMap}></Route>
              <Route path="/kolkata" component={KolkataMap}></Route>
              <Route path="/bangkok" component={BangkokMap}></Route>
              <Route path="/bangladesh" component={BangladeshMap}></Route>
              <Route path="/UAE" component={UAEMap}></Route>
              {/* <Route path="/category" component={Category}></Route> */}
              {/* <Route path="/single-post" component={SinglePost}></Route> */}
              {/* <Route path="/theme" component={UltraTheme}></Route> */}
            </Switch>
          </Router>
        );
    }
}
export default SiteMain;