import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/about/our-method.css';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import Image from '../Image';


const OurPeople = () => {
    return (
        <section className="pt64 pb112">
            <div className="container">
                <div className="row v-align-children pt32">
                    <div className="col-md-5 col-sm-6 mb-xs-40 content-block p20">
                        <h2 className="content-title uppercase color-brand-secondary">
                        Our people
                        </h2>
                        <div className="content-body mb32">
                            <p>
                            When you walk into an OPEX Gym, you are surrounded by a community united by a constant desire for growth. 
                            <br /><br />
                            Our people seek to live in line with their core values and honor their bodies through balance, energy, rhythm and purpose. They make fitness a priority by creatively incorporating it into their busy lifestyles, rather than searching for unsustainable quick fixes.
                            <br /><br />
                            OPEX is a global community of individuals who know that their best service to society is to become the best versions of themselves. They live for that, every day.
                            </p>
                        </div>
                    </div>
                    <Image src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-people.jpg"/>
                </div>
            </div>
        </section>
    );
};

export default OurPeople;

