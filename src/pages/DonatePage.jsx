import React from 'react';
import { Container, Typography, Box, TextField, Button, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

const DonatePage = () => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      amount: '',
      category: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t('required')),
      email: Yup.string().email(t('invalidEmail')).required(t('required')),
      amount: Yup.number().positive(t('positiveAmount')).required(t('required')),
      category: Yup.string().required(t('required')),
    }),
    onSubmit: (values) => {
      // Here you would integrate with your payment gateway (e.g., Razorpay)
      console.log('Form submitted:', values);
      alert(t('thankYouDonation'));
    },
  });

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {t('donate')}
        </Typography>
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
            id="amount"
            name="amount"
            label={t('amount')}
            type="number"
            value={formik.values.amount}
            onChange={formik.handleChange}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
            margin="normal"
          />
          <TextField
            fullWidth
            id="category"
            name="category"
            select
            label={t('category')}
            value={formik.values.category}
            onChange={formik.handleChange}
            error={formik.touched.category && Boolean(formik.errors.category)}
            helperText={formik.touched.category && formik.errors.category}
            margin="normal"
          >
            <MenuItem value="general">{t('general')}</MenuItem>
            <MenuItem value="prasadam">{t('prasadam')}</MenuItem>
            <MenuItem value="education">{t('education')}</MenuItem>
          </TextField>
          <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
            {t('submitDonation')}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default DonatePage;

