import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/landing/header.css'; // Assuming you have a styles.css file for custom styles
import MenuBar from '../common/MenuBar';
import MenuBarBlack from '../common/MenuBarBlack';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 700) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='homePage'>
            <section className="page-title page-title-1 image-bg overlay bg-dark-overlay-new h-600px">
                {isScrolled ? <MenuBarBlack /> : <MenuBar />}
                <div
                    className="background-image-holder fadeIn"
                    style={{ background: 'url("https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-1.jpg")' }}
                >
                    <img
                        alt="OPEX Gyms Home"
                        className="background-image"
                        src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-1.jpg"
                        style={{ display: 'none' }}
                    />
                </div>
                <div className="homeContainer page-title-section">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="large bold h1">THE SCIENCE AND PHILOSOPHY BEHIND THE OPEX METHOD</h1>
                            <h1 className="lead mb40 h1">Our Philosophy on Movement, Coaching & Life</h1>
                            <Link to="/find-a-gym" className="btn btn-xl btn-white mb0">
                                Find an XTHRIVE
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;
