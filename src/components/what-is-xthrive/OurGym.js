import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/about/our-method.css';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import Image from '../common/Image';


const OurGym = () => {
    return (
        <section className="bg-secondary pt64 pb112">
            <div className="container">
                <div className="row v-align-children pt32">
                    <Image src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-coaching.jpg"/>
                    <div className="col-md-6 col-md-offset-1 col-sm-5 col-sm-offset-1 content-block">
                        <h2 className="content-title uppercase color-brand-secondary">
                        Our gyms
                        </h2>
                        <div className="content-body mb32">
                            <p>
                            Our gyms are as diverse as the people who own them, coach in them and train in them, but they all share one common goal: To deliver the best experience in fitness, period.
                            <br /><br />
                            With over 72 locations worldwide, there's an OPEX to welcome you almost everywhere you go.
                            <br /><br />
                            Our gyms see the health of their whole community, not just their members, as their responsibility. This is why you'll often see OPEX Gyms hosting nutrition seminars, open days and healthy lifestyle workshops in their local areas.
                            </p>
                        </div>
                        <br /><br />
                        <Button
                            variant="contained"
                            to={'/about/our-philosophy'}
                            component={Link}
                            sx={{
                                minWidth: '200px',
                                height: '50px',
                                lineHeight : '46px',
                                background: '#3cb4e5 !important',
                                color: '#fff !important',
                                borderRadius: '0',
                                fontWeight: '700',
                                fontSize : '12px',
                                letterSpacing : '1px',
                                '&:hover': {
                                    backgroundColor: '#f2f2f2 !important',
                                    color: '#3cb4e5 !important',
                                    border : '2px solid #3cb4e5 !important'
                                },
                            }}
                        >
                            Find a Xthrive near you
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurGym;

