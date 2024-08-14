import React from 'react';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { Container, Grid, Typography } from '@mui/material';
import Testimonial from './Testimonial';
import Signup from '../common/Signup';
import '../../css/testimonials/testimonial.css';
import Header from './Header';


const Testimonials = () => {
    const theme = useTheme();
    const isSmOrDown = useMediaQuery(theme.breakpoints.down('sm'));
    const items = [
        {
            testimonial: "Chad Butler was used to being fit and healthy until he found himself with a serious back injury in 2017. Still unable to walk without a cane, Butler decided to hire OPEX coach Dennis Cheatum at OPEX Franklin in Tennessee in August 2018.",
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/image1.jpeg",
            clientName: "Andrew hunter"
        },
        {
            testimonial: "I was searching for help everywhereI was so tired of being out of shape and unhappy with the way I looked,” said the 35-year-old from ReginaI was so tired of being out of shape and unhappy with the way I looked,” said the 35-year-old from Regina,I was so tired of being out of shape and unhappy with the way I looked,” said the 35-year-old from Regina but I couldn’t find it.so I felt like it was really important for me that I was working with good coaches.",
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/FB_IMG_1558038576669.jpg",
            clientName: "phil jones"
        },
        {
            testimonial: "I was so tired of being out of shape and unhappy with the way I looked,” said the 35-year-old from Regina",
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-testimonial1.jpg",
            clientName: "Bruno Fernandes"
        },
        {
            testimonial: "Chad Butler was used to being fit and healthy until he found himself with a serious back injury in 2017. Still unable to walk without a cane, Butler decided to hire OPEX coach Dennis Cheatum at OPEX Franklin in Tennessee in August 2018.",
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/image1.jpeg",
            clientName: "Andrew hunter"
        },
        {
            testimonial: "I was searching for help everywhereI was so tired of being out of shape and unhappy with the way I looked,” said the 35-year-old from ReginaI was so tired of being out of shape and unhappy with the way I looked,” said the 35-year-old from Regina,I was so tired of being out of shape and unhappy with the way I looked,” said the 35-year-old from Regina but I couldn’t find it.so I felt like it was really important for me that I was working with good coaches.",
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/FB_IMG_1558038576669.jpg",
            clientName: "phil jones"
        },
        {
            testimonial: "I was so tired of being out of shape and unhappy with the way I looked,” said the 35-year-old from Regina",
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-testimonial1.jpg",
            clientName: "Bruno Fernandes"
        }
    ];

    return (
        <>
        <Header/>
            <Box
                sx={{
                    width: '100%',
                    padding: '20px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                <div className="col-sm-12 text-center title-block">
                    <br></br>
                    <h2 className="uppercase color-brand-secondary">Our Client Testimonials</h2>
                    <br></br>
                </div>
                {items.map((item, index) => (
                    <Testimonial
                        key={index}
                        testimonial={item.testimonial}
                        clientImage={item.clientImage}
                        clientName={item.clientName}
                        isSmOrDown={isSmOrDown}
                        bgColor={index % 2 === 0}
                    />
                ))}
            </Box>
            <Container maxWidth="lg">
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{
                            backgroundColor: 'black',
                            minHeight: '150px',
                            padding: '16px',
                            flexDirection: { xs: 'column', sm: 'row' }
                        }}>
                        <Grid item xs={12} sm={8} textAlign="center" mb={{ xs: 2, sm: 0 }}>
                        <h3 className="uppercase testimonial-subheading mb-4 sm:mb-0">Get started at an XTHRIVE near you today</h3>
                        </Grid>
                        <Grid item xs={12} sm={4} textAlign="center">
                            <Button
                                variant="contained"
                                sx={{
                                    minWidth: '200px',
                                    height: '50px',
                                    lineHeight: '46px',
                                    backgroundColor: '#000000',
                                    borderColor: '#fff',
                                    color: '#fff',
                                    borderRadius: '0',
                                    fontWeight: '700',
                                    border: '2px solid',
                                    fontSize: '12px',
                                    letterSpacing: '1px',
                                    '&:hover': {
                                        backgroundColor: '#f2f2f2',
                                        color: '#000000',
                                        border: '2px solid'
                                    },
                                    alignSelf: 'center',
                                }}
                            >
                                Find an Xthrive
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            <Signup />
        </>
    );
};

export default Testimonials;
