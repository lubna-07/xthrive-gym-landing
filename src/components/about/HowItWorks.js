import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Grid, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/about/how-it-works.css'; 

const HowItWorks = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const theme = useTheme();
    const isSmOrDown = useMediaQuery(theme.breakpoints.down('sm'));

    const items = [
        {
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-step1.jpg",
            clientName: "Andrew hunter"
        },
        {
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-step2.jpg",
            clientName: "phil jones"
        },
        {
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-step3.jpg",
            clientName: "Bruno Fernandes"
        },
        {
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-step4.jpg",
            clientName: "Andrew hunter"
        },
        {
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-step5.jpg",
            clientName: "phil jones"
        },
    ];

    const steps = [
        {
            header: "Step 1",
            name: "Consultation",
            description: "Introductions are about gyms. Our consultation is about YOU. You'll sit down with a professional coach and will discuss where you're at and where you want to go in fitness."
        },
        {
            header: "Step 2",
            name: "Assessment",
            description: "Over 3 sessions, your very own professional coach will take you through a Body, Movement, and Work Capacity Assessment to establish a baseline to work from."
        },
        {
            header: "Step 3",
            name: "Training",
            description: "Train at an OPEX Gym when it suits you. All of your sessions are done under the watchful eye of skilled coaches and amongst welcoming, like-minded individuals."
        },
        {
            header: "Step 4",
            name: "Lifestyle",
            description: "The gym is only 1 hour of your day. What happens in the other 23 hours? Optimizing your nutrition, lifestyle, and recovery helps us maximize the results you get from your time in the gym."
        },
        {
            header: "Step 5",
            name: "Results",
            description: "Our coaches don’t just talk about results, they deliver them. We help define what fitness means to you, and evolve your goals and training as you grow. Meeting one-on-one to align, review progress, and game plan next steps will become a regular part of your OPEX experience."
        }
    ];

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % steps.length);
    };

    return (
        <div>
            <div class="container mt100 mb60">
                <div class="row mb0">
                    <div class="col-sm-12 text-center title-block">
                        <h2 class="uppercase color-brand-secondary">How it works</h2>
                    </div>
                </div>
            </div>
            <Box
                sx={{
                    width: '80%',
                    padding: '10px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Carousel
                    autoPlay={false}
                    index={activeIndex}
                    onChange={(index) => setActiveIndex(index)}
                    navButtonsAlwaysInvisible
                    sx={{
                        width: '100%',
                        height: isSmOrDown ? 'auto' : '80vh',
                        marginTop: '0px'
                    }}
                >
                    {items.map((item, index) => (
                        <Paper key={index} sx={{ height: isSmOrDown ? 'auto' : '70vh', display: 'flex', alignItems: 'center', flexDirection: isSmOrDown ? 'column' : 'row' }}>
                            <Grid container spacing={0} sx={{ height: '100%' }}>
                                <Grid
                                    item xs={12} md={6}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <img
                                        src={item.clientImage}
                                        alt={item.clientName}
                                        style={{
                                            height: isSmOrDown ? 'auto' : '70vh',
                                            width: isSmOrDown ? '100%' : '60vw'
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item xs={12} md={6}
                                    sx={{
                                        backgroundColor: '#f2f2f2',
                                        color: 'black',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        padding: '20px',
                                        paddingLeft: isSmOrDown ? '20px' : '120px',
                                        paddingRight: '70px'
                                    }}
                                >
                                    <Typography variant="h6" sx={{ marginBottom: '10px', fontFamily: 'sans-serif', textAlign: 'left' }}>
                                        {steps[index].header}
                                    </Typography>
                                    <Typography variant="h4" sx={{ marginBottom: '20px', fontFamily: 'sans-serif', textAlign: 'left', fontWeight: 'bold' }}>
                                        {steps[index].name}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: '40px', fontFamily: 'sans-serif', maxWidth: '600px', textAlign: 'left' }}>
                                        {steps[index].description}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{
                                            width: '220px',
                                            height: '45px',
                                            backgroundColor: '#f2f2f2',
                                            borderColor: '#00B4D8',
                                            color: 'black',
                                            border: '2px solid',
                                            borderRadius: '0',
                                            fontWeight: '700',
                                            fontSize : '12px',
                                            '&:hover': {
                                                backgroundColor: 'black',
                                                color: 'white',
                                                fontWeight: '700'
                                            },
                                            alignSelf: 'flex-start'
                                        }}
                                    >
                                        {index < steps.length - 1 ? `${steps[index + 1].header}` : 'Sign Up Now'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                </Carousel>
            </Box>
        </div>

    );
};

export default HowItWorks;
