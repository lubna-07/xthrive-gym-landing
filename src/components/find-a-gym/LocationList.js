import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';

const LocationList = () => {
    return (
        <Box id="list" py={8}>
            <Container maxWidth="md">
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{ textTransform: 'uppercase', marginBottom: { xs: 5, sm: 8 }, letterSpacing: '0.2em', color: '#292929', fontWeight: 400 }}
                >
                    Full Location List
                </Typography>
                <br />
                <Box component="ul" sx={{ listStyle: 'none', p: 0, marginLeft: { md: '-200px' } }}>
                    {/* First List Item */}
                    <Box component="li" sx={{ mb: 3 }}>
                        <Box mb={4}>
                            <MuiLink
                                href="https://www.opexgyms.com/find-a-gym/opex-abbotsford"
                                underline="none"
                            >
                                <Typography variant="h5" gutterBottom
                                    sx={{
                                        fontWeight: 600,
                                        letterSpacing: '.5px',
                                        fontSize: '40px',
                                        color: '#292929',
                                    }}
                                >
                                    Xthrive HSR
                                </Typography>
                            </MuiLink>
                            <Typography variant="subtitle1">Abbotsford, British Columbia</Typography>
                        </Box>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <Typography>
                                    1575 McCallum Road #106
                                    <br />
                                    Abbotsford
                                    <br />
                                    British Columbia Canada
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
                                    <Box component="li">
                                        <Typography sx={{ mb: 1 }}>Owned by CCP Coach Firass El Fateh</Typography>
                                    </Box>
                                    <Box component="li">
                                        <MuiLink
                                            href="https://facebook.com/opexabbotsford"
                                            target="_blank"
                                            sx={{ display: 'flex', alignItems: 'center' }}
                                        >
                                            <i className="fa fa-facebook-square" style={{ marginRight: 8 }}></i>
                                            OPEX Abbotsford
                                        </MuiLink>
                                    </Box>
                                    <Box component="li">
                                        <MuiLink
                                            href="https://www.instagram.com/opexabbotsford/"
                                            target="_blank"
                                            sx={{ display: 'flex', alignItems: 'center' }}
                                        >
                                            <i className="fa fa-instagram" style={{ marginRight: 8 }}></i>
                                            @opexabbotsford
                                        </MuiLink>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Box sx={{ mt: { xs: 2, sm: 0 } }}>
                                    <Button
                                        variant="contained"
                                        component={Link}
                                        to="/find-a-gym/xthrive-hsr"
                                        sx={{
                                            width: '130px',
                                            height: '45px',
                                            backgroundColor: 'transparent',
                                            border: '2px solid black',
                                            borderColor: '#00B4D8',
                                            marginRight: '40px',
                                            color: '#00B4D8',
                                            borderRadius: '0',
                                            fontWeight: '700',
                                            fontSize: '12px',
                                            '&:hover': {
                                                backgroundColor: '#00B4D8',
                                                color: 'white',
                                                fontWeight: '700',
                                                border: '2px solid #00B4D8',
                                            },
                                            alignSelf: 'flex-start'
                                        }}>
                                        Get Started
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            width: '130px',
                                            height: '45px',
                                            backgroundColor: 'transparent',
                                            border: '2px solid black',
                                            borderColor: '#00B4D8',
                                            color: '#00B4D8',
                                            borderRadius: '0',
                                            fontWeight: '700',
                                            fontSize: '12px',
                                            '&:hover': {
                                                backgroundColor: '#00B4D8',
                                                color: 'white',
                                                fontWeight: '700',
                                                border: '2px solid #00B4D8',
                                            },
                                            alignSelf: 'flex-start'
                                        }}>
                                        Visit Website
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <hr />
                </Box>
            </Container>
        </Box>
    );
};

export default LocationList;
