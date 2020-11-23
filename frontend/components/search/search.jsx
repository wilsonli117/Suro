import React from 'react';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const searchbox = document.getElementById('search-box')

        this.autocomplete = new google.maps.places.Autocomplete(searchbox);
    }

    handleSubmit(e) {
        e.preventDefault();
       
        if (this.autocomplete.getPlace()) {
           
            const place = this.autocomplete.getPlace().geometry.location;
            const lat = place.lat();
            const lng = place.lng();
            const center = { center: { lat, lng } }
            sessionStorage.clear();
            sessionStorage.setItem('lat', lat)
            sessionStorage.setItem('lng', lng)
            this.props.locationFilter(center);
            this.props.history.push("/cars");
        } else {
            this.props.history.push("/cars");
        }
    }


    render() {
        return (
                <div className='search'>
                    <img className="slashes" src={window.slashesURL}/>
                        <div className="search-div">
                        <h1>Way better than a rental car</h1>
                        <p>Book unforgettable cars from trusted hosts around the world</p>
                        
                            <form className="search-bar">
                                <div className="where">
                                    <p>Where</p>
                                    <label htmlFor="search-box"></label>
                                    <input type="text" id="search-box" placeholder="City, airport, address or hotel" />
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
                                            <option>11/09/2020 </option>
                                        </select>
                                        <label htmlFor="until-time"></label>
                                        <select id="until-time" >
                                            <option value="20:00">10:00 PM </option>
                                        </select>

                                    </div>
                                </div>
                                <button onClick={this.handleSubmit}><i className="fas fa-search"></i></button>
                            </form>
                        

                    </div>
                
                </div>
        )
    }
}

export default Search;