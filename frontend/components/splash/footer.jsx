import React from 'react';

const Footer = props => {
    return (
            <footer className="footer-container">
                <div className="disclaimer">
                    <div>*</div>
                    <p>All references or similarities to Turo, Liberty Mutual, or any other copyrighted works are for educational purposes only.</p>
                </div>
                
                <div className="footer-lists">
                    <ul>
                        <h2>Suro</h2>
                        <li>About</li>
                        <li>Team</li>
                        <li>Policies</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>OpenRoad</li>
                        <li>Turo shop</li>
                    </ul>
                    <ul>
                        <h2>Locations</h2>
                        <li>USA (EN)</li>
                        <li>Canada (EN)</li>
                        <li>Canada (FR)</li>
                        <li>UK (EN)</li>
                    </ul>
                    <ul>
                        <h2>Explore</h2>
                        <li>Book a car</li>
                        <li>Weddings</li>
                        <li>Trust & safety</li>
                        <li>FAQs</li>
                        <li>Get help</li>
                    </ul>
                    <ul>
                        <h2>Hosting</h2>
                        <li>List your car</li>
                        <li>Carculator</li>
                        <li>All-Star Hosts</li>
                        <li>Host tools</li>
                        <li>Insurance & protection</li>
                        <li>FAQs</li>
                    </ul>
                    <div className="footer-icons">
                        <button><i className="fab fa-github-square"></i></button>
                        <button><i className="fab fa-twitter"></i></button>
                        <button><i className="fab fa-linkedin"></i></button>
                        <button><i className="fab fa-instagram"></i></button>
                    </div>
                </div>
                <ul className="footer-copyright">
                    <div>&copy;2020 Suro</div>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                </ul>
           </footer >
    )
}

export default Footer;