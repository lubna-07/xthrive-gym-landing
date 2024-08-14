import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Grid, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';

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

        <Box
            sx={{
                width: '100%',
                padding: '20px',
                margin: '0 auto',
                alignItems: 'center',
            }}>
            <Carousel
                sx={{
                    width: '100%',
                    height: isSmOrDown ? 'auto' : '80vh',
                }}>
                {items.map((item, index) => (
                    <Paper key={index} style={{ height: isSmOrDown ? 'auto' : '70vh', display: 'flex', alignItems: 'center' }}>
                        <Grid container spacing={0} style={{ height: '100%' }}>
                            <Grid
                                item xs={12} md={6}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                }}>
                                <img
                                    src={item.clientImage}
                                    alt={item.clientName}
                                    style={{
                                        height: isSmOrDown ? 'auto' : '70vh',
                                        width: '100%',
                                        objectFit: 'cover',
                                        maxWidth: '100%',
                                    }}/>
                            </Grid>
                            <Grid
                                item xs={12} md={6}
                                style={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '20px'
                                }}
                            >
                                <Typography variant="body1" sx={{ maxWidth: '500px', textAlign: 'left', marginBottom: '20px', fontFamily: 'sans-serif' }}>
                                    {item.testimonial}
                                </Typography>
                                <Box sx={{ textAlign: 'left', marginBottom: '20px' }}>
                                    <Typography variant="subtitle1" sx={{ fontFamily: 'sans-serif' }}>
                                        XThrive Client: {item.clientName}
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: 'left', marginBottom: '20px' }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            width: '200px',
                                            backgroundColor: 'black',
                                            borderColor: '#3cb4e5',
                                            color: '#3cb4e5',
                                            border: '2px solid',
                                            '&:hover': {
                                                backgroundColor: '#3cb4e5',
                                                color: 'black',
                                            },
                                        }}>
                                        See Full Story
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </Carousel>
        </Box>
    );
};

export default Testimonials;
