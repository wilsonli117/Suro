import React from 'react';

const HostLearn = () => {
    return (
        <div className="host-learn-container">
            <div className="host-learn-text-container">
                <h2>Share your car, earn extra cash</h2>
                <p>Cover your monthly car payments or simply earn some extra cash by sharing your car on Turo whenever you’re not using it.</p>
                <p>You’re covered with up to $750,000 in liability insurance from Liberty Mutual, and your car is contractually protected against theft and physical damage.*</p>
                <button>Learn more</button>
            </div>
            <img src={window.hostcashURL}/>
        </div>
    )
}

export default HostLearn;