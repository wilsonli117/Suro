import React from 'react'

const Discover = props => {
    return (
        <div className="splash-info-container">

            <p>Skip the rental counter</p>
            <div className="splash-info-container-header"><h2>Discover the world’s largest car sharing marketplace</h2></div>
            <ul className="discover-ul">
                <li>
                    <img src={window.optionsURL} />
                    <div>Endless options</div>
                    <p>Choose from hundreds of models you won’t find anywhere else. Pick it up or get it delivered where you want it.</p>
                </li>
                <li>
                    <img src={window.supportURL} />
                    <div>24/7 customer support</div>
                    <p>Rest easy knowing that everyone in the Turo community is screened, and 24/7 customer support and roadside assistance are just a click away.</p>
                </li>
                <li>
                    <img src={window.shieldcheckURL} />
                    <div>Drive confidently</div>
                    <p>Drive confidently with your choice of protection plans — all plans include varying levels of liability insurance from Liberty Mutual provided through Turo Insurance Agency and physical damage protection.</p>
                </li>
            </ul>
            <button className="book-button">Book the perfect car</button>
        </div>
        
    )
}

export default Discover;