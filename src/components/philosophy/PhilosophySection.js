import React from 'react';
import { Box, Grid, Typography, Button, Container } from '@mui/material';

const PhilosophySection = () => {
    return (
        <Box sx={{ py: { xs: 4, sm: 8 }, px: { xs: 2, sm: 0 } }} id="philo-flex">
            <Container maxWidth="lg">
                <Grid container sx={{ mb: 5 }}>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'center', pr: { md: 4 } }}>
                        <img
                            alt="OPEX Gyms"
                            src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-16.jpg"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ backgroundColor: '#3cb4e5', color: 'white', display: 'flex', alignItems: 'center', padding: { xs: 3, sm: 6 }, mt: { xs: 4, md: 0 } }}>
                        <Typography variant="h4">
                            When we understand the power of balance, energy, rhythm, and purpose, all of our daily actions will align to support these four pillars.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container sx={{ mb: 5 }}>
                    <Grid item xs={12} md={8} sx={{ backgroundColor: '#3cb4e5', color: 'white', display: 'flex', alignItems: 'center', padding: { xs: 3, sm: 6 } }}>
                        <Typography variant="h4">
                            Working out, sleeping soundly, and eating healthy foods are not just things we do because we think we should — they become a non-negotiable part of life for us.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'center', pl: { md: 4 }, mt: { xs: 4, md: 0 } }}>
                        <img
                            alt="OPEX Gyms"
                            src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-17.jpg"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Grid>
                </Grid>

                {/* Background Image Section */}
                <Box
                    sx={{
                        position: 'relative',
                        backgroundImage: 'url("https://flexxsirv.sirv.com/e9768916f71f7884eff6e0deab5bfc9bbf6ba3bcbe/opex-gym-james-fitzgerald_full.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        py: { xs: 6, sm: 8 },
                        px: { xs: 2, sm: 0 },
                        '::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity to control the dullness
                            zIndex: 1,
                        },
                    }}
                >
                    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 400,
                                textAlign: 'center',
                                mb: 4,
                                fontSize: { xs: '1.5rem', sm: '2.125rem' }, // Reduce font size for mobile
                            }}
                        >
                            "A truly sustainable program must align movement, nutrition, lifestyle, and mindset. Our coaches help you create lifelong behaviors to balance stress, manage energy, establish rhythm, and discover your purpose, so that you can live your definition of a larger, fulfilled life."
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontStyle: 'italic',
                                textAlign: 'center',
                                mt: 4,
                                fontSize: { xs: '0.875rem', sm: '1rem' }, // Reduce font size for mobile
                            }}
                        >
                            James Fitzgerald, Founder of OPEX
                        </Typography>
                        <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Button
                                        variant="contained"
                                        sx={{
                                            width: '220px',
                                            height: '45px',
                                            backgroundColor: '#f2f2f2',
                                            borderColor: '#00B4D8',
                                            color: 'black',
                                            borderRadius: '0',
                                            fontWeight: '700',
                                            fontSize : '12px',
                                            '&:hover': {
                                                backgroundColor: 'black',
                                                color: 'white',
                                                fontWeight: '700',
                                                border: '2px solid white',
                                            },
                                            alignSelf: 'flex-start'
                                        }}
                                    >
                                       Sign Up Now
                                    </Button>
                        </Box>
                    </Container>
                </Box>


            </Container>
        </Box>
    );
};

export default PhilosophySection;
