import React, { useState } from 'react';
// import '../../css/landing/process.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-material-ui-carousel';
import { Paper, Grid, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';

const Testimonials2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const theme = useTheme();
    const isSmOrDown = useMediaQuery(theme.breakpoints.down('sm'));

    const items = [
        {
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-step1.jpg",
            clientName: "Andrew Hunter"
        },
        {
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-step2.jpg",
            clientName: "Phil Jones"
        },
        {
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-step3.jpg",
            clientName: "Bruno Fernandes"
        },
        {
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-step4.jpg",
            clientName: "Paul Pogba"
        },
        {
            clientImage: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-step5.jpg",
            clientName: "Marcus Rashford"
        }
    ];

    const steps = [
        {
            header: "1",
            name: "Consultation",
            description: "Introductions are about gyms. Our consultation is about YOU. You'll sit down with a professional coach and will discuss where you're at and where you want to go in fitness."
        },
        {
            header: "2",
            name: "Assessment",
            description: "Over 3 sessions, your very own professional coach will take you through a Body, Movement, and Work Capacity Assessment to establish a baseline to work from."
        },
        {
            header: "3",
            name: "Training",
            description: "Train at an OPEX Gym when it suits you. All of your sessions are done under the watchful eye of skilled coaches and amongst welcoming, like-minded individuals."
        },
        {
            header: "4",
            name: "Fit Lifestyle",
            description: "The gym is only 1 hour of your day. What happens in the other 23 hours? Optimizing your nutrition, lifestyle, and recovery helps us maximize the results you get from your time in the gym."
        },
        {
            header: "5",
            name: "Ongoing Support",
            description: "Our support continues after you leave the gym. We provide continuous guidance to ensure your fitness journey is successful."
        }
    ];

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % steps.length);
    };

    return (
        <div>
            <div className="container mt100 mb60">
                <div className="row mb0">
                    <div className="col-sm-12 text-center title-block">
                        <h2 className="uppercase color-brand-secondary">Training for Lasting Results</h2>
                        <p className="lead mb0">Your Training Experience at xthrive.fit</p>
                    </div>
                </div>
            </div>
            <Box
                sx={{
                    width: '80%',
                    padding: '20px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* Steps Container */}
                <Box 
                    sx={{
                        width: '100%',
                        marginBottom: '40px',  // Increased margin to separate the steps from the black line
                    }}
                >
                    <Grid container spacing={3} justifyContent="space-between">
                        {steps.map((step, index) => (
                            <Grid item key={index} xs={12} sm={6} md={2}>
                                <Box 
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Box 
                                        sx={{
                                            borderRadius: '50%',
                                            width: '70px', 
                                            height: '70px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: activeIndex === index ? '#3cb4e5' : '#fff',
                                            color: activeIndex === index ? '#fff' : '#3cb4e5',
                                            border: '2px solid #3cb4e5',
                                            cursor: 'pointer',
                                            fontWeight: activeIndex === index ? 'bold' : 'normal',
                                            fontSize: '30px',
                                            marginBottom: '8px',
                                            position: 'relative',
                                            zIndex: 1,
                                        }}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        {step.header}
                                    </Box>
                                    <Typography 
                                        variant="subtitle1" 
                                        sx={{
                                            color: activeIndex === index ? '#3cb4e5' : '#4f9ac6', 
                                            fontWeight: activeIndex === index ? 'bold' : 'normal',
                                        }}
                                    >
                                        {step.name}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                
                {/* Black Line */}
                <Box 
                    sx={{
                        position: 'relative',
                        width: '100%',
                        marginBottom: '20px', // Adjust this value for the space below the black line
                    }}
                >
                    <Box 
                        sx={{
                            position: 'absolute',
                            top: 0, // Removed top offset so it stays separated from the steps
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: '#aaa', // Light grey line
                        }}
                    />
                </Box>

                <Carousel
                    autoPlay={false}
                    index={activeIndex}
                    onChange={(index) => setActiveIndex(index)}
                    navButtonsAlwaysInvisible
                    sx={{
                        width: '100%',
                        height: isSmOrDown ? 'auto' : '80vh',
                        marginTop: '0px',
                    }}
                >
                    {items.map((item, index) => (
                        <Paper 
                            key={index} 
                            sx={{
                                height: isSmOrDown ? 'auto' : '70vh', 
                                display: 'flex', 
                                alignItems: 'center', 
                                flexDirection: isSmOrDown ? 'column' : 'row'
                            }}
                        >
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
                                        {steps[index].header} - {steps[index].name}
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
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                backgroundColor: 'black',
                                                color: 'white',
                                                fontWeight: 'bold'
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
}

export default Testimonials2;
