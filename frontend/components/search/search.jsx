import React from 'react';

const Search = props => {
    return (
        <>
            <div className='search'>
                <img className="slashes" src="/assets/slashes.png"/>
        
                    <div className="search-div">
                    <h1>Way better than a rental car</h1>
                    <p>Book unforgettable cars from trusted hosts around the world</p>
                    <div className="search-bar">
                        <div className="where">
                            <p>Where</p>
                            <label htmlFor="where"></label>
                            <input type="text" placeholder="City, airport, address or hotel" id="where"/>
                        </div>
                        <div className="from">
                            <p>From</p>
                            <div>
                                <label htmlFor="from-date"></label>
                                <select id="from-date">
                                    <option>11/07/2020 </option>
                                </select>
                                <label htmlFor="from-time"></label>
                                <select id="from-time" >
                                    <option value="18:00">6:00 PM </option>
                                </select>

                            </div>
                        </div>
                        <div className="until">
                            <p>Until</p>
                            <div>
                                <label htmlFor="until-date"></label>
                                <select id="until-date">
                                    <option>11/08/2020 </option>
                                </select>
                                <label htmlFor="until-time"></label>
                                <select id="until-time" >
                                    <option value="20:00">10:00 PM </option>
                                </select>

                            </div>
                        </div>
                        <button><i className="fas fa-search"></i></button>
                    </div>

                </div>
              
            </div>
            <div className="covid">
                <div className="div-city"></div>
                <div className="insurance">
                    <p>INSURANCE PROVIDER</p>
                    <button><img src="/assets/insurance.png" alt="Nationwide is on your side" /></button>
                </div>

                <p>Hit the road confidently</p>
                <div className="safe-sharing"><h2>Safe car sharing while navigating COVID-19</h2></div>
                <ul>
                    <li>
                        <img src="/assets/cleaning.png"/>
                        <div>Clean & disinfected cars</div>
                        <p>The enhanced cleaning policy requires hosts to clean & disinfect their cars so you can feel good behind the wheel.</p>
                        <button className="learn-button">Learn more</button>
                    </li>
                    <li>
                        <img src="/assets/hearthand"/>
                        <div>Contactless check-in options</div>
                        <p>Maintain physical distance during check-in and checkout with a variety of remote access options.</p>
                        <button className="learn-button">Learn more</button>
                    </li>
                    <li>
                        <img src="/assets/thumbsup"/>
                        <div>Flexible cancellations</div>
                        <p>Cancel for free up to 24 hours before your trip starts. Plans can change and it helps to be flexible when they do.</p>
                        <button className="learn-button">Learn more</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Search;