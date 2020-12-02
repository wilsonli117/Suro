import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.formatDate = this.formatDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStartDayChange = this.handleStartDayChange.bind(this);
        this.handleEndDayChange = this.handleEndDayChange.bind(this);
        this.state = {
            startDate: new Date(),
            endDate: new Date()
        }
    }

    componentDidMount() {
        const searchbox = document.getElementById('search-box')

        this.autocomplete = new google.maps.places.Autocomplete(searchbox);
    }

    formatDate(date, format, locale) {
        // const month = date.getMonth() > 9 ? `${date.getMonth() + 1}` : `0${date.getMonth() + 1}`
        // const day = date.getDate() > 9 ? `${date.getDate()}` : `0${date.getDate()}`
        // const year = `${date.getFullYear()}`;
        // return `${month}-${day}-${year}`;
        
        return date.toLocaleDateString();
    }

    handleStartDayChange(selectedDay) {
        if (selectedDay < this.state.startDate) {
            this.setState({ startDate: selectedDay })
        }  else {
            this.setState({ startDate: selectedDay, endDate: selectedDay })
        }
        
    }

    handleEndDayChange(selectedDay) {
        if (selectedDay < this.state.startDate) {
            this.setState({ startDate: selectedDay, endDate: selectedDay })
        } else {
            this.setState({ endDate: selectedDay })
        }
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
            this.props.updateFilter("dates", this.state);
            this.props.history.push("/cars");
        } else {
            this.props.updateFilter("dates", this.state);
            this.props.history.push("/cars");
        }
    }

    render() {
        const disabled = {
            before: new Date()
        }
        const selectedDays = {
            from: this.state.startDate,
            to: this.state.endDate
        }
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
                                        <DayPickerInput 
                                            
                                            formatDate={this.formatDate}
                                            value={this.formatDate(this.state.startDate)}
                                            dayPickerProps={{
                                                disabledDays: disabled,
                                                selectedDays: selectedDays
                                            }}
                                            onDayChange={this.handleStartDayChange}
                                        />
                                        <i className="fas fa-angle-down"></i>
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
                                        <DayPickerInput
                                            
                                            formatDate={this.formatDate}
                                            value={this.formatDate(this.state.endDate)}
                                            dayPickerProps={{
                                                disabledDays: disabled,
                                                selectedDays: selectedDays 
                                            }}
                                            onDayChange={this.handleEndDayChange}
                                        />
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