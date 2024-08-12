import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';

const principles = [
    {
        title: 'Balance',
        description: 'There are 24 hours in a day, apply work and rest appropriately.',
        imageUrl: 'https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-15.jpg'
    },
    {
        title: 'Energy',
        description: 'Sleep with the moon, rise with the sun. You can\'t cheat biology!',
        imageUrl: 'https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-14.jpg'
    },
    {
        title: 'Rhythm',
        description: 'Water, movement, and proper digestion are essential daily routines.',
        imageUrl: 'https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-13.jpg'
    },
    {
        title: 'Purpose',
        description: 'You will one day die, get over it and get living!',
        imageUrl: 'https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-15.jpg'
    }
];

const OurPrinciples = () => {
    return (
        <Box
            sx={{
                width: { xs: '100%', md: '90%' }, 
                padding: { xs: '10px', sm: '20px', md: '30px' },
                backgroundColor: '#f2f2f2',
                marginLeft: { xs: '0', sm: '10vh', md: '10vh' },
                marginTop: { xs: '0', sm: '-10vh', md: '-15vh' },
                marginBottom : '20vh'
            }}
        > {principles.map((principle, index) => (
            <Box key={index} mb={4} className="mx-auto">
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} sm={4} className="flex items-center justify-center mb-4 sm:mb-0">
                        <Typography
                            variant="h4"
                            className="font-bold uppercase"
                            sx={{
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                                textAlign: 'center'
                            }}
                        >
                            {principle.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                                mb: 2
                            }}
                        >
                            {principle.description}
                        </Typography>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                src={principle.imageUrl}
                                alt={principle.title}
                                style={{
                                    width: '110%',   // Increase width by 10%
                                    height: '110%',  // Increase height by 10%
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                {index < principles.length - 1 && (
                    <Divider
                        sx={{
                            my: 4,
                            height: '2px',
                            backgroundColor: 'black'
                        }}
                    />
                )}
            </Box>
        ))}
        </Box>
    );
};

export default OurPrinciples;
