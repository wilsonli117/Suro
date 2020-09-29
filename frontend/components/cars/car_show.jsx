import React from 'react'
import Map from '../map/map';

class CarShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0
        }
    }

    componentDidMount() {
        this.props.fetchcar(this.props.match.params.carId);
        this.setState({photoIndex: 0});
    }

    handleCarouselClick(dir) {
        if (dir === 'left') {
            (!this.state.photoIndex) ? this.setState({photoIndex: this.props.car.photoURLs.length - 1}) :
            this.setState({photoIndex: this.state.photoIndex - 1 })
        } else {
            this.state.photoIndex === this.props.car.photoURLs.length - 1 ? this.setState({photoIndex: 0}) :
                this.setState({ photoIndex: this.state.photoIndex + 1 })
        }
    }

    render() {
        if (!this.props.car) return null;

        return (
        <>
            <div className="photo-carousel">
                <div className="photo-carousel-left" onClick={() => this.handleCarouselClick('left')}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <img src={`${this.props.car.photoURLs[this.state.photoIndex]}`}/>
                <p>{`${this.state.photoIndex + 1} of ${this.props.car.photoURLs.length}`}</p>
                <div className="photo-carousel-right" onClick={() => this.handleCarouselClick('right')}>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
        </>
        )
    }
}

export default CarShow;