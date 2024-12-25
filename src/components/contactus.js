import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const ContactScreen = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "maroon",
          marginBottom: 4,
        }}
      >
        Contact Us
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "40%",
            padding: 3,
            boxShadow: 3,
            borderRadius: 3,
            backgroundColor: "#f2f2f2",
          }}
        >
          <Box
            component="img"
            src="https://via.placeholder.com/150"
            alt="Profile"
            sx={{
              width: "240px",
              height: "220px",
              borderRadius: 2,
              marginBottom: 3,
              objectFit: "cover",
            }}
          />
          <Typography variant="h5" sx={{ color: "maroon", fontWeight: "bold" }}>
            Asim Talha
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Founder & CEO
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            +92 309 7111965
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            +92 317 6793727
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            happynikah@gmail.com
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Rahim Yar Khan, Punjab, Pakistan
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            gap: 2,
            padding: 3,
            boxShadow: 3,
            borderRadius: 3,
            backgroundColor: "#f2f2f2",
          }}
        >
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            sx={{ borderRadius: 2 }}
          />
          <TextField
            label="Your Phone No"
            variant="outlined"
            fullWidth
            sx={{ borderRadius: 2 }}
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            sx={{ borderRadius: 2 }}
          />
          <TextField
            label="Your Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            sx={{ borderRadius: 2 }}
          />
          <Button
            variant="contained"
            sx={{
              alignSelf: "center",
              backgroundColor: "maroon",
              "&:hover": { backgroundColor: "#a83232" },
              marginTop: 2,
              padding: "10px 40px",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactScreen;
