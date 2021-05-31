import React from "react";
import {
  Link
} from "react-router-dom";
import LazyLoad from 'react-lazyload';
import WwfClimatePetition from "./WwfClimatePetition";
// import PlantATree from "./PlantATree";
// import PlantTrees from "./PlantTrees";
// import ActNowApp from "./ActNowApp";
// import SwitchElectricity from "./SwitchElectricity";
// import SellGasCar from "./SellGasCar";
// import OffsetPlaneTrip from "./OffsetPlaneTrip";
// import Join350org from "./Join350org";
// import GreenPeacePetition from "./GreenPeacePetition";
// import RemoveCO2 from "./RemoveCO2";
// import SwitchBank from "./SwitchBank";
// import UpVote from "./UpVote";
import World from "../pages/World";


const ClimateChange= () => {

      let element = document.getElementsByClassName('toggle-embed')[0];

      if (element) {
          element.addEventListener('click', function() {
              document.body.classList.toggle("reveal-embed");
          });
      }

      return (
        <main className="article campaign">
          <header className="entry-header">
            <h1>Climate change: The life you know is about to end</h1>
            <p>Scroll down to see how the world is going to change for the next generation.</p>
            <div className="mouse_scroll">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div>
                    <span className="m_scroll_arrows unu"></span>
                    <span className="m_scroll_arrows doi"></span>
                    <span className="m_scroll_arrows trei"></span>
                </div>
            </div>
            <div className="feature-image climate-change"></div>
            <div className="logo">
                
            </div>
          </header>
          <div>
          
              </div>
          <div className="feature-chart">
                <div className="chart" style={{padding:0}}>
                    {/* <p>Sea leve rise map will go here</p> */}
                    
                    <World/>
                   
                </div>
                <div className="embed-chart">
                    <p>Embed this chart in your web page: <span className="cta with-icon on-dark toggle-embed">Embed chart</span></p>
                    <div className="embed-code">
                        <p>Paste this code into your web page.</p>
                        <textarea placeholder="Embed code here"></textarea>
                        <button>Copy</button>
                        <div className="close">Close</div>
                    </div>
                    <div className="share">
                        <h3>Share this page:</h3>
                        <ul>
                            <li className="reddit"><a href="">Reddit</a></li>
                            <li className="twitter"><a href="">Twitter</a></li>
                            <li className="facebook"><a href="">Facebook</a></li>
                            <li className="linkedin"><a href="">Linkedin</a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            <section className="grid-full charts-grid dark-charts-grid">
                <h2>Badly Affected Areas</h2>
                <ul className="x">
                  <li className="c t6 l4">
                      <Link to="florida">
                        <LazyLoad>
                          <img src="../assets/img/climate-change/florida_sea_level_rise_map_climate_change.jpg" />
                        </LazyLoad>
                        <span>Florida</span>
                      </Link>
                  </li>
                  <li className="c t6 l4">
                      <Link to="bangkok">
                        <LazyLoad>
                          <img src="../assets/img/climate-change/florida_sea_level_rise_map_climate_change.jpg" />
                        </LazyLoad>
                        <span>Bangkok</span>
                      </Link>
                  </li>
                  <li className="c t6 l4">
                      <Link to="kolkata">
                        <LazyLoad>
                          <img src="../assets/img/climate-change/florida_sea_level_rise_map_climate_change.jpg" />
                        </LazyLoad>
                        <span>Kolkata</span>
                      </Link>
                  </li>
                  <li className="c t6 l4">
                      <Link to="Bangladesh">
                        <LazyLoad>
                          <img src="../assets/img/climate-change/florida_sea_level_rise_map_climate_change.jpg" />
                        </LazyLoad>
                        <span>Bangladesh</span>
                      </Link>
                  </li>
                  <li className="c t6 l4">
                      <Link to="haiti">
                        <LazyLoad>
                          <img src="../assets/img/climate-change/florida_sea_level_rise_map_climate_change.jpg" />
                        </LazyLoad>
                        <span>Haiti</span>
                      </Link>
                  </li>
                  <li className="c t6 l4">
                      <Link to="UAE">
                        <LazyLoad>
                          <img src="../assets/img/climate-change/florida_sea_level_rise_map_climate_change.jpg" />
                        </LazyLoad>
                        <span>UAE</span>
                      </Link>
                  </li>
                </ul>
            </section>
            <div className="entry-content">
                <div className="grid-container-narrow major-incidents story">
                    <section className="x decade-1">
                        <div className="c l6">
                            <div className="text">
                                <h2><time>2030</time> Climate Change becomes irreversible</h2>
                                <p>The IPCC predicts that unless there is significant change before 2030, then the catastrophic effects of the warming planet become unavoidable, and it is too late to save ourselves. We are already feeling some effects of a changing climate, but if the world continues with its half-hearted commitments to emission reduction, the events in this list will certainly happen.</p>
                            </div>
                        </div>
                        <picture className="c l6">
                            <LazyLoad>
                              <img src="../assets/img/climate-change/polar-bear-from-above-large.jpg" />
                            </LazyLoad>
                        </picture>
                    </section>
                    <section className="x decade-2">
                        <picture className="c l6">
                          <LazyLoad>
                            <img src="../assets/img/climate-change/flood-large.jpg" />
                            </LazyLoad>
                        </picture>
                        <div className="c l6">
                            <div className="text">
                                <h2><time>2040</time> Hundreds of billions of dollars to be spent on flood defences</h2>
                                <p>In USA, 40% of the population lives in high population-density coastal areas, and Globally, 8 of the world’s 10 largest cities are near a coast. USA will need to spend around $10 billion to protect each coastal city, replenishing defences every 20 years, or facing the consequences of $billions in flood damages. It is the same around the world, and it is unclear where the money will come from. </p>
                            </div>
                        </div>
                    </section>
                    <section className="x decade-3">
                        <div className="c l6">
                            <div className="text">
                                <h2><time>2050</time> The climate refugee crisis – 1 billion migrants</h2>
                                <p>The intense heat and increased flooding will play havoc with farming and crops. Large parts of Africa will simply become desert, where growing food becomes impossible. In parts of Asia, heavier rainfall and constant floods will destroy crops. The area where food can be grown will significantly decrease, making it a true challenge to feed the world.</p>
                            </div>
                        </div>
                        <picture className="c l6">
                            <LazyLoad>
                              <img src="../assets/img/climate-change/refugees-large.jpg" />
                            </LazyLoad>
                        </picture>
                    </section>
                    <section className="x decade-4">
                        <picture className="c l6">
                            <LazyLoad>
                              <img src="../assets/img/climate-change/turtle_large.jpg" />
                            </LazyLoad>
                        </picture>
                        <div className="c l6">
                            <div className="text">
                                <h2><time>2060</time> The Great Barrier Reef dies</h2>
                                <p>The natural phenomenon, a bucket list location for so many people, will almost completely die due to rising temperatures, bleaching and ocean acidification. Reefs will die across the globe, and it’s not just a lost tourist attraction, its death means further devastation of marine eco-systems, causing huge numbers of species to go extinct. By this point, also due to overfishing, it’s safe to say you won’t be able to pick up seafood for dinner in your local supermarket.</p>
                            </div>
                        </div>
                    </section>
                    <section className="x decade-5">
                        <div className="c l6">
                            <div className="text">
                                <h2><time>2070</time> One third of plant and animal species extinct</h2>
                                <p>Just 50 years from today, one third of every species on this planet could be gone. The domino effect of rising temperatures can absolutely destroy large eco-systems, starting with the oceans before eventually impacting land animals. Polar bears, penguins and koalas become even more endangered and their extinction is now almost guaranteed before the end of the century. </p>
                            </div>
                        </div>
                        <picture className="c l6">
                            <LazyLoad>
                              <img src="../assets/img/climate-change/baby_snow_leapard.jpg" />
                            </LazyLoad>
                        </picture>
                    </section>
                    <section className="x decade-6">
                        <picture className="c l6">
                            <LazyLoad>
                              <img src="../assets/img/climate-change/venice_flooded_large.jpg" />
                            </LazyLoad>
                        </picture>
                        <div className="c l6">
                            <div className="text">
                                <h2><time>2080</time> Venice, Fiji and Bangkok lost to the sea</h2>
                                <p>Rising sea levels will mean that Venice will be completely submerged by 2100. Groups of islands like The Maldives and Fiji will disappear too, so forget that tropical island holiday. Hugely populated cities like Jakarta and Bangkok will have been long gone by now.</p>
                            </div>
                        </div>
                    </section>
                    <section className="x decade-7">
                        <div className="c l6">
                            <div className="text">
                                <h2><time>2100</time> Climate related death becomes the world's biggest killer</h2>
                                <p>By 2100, deaths related to heat will be higher than all deaths from infectious diseases. But it’s not only heat; the changing climate will cause poverty and starvation, as well as increase danger and transferability of number of diseases that spread in warmer conditions. Natural disasters will also kill, as well as reduced water quality in developing countries, and the inevitable economic collapse of many economies.</p>
                            </div>
                        </div>
                        <picture className="c l6">
                            <LazyLoad>
                              <img src="../assets/img/climate-change/dead_cows_large.jpg" />
                            </LazyLoad>
                        </picture>
                    </section>
                </div>
                <div className="grid-container-full emm-cta how-to-stop-it">
                    <header className="x">
                        <div className="c l6">
                            <h2>How to stop climate change</h2>
                            <p>It's not enough to care about making the world a better place. It's not enough to vote. It's not enough to tell your friends and workmates and the drunkards you argue with at parties. It's not enough to convince everyone you meet the world we know is going to perish unless we loosen our bolts and fall from the machine that relentlessly destroys her. If you want the world to change, you have to change it. Day by day, minute by minute. In every move that you make.</p>
                            <h3>Change your life, change the world. Start here...</h3>
                        </div>
                    </header>
                    {/* <RemoveCO2 />
                    <PlantATree />
                    <PlantTrees />
                    <SwitchElectricity />
                    <UpVote />
                    <SwitchBank />
                    <ActNowApp />
                    <SellGasCar />
                    <OffsetPlaneTrip />
                    <Join350org />
                    <GreenPeacePetition /> */}
                    <WwfClimatePetition />
                </div>
            </div>
        </main>
      );
  }

export default ClimateChange