import React from 'react'

import { Paper, Grid, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';

const Testimonial = ({ testimonial, clientImage, clientName, isSmOrDown, bgColor }) => {
    return (
        <Paper style={{ height: isSmOrDown ? 'auto' : '70vh', display: 'flex', alignItems: 'center', marginBottom: '50px', width : isSmOrDown ? 'auto' : '150vh'}}>
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
                        src={clientImage}
                        alt={clientName}
                        style={{
                            height: isSmOrDown ? 'auto' : '70vh',
                            width: '100%',
                            objectFit: 'cover',
                            maxWidth: '100%',
                        }} />
                </Grid>
                <Grid
                    item xs={12} md={6}
                    style={{
                        backgroundColor: bgColor ? 'black' : '#f2f2f2',
                        color: bgColor ? 'white' : 'black',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px'
                    }}
                >
                    <Typography variant="body1" sx={{ maxWidth: '500px', textAlign: 'left', marginBottom: '20px', fontFamily: 'sans-serif' }}>
                        {testimonial}
                    </Typography>
                    <Box sx={{ textAlign: 'left', marginBottom: '20px' }}>
                        <Typography variant="subtitle1" sx={{ fontFamily: 'sans-serif' }}>
                            XThrive Client: {clientName}
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'left', marginBottom: '20px' }}>
                        <Button
                            variant="contained"
                            sx={{
                                width: '220px',
                                height: '45px',
                                backgroundColor: 'transparent',
                                borderColor: '#3cb4e5',
                                color: '#3cb4e5',
                                border: '2px solid',
                                borderRadius: '0',
                                fontWeight: '700',
                                fontSize: '12px',
                                '&:hover': {
                                    backgroundColor: '#3cb4e5',
                                    color: 'white',
                                    borderColor: '#3cb4e5',
                                    fontWeight: '700'
                                },
                            }}
                        >
                            See Full Story
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Testimonial
