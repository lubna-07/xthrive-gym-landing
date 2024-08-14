// src/components/TestimonialCarousel.js

import React, { useState } from 'react';
import { Box, Avatar, Typography, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const testimonials = [
  {
    text: "With OPEX, you’re putting your money, time and energy into something that works. Its direct, it has a purpose, and it gets you amazing results.",
    image: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gym-testimonial-yafa.jpg",
    name: "Yafa Smith"
  },
  {
    text: "I used to get super frustrated and upset that I wasn’t able to do things. It was really hard on me, my entire outlook has changed now. I’m just a happier person overall.",
    image: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-testimonial-mike.jpg",
    name: "Mike Johnson"
  },
  {
    text: "It’s really awesome because it’s just me against me. I love going in and knowing what my goals are and beating myself. I’m just so proud to represent OPEX. I wear the t-shirt all the time. It’s the training that I need.",
    image: "https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-testimonial-nicole.jpg",
    name: "Nicole Adams"
  },
];

const Testimonials1 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        textAlign="center"
      >
        <Grid item xs={12} sm={10} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4" component="h1" sx={{
            paddingTop: '40px',
            paddingBottom: '40px',
            fontSize: '46px',
            color: 'black',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            lineHeight: '55px'
          }}>
            Testimonials
          </Typography>
        </Grid>
      </Grid>
    
    <Box textAlign="center" my={5} sx={{ width: { xs: '90vw', sm: '90vw', md: '120vh' }, marginLeft: { xs: '20px', sm: '20px', md: '350px' } }}>
      {/* Carousel with Testimonial and Name */}
      <Carousel
        index={selectedIndex}
        onChange={(newIndex) => setSelectedIndex(newIndex)}
        navButtonsAlwaysInvisible
        indicators={false}
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            border="2px solid #3cb4e5"
            borderRadius="8px"
            p={3}
            display="inline-block"
            mx="auto"
          >
            <Typography variant="h5" gutterBottom>
              {testimonial.text}
            </Typography>
            <Typography variant="subtitle1" color="#3cb4e5">
              - {testimonial.name}
            </Typography>
          </Box>
        ))}
      </Carousel>

      {/* Lower Section with Profile Pictures */}
      <Box display="flex" justifyContent="center" mt={3}>
        {testimonials.map((testimonial, index) => (
          <Avatar
            key={index}
            src={testimonial.image}
            alt={`Profile ${index + 1}`}
            sx={{
              width: 80,
              height: 80,
              margin: '0 15px',
              border: selectedIndex === index ? '3px solid #3cb4e5' : '3px solid transparent',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </Box>
    </Box>
    </Box>
  );
};

export default Testimonials1;
