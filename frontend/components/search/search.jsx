import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { times, parseTime } from '../../util/date_util';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.formatDate = this.formatDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStartDayChange = this.handleStartDayChange.bind(this);
        this.handleEndDayChange = this.handleEndDayChange.bind(this);
        this.handleTimeSelect = this.handleTimeSelect.bind(this);
        this.state = {
            startDate: new Date(),
            endDate: undefined
        }

    }

    componentDidMount() {
        const searchbox = document.getElementById('search-box')

        this.autocomplete = new google.maps.places.Autocomplete(searchbox);

        const tomorrow = new Date();
        tomorrow.setDate(this.state.startDate.getDate() + 1);
        tomorrow.setHours(10);
        tomorrow.setMinutes(0);
        const dayAfterTomorrow = new Date();
        dayAfterTomorrow.setDate(this.state.startDate.getDate() + 2);
        dayAfterTomorrow.setHours(10);
        dayAfterTomorrow.setMinutes(0);

        this.setState({ startDate: tomorrow, endDate: dayAfterTomorrow })
        
    }

    formatDate(date) {   
        if (date) {
            return date.toLocaleDateString();
        }
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

    handleTimeSelect(selectedDate, e) {
        const time = parseTime(e.target.value);
        const hours = time[0];
        const minutes = time[1];
        let newDate;

        if (selectedDate === 'from') {
            newDate = this.state.startDate
            newDate.setHours(hours, minutes);
            this.setState({ startDate: newDate })
            
        } else {
            newDate = this.state.endDate
            newDate.setHours(hours, minutes);
            
            this.setState({ endDate: newDate })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
       
        if (this.autocomplete.getPlace()) {
            const place = this.autocomplete.getPlace().geometry.location;
            const lat = place.lat();
            const lng = place.lng();
            const center = { center: { lat, lng } }
            sessionStorage.setItem('lat', lat)
            sessionStorage.setItem('lng', lng)
            sessionStorage.setItem('startdate', this.state.startDate.toString());
            sessionStorage.setItem('enddate', this.state.endDate.toString());
            this.props.updateFilter("dates", this.state);
            this.props.locationFilter(center);
            this.props.history.push("/cars");
        } 
    }

    render() {
        const disabled = {
            before: this.state.startDate
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
                                        <select id="from-time" defaultValue='10:00 AM' onChange={(e) => this.handleTimeSelect('from', e)}>
                                            {times.map((time, idx) => {
                                                return <option value={time} key={idx}>{time}</option>               
                                            })}
                                        </select>
                                        <i className="fas fa-angle-down"></i>
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
                                        <i className="fas fa-angle-down"></i>
                                        <label htmlFor="until-time"></label>
                                        <select id="until-time" defaultValue='10:00 AM' onChange={(e) => this.handleTimeSelect('until', e)}>
                                            {times.map((time, idx) => {
                                                return <option value={time} key={idx}>{time}</option>
                                            })}
                                        </select>
                                        <i className="fas fa-angle-down"></i>
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