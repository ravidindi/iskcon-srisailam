import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t('required')),
      email: Yup.string().email(t('invalidEmail')).required(t('required')),
      message: Yup.string().required(t('required')),
    }),
    onSubmit: (values) => {
      // Here you would handle the form submission, e.g., send an email
      console.log('Form submitted:', values);
      alert(t('messageSent'));
    },
  });

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {t('contact')}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              {t('contactInfo')}
            </Typography>
            <Typography>
              ISKCON Srisailam<br />
              123 Temple Street<br />
              Srisailam, Andhra Pradesh 518101<br />
              India
            </Typography>
            <Typography sx={{ mt: 2 }}>
              {t('phone')}: +91 1234567890<br />
              {t('email')}: info@iskconsrisailam.org
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label={t('name')}
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                margin="normal"
              />
              <TextField
                fullWidth
                id="email"
                name="email"
                label={t('email')}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                margin="normal"
              />
              <TextField
                fullWidth
                id="message"
                name="message"
                label={t('message')}
                multiline
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                margin="normal"
              />
              <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
                {t('sendMessage')}
              </Button>
            </form>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, height: '400px', width: '100%' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.5518557763726!2d78.86843731484096!3d15.314699989340878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e9a0d4d2e1a7%3A0x9f1d9a0d9f9a9a9a!2sSri%20Bhramaramba%20Mallikarjuna%20Swamy%20Temple!5e0!3m2!1sen!2sin!4v1627984762111!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactPage;
