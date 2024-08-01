import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/whatisopex.css'; // Assuming you have a styles.css file for custom styles
import { FaPlay } from "react-icons/fa6";
import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Video from './Video';


const WhatIsOpex = () => {
    return (
        <section className="bg-secondary pt64 pb112">
            <div className="container">
                <div className="row v-align-children pt32">
                    <div className="col-md-6 col-sm-6 mb-xs-40 content-block">
                        <h2 className="content-title uppercase color-brand-secondary">
                            Experience fitness designed for you
                        </h2>
                        <div className="content-body mb32">
                            <p>
                                OPEX is more than just an hour in the gym. It's an individualized fitness + lifestyle prescription that moves with your life.
                                <br /><br />
                                Based on science and designed for the busy lifestyle of today, it's the clearest path from where you are to where you want to go.
                            </p>
                        </div>
                        <a className="btn btn-xl btn-brand-secondary" href="/what-is-opex">
                            What is OPEX?
                        </a>
                    </div>
                    {/* <div className="col-md-4 col-sm-4 mb-xs-40 content-block pt42">
                        <img
                            alt="OPEX Gyms"
                            className="background-image"
                            src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-vid1.jpg"
                        />
                        <div className="play-button btn-modal inline large mt-xs-0" modal-link="0"><FaPlay size={50} className='play-icon'/></div>                      
                        <div className="modal-container mb0" style={{ position: 'absolute', top: '45%', right: '18%' }}>
                            <div className="foundry_modal no-bg" style={{ width: '100%', maxWidth: '100%', height: '100%' }}>
                                <iframe
                                    allowFullScreen="allowFullScreen"
                                    data-autoplay="1"
                                    data-provider="vimeo"
                                    data-video-id="348877110"
                                    style={{ height: '100%' }}
                                    data-src="https://player.vimeo.com/video/348877110?badge=0&amp;title=0&amp;byline=0&amp;title=0&amp;autoplay=1"
                                ></iframe>
                            </div>
                        </div>
                    </div> */}
                    <Video/>
                </div>
            </div>
        </section>
    );
};

export default WhatIsOpex;
