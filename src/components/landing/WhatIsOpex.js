import React from 'react';
import Video from './Video';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/landing/whatisopex.css';


const WhatIsOpex = () => {
    return (
        <section className="bg-secondary pt64 pb112">
            <div className="container">
                <div className="row v-align-children pt32">
                    <div className="col-md-6 col-sm-6 mb-xs-40 content-block">
                        <h2 className="content-title uppercase color-brand-secondary">
                        Experience Fitness Perfectly Crafted for You
                        </h2>
                        <div className="content-body mb32">
                            <p>
                            At xthrive.fit Gym, our science-based training methods are designed for maximum effectiveness in strength and conditioning, all under the guidance of experienced coaches.
                            <br /><br />
                            The gym fosters a focused approach with a supportive community, ensuring a motivating and inclusive training environment.  
                            </p>

                            
                        </div>
                        <a className="btn btn-xl btn-brand-secondary" href="/what-is-opex">
                            What is Xthrive?
                        </a>
                    </div>
                    <Video/>
                </div>
            </div>
        </section>
    );
};

export default WhatIsOpex;
