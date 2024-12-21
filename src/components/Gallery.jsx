import React from "react";
import { Grid, Card, CardMedia, Typography } from "@mui/material";
import donation from '../assets/DONATION.jpg';

const images = [
    {
        src: donation, // Replace with actual image URLs
        alt: "Event 1",
    },
    {
        src: donation,
        alt: "Event 2",
    },
    {
        src: donation,
        alt: "Event 3",
    },
    {
        src: donation,
        alt: "Event 4",
    },
    {
        src: donation,
        alt: "Event 5",
    },
];

const Gallery = () => {
    return (
        <div style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
            <Typography variant="h4" align="center" gutterBottom>
                Social Media Gallery
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {images.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        {/* Responsive card for images */}
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={image.src}
                                alt={image.alt}
                                style={{ objectFit: "cover" }}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Gallery;
