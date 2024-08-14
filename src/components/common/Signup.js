import React, { useState } from 'react';
import axios from 'axios'
import { Card, CardContent, Typography, Button, Grid, Box, TextField, useMediaQuery, useTheme } from '@mui/material';

const Signup = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [formValues, setFormValues] = useState({
        fullName: '',
        contactNumber: '',
        email: ''
    });
    const [formErrors, setFormErrors] = useState({
        fullName: '',
        contactNumber: '',
        email: ''
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (number) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(number);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        setFormErrors({
            ...formErrors,
            [name]: value ? '' : 'Required!',
        });
    };

    const handleSubmit = () => {
        const errors = {
            fullName: formValues.fullName ? '' : 'Required!',
            contactNumber: formValues.contactNumber ? '' : 'Required!',
            email: formValues.email ? '' : 'Required!',
        };

        if (formValues.contactNumber && !validatePhoneNumber(formValues.contactNumber)) {
            errors.contactNumber = 'Invalid phone number!';
        }

        if (formValues.email && !validateEmail(formValues.email)) {
            errors.email = 'Invalid email address!';
        }

        setFormErrors(errors);

        const hasErrors = Object.values(errors).some(error => error !== '');

        if (!hasErrors) {
            console.log('Form Values:', formValues);
            axios.post('https://sheet.best/api/sheets/a54022c9-ac94-4469-a264-2ed849e3d9b7',formValues).then(response=>{
                console.log(response);
                
              })
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                marginTop: '5vh',
                marginBottom: '10vh',
                borderRadius: '0',
                padding: isMobile ? '10px' : '10px',
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
                    marginTop: '40px',
                    marginBottom: '40px',
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
                        sx={{ color: 'black', fontSize: '17px' }}
                    >
                        Subscribe to our newsletter and don't worry, we hate spam too.
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        gutterBottom
                        sx={{ color: 'black', marginBottom: '50px', fontSize: '17px' }}
                    >
                        We'll only include helpful content to support your fitness and lifestyle goals.
                    </Typography>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item xs={12} sm={3}>
                            <TextField
                                label="Full Name"
                                name="fullName"
                                variant="outlined"
                                fullWidth
                                required
                                value={formValues.fullName}
                                onChange={handleInputChange}
                                error={!!formErrors.fullName}
                                helperText={formErrors.fullName}
                                sx={{
                                    backgroundColor: '#f2f2f2',
                                    borderRadius: '0',
                                    borderColor: 'black',
                                    border: '1px tan'
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                label="Contact Number"
                                name="contactNumber"
                                variant='outlined'
                                fullWidth
                                required
                                value={formValues.contactNumber}
                                onChange={handleInputChange}
                                error={!!formErrors.contactNumber}
                                helperText={formErrors.contactNumber}
                                sx={{
                                    backgroundColor: '#f2f2f2',
                                    borderRadius: '0',
                                    borderColor: 'black',
                                    border: '1px tan'
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                label="Email"
                                name="email"
                                variant="outlined"
                                fullWidth
                                required
                                value={formValues.email}
                                onChange={handleInputChange}
                                error={!!formErrors.email}
                                helperText={formErrors.email}
                                sx={{
                                    backgroundColor: '#f2f2f2',
                                    borderRadius: '0',
                                    borderColor: 'black',
                                    border: '1px tan'
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Button
                                variant="contained"
                                onClick={handleSubmit}
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
