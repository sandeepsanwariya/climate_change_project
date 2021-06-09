import React from "react";
import SiteHeader from "./SiteHeader";
import SiteMain from "./SiteMain";
import SiteFooter from "./SiteFooter";
// import "../assets/app.css"
class AppContainer extends React.Component {
  
  render() {
    return (
        <React.Fragment>
          <SiteHeader />
          <SiteMain />
          <SiteFooter />
        </React.Fragment>
    );
  }
}
export default AppContainer