import React from 'react';

const Search = props => {
    return (
        <div className='search'>
            <img className="slashes" src="/assets/slashes.png"/>
      
                <div className="search-div">
                <h1>Way better than a rental car</h1>
                <p>Book unforgettable cars from trusted hosts around the world</p>
                <div>
                    <div className="where">Where
                        <label htmlFor="where"></label>
                        <input type="text" placeholder="City, airport, address or hotel" id="where"/>
                    </div>
                    <div className="from">From
                        <label htmlFor="from-date"></label>
                        <input type="date" id="from-date"/>
                        <label htmlFor="from-time"></label>
                        <input type="time" id="from-time"/>
                    </div>
                    <div className="until">From
                        <label htmlFor="until-date"></label>
                        <input type="date" id="until-date" />
                        <label htmlFor="until-time"></label>
                        <input type="time" id="until-time" />
                        
                    </div>
                    <i class="fas fa-search"></i>
                </div>

            </div>
        </div>
    )
}

export default Search;