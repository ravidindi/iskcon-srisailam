import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import WelcomeImage from '../assets/welcome.jpeg'; // Adjust the path to your image file
import Donation from '../components/Donation';
import Gallery from '../components/Gallery';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg">
      <Box >
        <Box
          component="img"
          src={WelcomeImage}
          alt="Welcome"
          sx={{
            width: '100%',
            height: 'auto',
            mt: 2,
            mb: 0
          }}
        />
        <Typography variant="body1" gutterBottom sx={{ width: '100%', backgroundColor: '#FF9933', fontWeight: 'bold' }} textAlign={'center'}>
          We request you to join our hands to support this initiative for keeping this distribution enduring.
        </Typography>
        <Donation />
        <Gallery />
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/donate"
          sx={{ mt: 2 }}
        >
          {t('donateNow')}
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
