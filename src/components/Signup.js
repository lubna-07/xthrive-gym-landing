import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box, TextField, useMediaQuery, useTheme } from '@mui/material';

const Signup = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                marginTop : '5vh',
                marginBottom : '10vh',
                borderRadius: '0',
                padding: isMobile ? '10px' : '10px' ,
                background: '#f8f8f8 !important',

            }}
        >
            <Card 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    width: isMobile ? 'auto' : '90vw',
                    height: 'auto',
                    borderRadius: '0',
                    backgroundColor: "white",
                    padding: isMobile ? '20px' : '40px',
                    marginTop : '40px',
                    marginBottom : '40px'
                }}
            >
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Typography 
                        variant="h5" 
                        component="div" 
                        gutterBottom 
                        sx={{ fontWeight: 'semi-bold', color: 'black', marginBottom: '30px' }}
                    >
                        FITNESS CONTENT DELIVERED TO YOUR INBOX
                    </Typography>
                    <Typography 
                        variant="body1" 
                        component="div" 
                        gutterBottom 
                        sx={{ color: 'black', fontSize : '17px' }}
                    >
                        Subscribe to our newsletter and don't worry, we hate spam too.
                    </Typography>
                    <Typography 
                        variant="body1" 
                        component="div" 
                        gutterBottom 
                        sx={{ color: 'black', marginBottom: '50px',  fontSize : '17px'  }}
                    >
                        We'll only include helpful content to support your fitness and lifestyle goals.
                    </Typography>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item xs={12} sm={3}>
                            <TextField 
                                label="First Name *" 
                                variant="outlined" 
                                fullWidth 
                                sx={{backgroundColor: '#f2f2f2', borderRadius: '1px', borderColor : 'black', border : '1px tan' , borderRadius: '0'}} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField 
                                label="Last Name *" 
                                variant='outlined'
                                fullWidth 
                                sx={{ backgroundColor: '#f2f2f2', borderRadius: '1px', borderColor : 'black', border : '1px tan', borderRadius: '0' }} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField 
                                label="Email *" 
                                variant="outlined" 
                                fullWidth 
                                sx={{backgroundColor: '#f2f2f2', borderColor : 'black', border : '1px tan', borderRadius: '0'}} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Button
                                variant="contained"
                                sx={{
                                    width: '30vh', 
                                    backgroundColor: '#3cb4e5',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    height: '7.2vh',
                                    borderRadius: '0',
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        color: '#3cb4e5',
                                        fontWeight: 'bold',
                                    },
                                }}
                            >
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Signup;