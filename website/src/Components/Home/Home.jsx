import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import './Home.css'
function Home() {
  return (
    <Container className='home' sx={{ mt: 5 }}>
      <img src="https://www.nitk.ac.in/images/b5.jpg" alt="" />
      <Typography variant="h3" gutterBottom>
        Welcome to Education Portal: Medical and Engineering Colleges
      </Typography>
      <Typography variant="body1" paragraph>
        Discover top-tier Medical and Engineering Colleges offering world-class education, advanced research opportunities, and excellent career prospects. Explore the different programs, admission processes, and support services available to help you make informed decisions for your future.
      </Typography>

      
      <Typography variant="body1" paragraph>
        Medical colleges across the country offer comprehensive training in various healthcare fields. With state-of-the-art facilities, experienced faculty, and hands-on experience, these colleges prepare students for rewarding careers in medicine and healthcare. Some of the top medical colleges include:
      </Typography>

      
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Start Your Journey Today
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you are looking to become a doctor or an engineer, pursuing a degree in either of these fields can lead to a bright future. Explore more about the colleges, programs, and admission processes to take the next step in your academic career.
        </Typography>
        <Button variant="contained" color="primary">
          Explore Programs
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
