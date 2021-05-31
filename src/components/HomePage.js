import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
class Home extends React.Component {

    render() {
        return (
            
            <main className="home">
                <div className="grid-full single-feature email-capture">
                    <img src="./assets/img/home.jpg" alt="Woman in double exposure with city" />
                    <section className="x">
                        <div className="c l6 text truth">
                            <h1>Everyone Should Know the Truth</h1>
                            <p>Until then, atleast <em>you</em> can. Get The Truth, our free daily email of the world’s most important <span>stories</span> facts.</p>  
                            <p className="text-cta"><Link to="/#understand">Get The Truth</Link></p> 
                            <p>Also on: Instagram, Twitter, Facebook and Alexa.</p>
                        </div>
                    </section>
                </div>
                <section className="grid-full latest-features">
                    <ul className="x article-list">
                        <li className="c l4">
                            <article>
                                <Link to="./climate-change">
                                    <img src="./assets/img/climate-change/webp/helicopter-768.webp" alt="Helictoper over wildfire" />
                                    <span>Sea level rise <small>See how the world will change over the next 90 years</small></span>
                                </Link>
                            </article>
                        </li>
                        <li className="c l4">
                            <article>
                                <Link to="./media-monitor">
                                    <img src="../assets/img/media_monitor.jpg" alt="Media Monitor" />
                                    <span>Media Monitor <small>Think media is impartial? Think again</small></span>
                                </Link>
                            </article>
                        </li>
                        <li className="c l4">
                            <article>
                                <Link to="/covid-19/europe">
                                    <img src="../assets/img/Covid-19-deaths-per-day-per-country-map-Europe.jpg" alt="Covid-19 deaths per day per country map Europe" />
                                    <span>Covid-19 in Europe <small>Watch Covid-19 spread across Europe in 60 seconds</small></span>
                                </Link>
                            </article>
                        </li>
                    </ul>
                </section>
                <div className="grid-full single-feature email-capture complex-change" id="understand">
                    <img src="assets/img/home_page.jpg" alt="Man with laptop in double exposure" />
                    <section className="x">
                        <div className="c l6 text truth">
                            <h2>Understand complex change in minutes.</h2>
                            <p>Get The Truth, our daily email of the world’s most important facts.</p>   
                            <p>Also on: Instagram, Twitter, Facebook and Alexa.</p> 
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}
export default Home;