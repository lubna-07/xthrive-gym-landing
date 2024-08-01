import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/titleblock.css'; // Assuming you have a styles.css file for custom styles
import MenuBar from './MenuBar';

const TitleBlock = () => {
    return (
        <section className="page-title page-title-1 image-bg overlay bg-dark-overlay-new h-600px">
            <MenuBar/>
            {/* <div
                className="background-image-holder fadeIn"
                style={{ background: 'url("https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-1.jpg")' }}
            >
                <img
                    alt="OPEX Gyms Home"
                    className="background-image"
                    src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-1.jpg"
                    style={{ display: 'none' }}
                />
            </div> */}
            <div className="container page-title-section">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1 className="large bold h1">RESULTS, RELATIONSHIPS, FUN</h1>
                        <h1 className="lead mb40 h1">Experience fitness designed for you</h1>
                        <a className="btn btn-xl btn-white mb0" href="https://www.opexgyms.com/find-a-gym">
                            Find an OPEX Gym near you
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TitleBlock;
