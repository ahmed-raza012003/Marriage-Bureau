import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { keyframes } from "@mui/system";
import About from "../components/about";
import Services from "../components/services";
import Packages from "../components/pakages";
import SuccessStories from "../components/success-stories";
import FAQPage from "../components/faq";
import ContactScreen from "../components/contactus";
import { Navigate, useNavigate } from "react-router-dom";
import RegistrationForm from "../components/registrationform";

const fadeInLeft = keyframes`
  0% { opacity: 0; transform: translateX(-20px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const fadeInRight = keyframes`
  0% { opacity: 0; transform: translateX(20px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        fontFamily: "Arial, sans-serif",
        color: "#800000",
        background: "linear-gradient(135deg, #f8d7da, #f8d7da)",
        minHeight: "100vh",
        paddingTop: "64px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "url('/background-image.jpg') no-repeat center center fixed",
          backgroundSize: "cover",
          filter: "blur(8px)",
          zIndex: -1,
        }}
      />

      <AppBar position="fixed" sx={{ backgroundColor: "#800000", zIndex: 10 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="main-logo.jpeg"
              alt="Logo"
              style={{ width: "50px", marginRight: "10px" }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", cursor: "pointer" }}
            >
              Happy Nikah
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: "20px" }}>
            {[
              "Home",
              "About",
              "Services",
              "Packages",
              "Stories",
              "FAQ",
              "Contact",
            ].map((link) => (
              <Button
                key={link}
                color="inherit"
                sx={{
                  fontWeight: "bold",
                  position: "relative",
                  "&:hover": {
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -4,
                      width: "100%",
                      height: "2px",
                      backgroundColor: "white",
                    },
                  },
                }}
                onClick={() => {
                  const section = document.getElementById(
                    link === "Home" ? "home-top" : link.toLowerCase()
                  );
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {link}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button color="inherit" sx={{ fontWeight: "bold" }}>
              Login
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "white",
                color: "white",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#ffe6e6" },
              }}
              onClick={() => navigate("RegistrationForm")}
            >
              Register
            </Button>

            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        id="home-top"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px",
          marginTop: "80px",
        }}
      >
        <Box
          sx={{
            width: "45%",
            height: "350px",
            animation: `${fadeInLeft} 1.5s ease-out`,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            Find Your Perfect Match Today
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: "1.6", marginBottom: "20px" }}
          >
            Welcome to Happy Nikah Organization Pakistan, your trusted partner
            in finding your perfect match. Our mission is to provide a secure,
            personalized, and hassle-free matchmaking experience.
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#800000",
                "&:hover": { backgroundColor: "#660000" },
              }}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#800000",
                color: "#800000",
                "&:hover": { backgroundColor: "#ffe6e6" },
              }}
            >
              Register Now
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "45%",
            height: "400px",
            textAlign: "center",
            animation: `${fadeInRight} 1.5s ease-out`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/img1.jpg"
            alt="Logo"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "10px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>
      </Box>

      <Box id="about">
        <About />
      </Box>
      <Box id="services">
        <Services />
      </Box>
      <Box id="packages">
        <Packages />
      </Box>
      <Box id="stories">
        <SuccessStories />
      </Box>
      <Box id="faq">
        <FAQPage />
      </Box>
      <Box id="contact">
        <ContactScreen />
      </Box>
    </Box>
  );
};

export default Home;
