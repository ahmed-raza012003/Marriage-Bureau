import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";

const stories = [
  {
    image: "ayeshaahmad.jpg",
    title: "Ayesha & Ahmed",
    description:
      "Ayesha and Ahmed found their perfect match through our Marriage Bureau. They are now enjoying a beautiful life together.",
    rating: 5,
    feedback: "Highly recommended! We couldn't have found each other without their guidance.",
  },
  {
    image: "fatimaali.jpg",
    title: "Fatima & Ali",
    description:
      "Fatima and Ali trusted our process and are now happily married. We are proud to have been part of their journey.",
    rating: 4.5,
    feedback: "The personalized service was exceptional and very efficient.",
  },
  {
    image: "hinabilal.webp",
    title: "Hina & Bilal",
    description:
      "Hina and Bilal overcame challenges and found compatibility through our efforts. They are a success story of trust.",
    rating: 4,
    feedback: "Happy Nikah is a trustworthy platform for serious matchmaking.",
  },
  {
    image: "saraumar.webp",
    title: "Sara & Umar",
    description:
      "Sara and Umar’s journey with our Marriage Bureau proves that the right guidance can make dreams come true.",
    rating: 5,
    feedback: "Amazing experience! We are forever grateful for their support.",
  },
];

const SuccessStories = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#800000",
          }}
        >
          Success Stories
        </Typography>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Grid container spacing={3} justifyContent="center">
          {stories.map((story, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: "15px",
                  backgroundColor: "#f7b6b0",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  width: "100%",  // Ensuring all cards are the same width
                  height: "400px",  // Fixed height for all cards
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={story.image}
                  alt={story.title}
                  sx={{ objectFit: "cover" }}  // Ensure images fit properly without stretching
                />
                <CardContent sx={{ height: "calc(100% - 150px)" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#800000",
                    }}
                  >
                    {story.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "justify",
                      color: "#555",
                      marginY: "10px",
                    }}
                  >
                    {story.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <Rating
                      name={`rating-${index}`}
                      value={story.rating}
                      precision={0.5}
                      readOnly
                      sx={{ color: "#800000" }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontStyle: "italic",
                        textAlign: "center",
                        color: "#666",
                        marginTop: "8px",
                      }}
                    >
                      "{story.feedback}"
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default SuccessStories;
