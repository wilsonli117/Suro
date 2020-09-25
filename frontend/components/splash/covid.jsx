import React from 'react';

const Covid = props => {
    return (
        <div className="covid">
            <div className="div-city"></div>
            <div className="insurance">
                <p>INSURANCE PROVIDER</p>
                <button><img src={window.insuranceURL} alt="Nationwide is on your side" /></button>
            </div>

            <p>Hit the road confidently</p>
            <div className="safe-sharing"><h2>Safe car sharing while navigating COVID-19</h2></div>
            <ul>
                <li>
                    <img src={window.cleaningURL} />
                    <div>Clean & disinfected cars</div>
                    <p>The enhanced cleaning policy requires hosts to clean & disinfect their cars so you can feel good behind the wheel.</p>
                    <button className="learn-button">Learn more</button>
                </li>
                <li>
                    <img src={window.hearthandURL} />
                    <div>Contactless check-in options</div>
                    <p>Maintain physical distance during check-in and checkout with a variety of remote access options.</p>
                    <button className="learn-button">Learn more</button>
                </li>
                <li>
                    <img src={window.thumbsupURL} />
                    <div>Flexible cancellations</div>
                    <p>Cancel for free up to 24 hours before your trip starts. Plans can change and it helps to be flexible when they do.</p>
                    <button className="learn-button">Learn more</button>
                </li>
            </ul>
        </div>
    )
}

export default Covid;