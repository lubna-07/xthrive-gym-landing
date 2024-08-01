import React from 'react';
import { Container, Grid, Box, Typography, Button , useMediaQuery, useTheme} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/philosophy.css'; 

const Philosophy = () => {
    const theme = useTheme();
    const isSmOrDown = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box component="section" className="pt0 pb80">
            <Container className="title-block">
                <div class="col-sm-12 text-center title-block">
                        <h2 class="uppercase color-brand-secondary">Training for lifelong results</h2>
                        <p class="lead mb0">What training at OPEX looks like for you, in 5 easy steps</p>
                </div>
                <Grid container alignItems="center" className="pt32" spacing={10}>
                    <Grid item md={6} sm={5}>
                        <img
                            alt="OPEX Gyms"
                            className="background-image mb-xs-40"
                            src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gym-james-fitzgerald.jpg"
                            style={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item md={5} sm={5} mdOffset={1} alignItems="center" smOffset={1} spacing={10}>
                        <img
                            alt="OPEX Gyms Badge"
                            className="mb32"
                            src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-honor-badge2.png"
                            style={{ maxWidth: '250px' }}
                        />
                        <Typography variant="body1" className="content-body">
                            Go deep on WHY we design all-encompassing fitness the way we do and how it leads to a larger, more fulfilling life for you.
                        </Typography>
                        <Button
                                    variant="contained"
                                    color="primary"
                                    sx={
                                        {
                                            width: isSmOrDown ? '40vw' : '11vw',
                                            backgroundColor: 'transparent',
                                            fontWeight: '700',
                                            fontSize:'12px',
                                            border: '2px solid',
                                            borderColor: 'black',
                                            color : 'black',
                                            height: '6vh',
                                            marginTop: '50px',
                                            '&:hover': {
                                                backgroundColor: 'black',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            },
                                        }}
                                >
                                    Learn more
                                </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Philosophy;
