import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, useMediaQuery, useTheme, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const MenuBarBlack = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { text: 'DASHBOARD', link: '/' },
        { text: 'WHAT IS XTHRIVE?', link: '/what-is-xthrive' },
        { text: 'OUR PHILOSOPHY', link: '/our-philosophy' },
        { text: 'TESTIMONIALS', link: '/testimonials' },
        { text: 'SHOP', link: '/find-a-gym' },
        { text: 'FIND A GYM', link: '/find-a-gym' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box sx={{ flexGrow: 1, position: '' }}>
            <AppBar position={isFixed ? "fixed" : "absolute"} style={{background : 'white',boxShadow: 'none', zIndex: 10 }}>
                <Toolbar sx={{marginTop :  isMobile ? '7vh' : '0vh' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-logo_black.png" alt="Logo" style={{ height: '40px' }} />
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="end"
                                color="black"
                                aria-label="menu"
                                onClick={handleDrawerToggle}
                                sx={{ marginRight: '-12px' }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={drawerOpen}
                                onClose={handleDrawerToggle}
                                sx={{ '& .MuiDrawer-paper': { width: '100%' } }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        padding: '10px',
                                    }}
                                >
                                    <IconButton onClick={handleDrawerToggle}>
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                                <List>
                                    {menuItems.map((item, index) => (
                                        <ListItem button key={index} onClick={handleDrawerToggle} component={Link} to={item.link}>
                                            <ListItemText primary={item.text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Drawer>
                        </>
                    ) : (
                        <Box sx={{ display: 'flex', gap: '1rem', height : '9vh', color: 'black' }}>
                            {menuItems.map((item, index) => (
                                <Button key={index} color="inherit" component={Link} to={item.link}>
                                    {item.text}
                                </Button>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default MenuBarBlack;
