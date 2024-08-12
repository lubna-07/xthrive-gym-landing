import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/about/our-method.css';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import Image from '../Image';


const OurCoaches = () => {
    return (
        <section className="bg-secondary pt64 pb112">
            <div className="container">
                <div className="row v-align-children pt32">
                    <Image src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-coaching.jpg"/>
                    <div className="col-md-5 col-sm-6 mb-xs-40 content-block p20">
                        <h2 className="content-title uppercase color-brand-secondary">
                        Our coaches
                        </h2>
                        <div className="content-body mb32">
                            <p>
                            Our coaches have mastered the delivery of Personalized Fitness coaching through the OPEX Fitness Education System. OPEX coaches are career coaches committed to ongoing study and practical experience, they are equipped with the knowledge to thoroughly assess their clients and design complete fitness programs, to include nourishment and lifestyle.
                            <br /><br />
                            Our worldwide network of OPEX coaches are deeply committed to helping people discover their best self through personalized fitness. The Coach-Client relationship is the foundation of OPEX Gyms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCoaches;

