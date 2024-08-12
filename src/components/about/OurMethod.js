import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/about/our-method.css';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import Image from '../Image';


const OurMethod = () => {
    return (
        <section className="pt64 pb112">
            <div className="container">
                <div className="row v-align-children pt32">
                    <div className="col-md-5 col-sm-6 mb-xs-40 content-block p20">
                        <h2 className="content-title uppercase color-brand-secondary">
                            Our method
                        </h2>
                        <div className="content-body mb32">
                            <p>
                                The most effective way to deliver results is a professional coach designing and delivering a program created for your unique goals, function, needs and lifestyle.
                                <br /><br />
                                That’s what an OPEX coaches does, your program evolves and progresses as you do, so you always receive the perfect balance of challenge and support that you need to grow.
                                <br /><br />
                                OPEX Gyms is the evolution of personal training. We take personalization to the next level in an environment that teaches you to take ownership of your fitness, and at a fraction of the cost.

                            </p>
                        </div>
                        <Button
                            variant="contained"
                            to={'/about/our-philosophy'}
                            component={Link}
                            sx={{
                                minWidth: '200px',
                                height: '50px',
                                lineHeight : '46px',
                                background: '#000000 !important',
                                borderColor: '#000000',
                                color: '#fff !important',
                                borderRadius: '0',
                                fontWeight: '700',
                                fontSize : '12px',
                                letterSpacing : '1px',
                                '&:hover': {
                                    backgroundColor: '#f2f2f2 !important',
                                    color: '#000000 !important',
                                    border : '2px solid'
                                },
                                alignSelf: 'flex-start'
                            }}
                        >
                            Learn More
                        </Button>
                    </div>
                    <Image src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-method.jpg"/>
                </div>
            </div>
        </section>
    );
};

export default OurMethod;

