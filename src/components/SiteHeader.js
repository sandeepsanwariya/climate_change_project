import React from "react";
import SiteMenu from "./SiteMenu";
class SiteHeader extends React.Component {

  state = {
    menu: [
        {
            id: 1,
            title: "Climate change",
        },
        {
            id: 2,
            title: "Amazonian rainforest deforestation",
        },
        {
            id: 3,
            title: "Media Bias ",
        }
    ]
  };
   
    render() {
        return (
          <header className="site-header">
              <div className="site-logo">
                <a href="/"><img src="/assets/img/a_revolutionary_act_black.png" alt="A Revolutionary Act" /></a>
              </div>
              <div className="menu-toggle" id="menuToggle">Menu</div>
              <SiteMenu menu={this.state.menu} />
            </header>
        );
    }
}
export default SiteHeader