import React from 'react';

const Search = props => {
    return (
            <div className='search'>
                <img className="slashes" src={window.slashesURL}/>
        
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
    )
}

export default Search;