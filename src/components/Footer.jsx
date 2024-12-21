import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          ISKCON Srisailam
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Link href="https://facebook.com" color="inherit" sx={{ mx: 1 }}>
            <Facebook />
          </Link>
          <Link href="https://twitter.com" color="inherit" sx={{ mx: 1 }}>
            <Twitter />
          </Link>
          <Link href="https://instagram.com" color="inherit" sx={{ mx: 1 }}>
            <Instagram />
          </Link>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
          {'Copyright © '}
          <Link color="inherit">
            ISKCON Srisailam
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
