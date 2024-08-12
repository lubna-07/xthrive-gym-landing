import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';

const OurProcess = () => {
    return (
        <Box sx={{ backgroundColor: '#000', padding: { xs: '40px 0', md: '80px 0 160px' } }}>
            <Container>
                {/* Top Section */}
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    textAlign="center"
                >
                    <Grid item xs={12} sm={10} display="flex" flexDirection="column" alignItems="center">
                        <img
                            alt="OPEX Gyms Badge"
                            src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-honor-badge2_white.png"
                            style={{ maxWidth: '350px', marginBottom: '32px' }}
                        />
                        <Typography variant="h4" component="h1" sx={{ paddingTop: '40px', paddingBottom: '40px', color: '#fff', fontSize: '46px' }}>
                            Our Process - Crafted to Honor <br /> Your Individuality
                        </Typography>
                    </Grid>
                </Grid>


                {/* Philosophy Cards Section */}
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <Box textAlign="center" sx={{ backgroundColor: '#fff'}}>
                            <Typography variant="h5" component="h2" fontWeight="bold" sx={{
                                fontWeight: 'bold',
                                fontSize: '3rem',
                                marginTop: '24px',
                                padding: '25px',
                            }}>
                                Movement
                            </Typography>
                            <Typography variant="body1" component="p" sx={{  marginBottom: '16px', padding: '20px' }}>
                                We believe fitness can be a powerful medium for discovering fulfillment in all areas of our life. By connecting to our physical bodies, we connect with what it means to truly live.
                            </Typography>
                            <img
                                alt="OPEX Gyms Movement"
                                src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-movement.jpg"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box textAlign="center" sx={{ backgroundColor: '#fff'}}>
                            <Typography variant="h5" component="h2" fontWeight="bold" sx={{
                                fontWeight: 'bold',
                                fontSize: '3rem',
                                marginTop: '24px',
                                padding: '25px',
                            }}>
                                Coaching
                            </Typography>
                            <Typography variant="body1" component="p" sx={{  marginBottom: '16px', padding: '20px' }}>
                                It's a hard path to walk alone, and we know that strong relationships drive results. A professional coach and a supportive community provide the intricate balance of support and challenge.
                            </Typography>
                            <img
                                alt="OPEX Gyms Coaching"
                                src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-coaching2.jpg"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box textAlign="center" sx={{ backgroundColor: '#fff'}}>
                            <Typography variant="h5" component="h2" fontWeight="bold" sx={{
                                fontWeight: 'bold',
                                fontSize: '3rem',
                                marginTop: '24px',
                                padding: '25px',
                            }}>
                                Lifestyle
                            </Typography>
                            <Typography variant="body1" component="p" sx={{marginBottom: '16px', padding: '20px' }}>
                                You are born to move, but your training can't just begin and end at the gym doors. Our all-encompassing approach addresses the very foundations of your lifestyle in pursuit of your success.
                            </Typography>
                            <img
                                alt="OPEX Gyms Lifestyle"
                                src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-11.jpg"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                {/* Bottom Section */}
                <Grid container justifyContent="center" textAlign="center" sx={{ marginTop: '80px' }}>
                    <Grid item xs={12} sm={10}>
                        <Typography variant="h4" component="h1" sx={{ paddingTop: '40px', paddingBottom: '40px', color: '#fff', fontSize: '46px' }}>
                        Our Principles for Living a Larger Life
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};


export default OurProcess;
