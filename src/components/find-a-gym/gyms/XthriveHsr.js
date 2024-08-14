import React from 'react'
import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Link as MuiLink,
} from '@mui/material';
import XthriveHsrMethods from './XthriveHsrMethods';
import MenuBarBlack from '../../common/MenuBarBlack';
import Testimonials1 from './Testimonials1';
import Testimonials2 from './Testimonials2';
import Signup from '../../common/Signup';

const XthriveHsr = () => {
    return (
        <>
            <MenuBarBlack />
            <Box sx={{}}>
                <Box mb={4} sx={{ marginTop: '20vh', marginLeft : '30px' }} >
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
                <Grid container sx={{ marginLeft : '30px'}}>
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
                </Grid>
            </Box>
            <br/>
            <hr />
            <XthriveHsrMethods />
            <Testimonials1/>
            <Testimonials2/>
            <Signup/>
            </>
    )
}

export default XthriveHsr
