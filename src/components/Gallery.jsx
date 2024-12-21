import React from "react";
import { Grid, Card, CardMedia, Typography, CardActionArea } from "@mui/material";
import donation from "../assets/DONATION.jpg";

const images = [
    {
        src: donation,
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
        <div style={{ padding: "3rem 2rem", backgroundColor: "#fefefe" }}>
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                    fontWeight: "bold",
                    marginBottom: "1.5rem",
                    color: "#333",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                }}
            >
                Social Media Gallery
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {images.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card
                            sx={{
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                                },
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={image.src}
                                    alt={image.alt}
                                    sx={{
                                        objectFit: "cover",
                                        borderRadius: "4px",
                                    }}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Gallery;
