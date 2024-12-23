import React from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  MenuItem,
  Grid,
  Checkbox,
  FormControlLabel,
  Divider,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import logo from '../assets/logoiskcon.png';

function loadScript(src) {
  return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
          resolve(true);
      };
      script.onerror = () => {
          resolve(false);
      };
      document.body.appendChild(script);
  });
}


async function displayRazorpay(values) {
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }
  // else{
  //   console.log("script loaded")
  // }

  // creating a new order
  const result = await axios.post("http://localhost:5000/payment/orders");

  if (!result) {
      alert("Server error. Are you online?");
      return;
  }
  // else{
  //   console.log(result)
  // }

  // Getting the order details back
  const { amount, id: order_id, currency } = result.data;

  const options = {
      key: "rzp_test_QXLDACCK2WGka0", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Iskcon Srisailam",
      description: "Test Transaction",
      image: { logo },
      order_id: order_id,
      handler: async function (response) {
          const data = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
          };

          const result = await axios.post("http://localhost:5000/payment/success", data);

          alert(result.data.msg);
      },
      prefill: {
          name: "ISKCON DORNALA",
          email: "iskcon.dornala@gmail.com",
          contact: "9999999999",
      },
      notes: {
          address: "Srisailam",
      },
      theme: {
          color: "#61dafb",
      },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

const DonatePage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      country: 'India',
      streetAddress: '',
      city: '',
      state: 'Delhi',
      pinCode: '',
      phone: '',
      email: '',
      pan: '',
      wants80G: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      country: Yup.string().required('Country is required'),
      streetAddress: Yup.string().required('Street address is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      pinCode: Yup.string().required('PIN Code is required'),
      phone: Yup.string().required('Phone number is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      pan: Yup.string().test(
        'pan-required',
        'PAN is required for 80G benefits',
        function (value) {
          const { wants80G } = this.parent;
          if (wants80G) {
            return !!value; // Return true if PAN is provided when wants80G is true
          }
          return true; // Pass validation if wants80G is false
        }
      ),
    }),
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      displayRazorpay();
      // alert('Thank you for your donation!');
    },
  });

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          my: 4,
          p: 4,
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ mb: 4, fontWeight: 'bold', color: '#333' }}
        >
          Proceed to Donation
        </Typography>

        <Grid container spacing={4}>
          {/* Donor Information */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#555' }}>
              Donor Information
            </Typography>
            <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                      helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                      helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="companyName"
                      name="companyName"
                      label="Company Name (Optional)"
                      value={formik.values.companyName}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="country"
                      name="country"
                      label="Country / Region"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      select
                    >
                      <MenuItem value="India">India</MenuItem>
                      {/* Add more countries as needed */}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="streetAddress"
                      name="streetAddress"
                      label="Street Address"
                      value={formik.values.streetAddress}
                      onChange={formik.handleChange}
                      error={formik.touched.streetAddress && Boolean(formik.errors.streetAddress)}
                      helperText={formik.touched.streetAddress && formik.errors.streetAddress}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id="city"
                      name="city"
                      label="Town / City"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      error={formik.touched.city && Boolean(formik.errors.city)}
                      helperText={formik.touched.city && formik.errors.city}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id="state"
                      name="state"
                      label="State"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      select
                    >
                      <MenuItem value="Delhi">Delhi</MenuItem>
                      {/* Add more states as needed */}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id="pinCode"
                      name="pinCode"
                      label="PIN Code"
                      value={formik.values.pinCode}
                      onChange={formik.handleChange}
                      error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                      helperText={formik.touched.pinCode && formik.errors.pinCode}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id="phone"
                      name="phone"
                      label="Phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email Address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="wants80G"
                          name="wants80G"
                          checked={formik.values.wants80G}
                          onChange={formik.handleChange}
                        />
                      }
                      label="Do you want 80G Benefits?"
                    />
                  </Grid>
                  {formik.values.wants80G && (
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="pan"
                        name="pan"
                        label="Enter your PAN"
                        value={formik.values.pan}
                        onChange={formik.handleChange}
                        error={formik.touched.pan && Boolean(formik.errors.pan)}
                        helperText={formik.touched.pan && formik.errors.pan}
                      />
                    </Grid>
                  )}
                </Grid>
              </form>
            </Box>
          </Grid>

          {/* Donation Information */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#555' }}>
              Donation Information
            </Typography>
            <Box
              sx={{
                p: 3,
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: '#fff',
              }}
            >
              <Typography variant="body1">
                ISKCON Charity Donation - ₹1000 × 1
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1">
                <strong>Subtotal:</strong> ₹1000
              </Typography>
              <Typography variant="body1">
                <strong>Total:</strong> ₹1000
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 2, color: 'text.secondary' }}
              >
                Pay securely via UPI, Credit/Debit Card, or Internet Banking.
              </Typography>
            </Box>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                mt: 3,
                py: 1.5,
                backgroundColor: '#FF9933',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#FF7F00',
                },
              }}
              onClick={formik.handleSubmit}
            >
              Donate Now
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DonatePage
