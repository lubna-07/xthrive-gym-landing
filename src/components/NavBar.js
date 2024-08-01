import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/navbar.css'; // Assuming you have a styles.css file for custom styles

const NavBar = () => {
    return (
        <div className="nav-container">
            <nav className="with-offer absolute transparent fixed outOfSight scrolled">
                <a href="/four-week-trial">
                    <div className="nav-utility bg-brand-secondary text-center promo-bar" style={{ height: '54px', lineHeight: '52px' }}>
                        <div className="module">
                            <span className="uppercase color-white" style={{ marginLeft: '8px' }}>
                                Get started today with a 4 week trial
                                <i className="ti-arrow-right visible-xs-initial"></i>
                            </span>
                        </div>
                        <div className="module">
                            <button className="btn btn-sm btn-white transparent">Claim offer</button>
                        </div>
                    </div>
                </a>

                {/* <div className="nav-bar">
                    <div className="module left">
                        <a href="https://www.opexgyms.com/">
                            <img alt="OPEX Gyms Logo" className="logo logo-light" src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-logo_white.png"/>
                            <img alt="OPEX Gyms Logo" className="logo logo-dark" src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-logo_black.png" />
                        </a>
                    </div>
                    <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
                        <i className="ti-menu"></i>
                    </div>
                    <div className="module-group right">
                        <div className="module left">
                            <ul className="menu">
                                <li>
                                    <a href="/about/what-is-opex">What is OPEX?</a>
                                </li>
                                <li>
                                    <a href="/about/how-it-works">How it works</a>
                                </li>
                                <li>
                                    <a href="/about/our-philosophy">Our Philosophy</a>
                                </li>
                                <li>
                                    <a href="/testimonials">Testimonials</a>
                                </li>
                                <li>
                                    <a href="/blog">Blog</a>
                                </li>
                                <li>
                                    <a href="https://opexfitness.myshopify.com/">Shop</a>
                                </li>
                            </ul>
                        </div>
                        <a className="module right nav-cta" href="https://www.opexgyms.com/find-a-gym">
                            <span>Find a gym</span>
                        </a>
                    </div>
                </div> */}
            </nav>
        </div>
    );
};

export default NavBar;
