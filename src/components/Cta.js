import React from 'react';
import { CardContent, CardMedia, Typography, Button, Grid, Box, useMediaQuery, useTheme } from '@mui/material';

const Cta = () => {
    const theme = useTheme();
    const isSmOrDown = useMediaQuery(theme.breakpoints.down('sm'));

    return (
            <Grid container spacing={0} justifyContent="center" sx={{ marginBottom: '16px', display: 'flex'}}>
                <Grid item xs={12} md={4} >
                    <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: "#3cb4e5",
                                justifyContent: 'center',
                                height: '100%'
                            }}
                        >
                            <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 'bold', color: 'white', alignItems: 'center', alignSelf: 'center', marginTop: '4vh' }}>
                                Build your best life,
                            </Typography>
                            <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 'bold', color: 'white', alignItems: 'center', alignSelf: 'center', marginTop: '-2vh' }}>
                                starting today
                            </Typography>
                            <Box sx={{ alignSelf: 'center', marginTop: '5vh' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={
                                        {
                                            width: '15vw',
                                            backgroundColor: 'transparent',
                                            fontWeight: 'bold',
                                            border: '2px solid',
                                            borderColor: 'white',
                                            height: '10vh',
                                            '&:hover': {
                                                backgroundColor: 'white',
                                                color: '#3cb4e5',
                                                fontWeight: 'bold'
                                            },
                                        }}
                                >
                                    4 Week Trial
                                </Button>
                            </Box>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={4} >
                    <CardMedia
                            component="img"
                            image="https://flexxsirv.sirv.com/e9768916f71f7884eff6e0deab5bfc9bbf6ba3bcbe/opex-gyms-cta1.jpg"
                            alt="Free Trial"
                            sx={{ height: '100%' }}
                    />
                </Grid>
            </Grid>
    );
};

export default Cta;