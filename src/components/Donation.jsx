import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Divider,
  CardMedia,
} from "@mui/material";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import QRImage from '../assets/qrcode.jpg';

const donations = [
  { meals: 50, amount: 1000 },
  { meals: 100, amount: 2000 },
  { meals: 250, amount: 5000 },
  { meals: 500, amount: 10000 },
];

const Donation = () => {
  const { t } = useTranslation();
  return (
    <Box p={3}>
      <Typography variant="h4" align="center" gutterBottom>
        Donate to ISKCON to Feed Poor
      </Typography>
      <Grid container spacing={3}>
        {/* Donation Options */}
        {donations.map((donation, index) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
            <Card
              variant="outlined"
              sx={{
                borderColor: "#FF9933",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s",
                '&:hover': {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" align="center">
                  Donate {donation.meals} Meals
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ color: "#FF9933", fontWeight: "bold" }}
                >
                  ₹ {donation.amount.toLocaleString()}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", marginTop: "auto" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  to="/donate"
                  sx={{
                    backgroundColor: "#FF9933",
                    color: "#fff",
                    '&:hover': {
                      backgroundColor: "#FF7F00",
                      color: "#fff",
                    },
                  }}
                >
                  {t('donateNow')}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}

        {/* Bank Transfer Details and Image */}
        <Grid container item xs={12} spacing={3}>
          {/* Bank Details */}
          <Grid item xs={12} sm={12} md={12} lg={8} style={{ display: "flex" }}>
            <Card style={{ flexGrow: 1 }}>
              <CardContent>
                <Typography variant="h6" align="center">
                  <strong>Donation Through Bank (NEFT/RTGS)</strong>
                </Typography>
                <Typography variant="body1">
                  <strong>Bank Name: Union Bank </strong>
                </Typography>
                <Typography variant="body1">
                  <strong>Account Name: ISKCON DORNALA</strong>
                </Typography>
                <Typography variant="body1">
                  <strong>Account Number: 309612010001416</strong>
                </Typography>
                <Typography variant="body1">
                  <strong>IFSC Code: UBIN0830968</strong>
                </Typography>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Typography variant="h6" color="#ff9933">
                  80G Available As Per Income Tax Act 1961 And Rules Made Thereunder
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Income Tax Exemption (80G) Number: AAATI0017PF20219
                </Typography>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Typography
                  variant="h6"
                  color="error"
                  style={{ fontWeight: "bold" }}
                >
                  80G Benefits Cannot Be Availed On Paytm Donations Except Paytm UPI
                  Transfer
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Image */}
          <Grid item xs={12} sm={12} md={12} lg={4} style={{ display: "flex" }}>
            <Card style={{ flexGrow: 1 }}>
              <CardMedia
                component="img"
                image={QRImage}
                alt="Donation Image"
                style={{ height: "100%", objectFit: "cover" }} // Ensures image fits properly
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Donation;
