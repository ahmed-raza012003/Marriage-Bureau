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
const fadeInLeft = keyframes`
  0% { opacity: 0; transform: translateX(-20px); }
  100% { opacity: 1; transform: translateX(0); }
`;
const fadeInRight = keyframes`
  0% { opacity: 0; transform: translateX(20px); }
  100% { opacity: 1; transform: translateX(0); }
`;
const typingAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;
const Home = () => {
  return (
    <Box sx={{ fontFamily: "Arial, sans-serif", color: "#800000" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#800000", padding: "10px 20px" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="main-logo.jpeg"
              alt="Logo"
              style={{ width: "60px", marginRight: "10px" }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", cursor: "pointer" }}
            >
              Happy Nikah
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", textAlign: "center", cursor: "pointer" }}
          >
            Home
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Button
              color="inherit"
              sx={{
                fontWeight: "bold",
                position: "relative",
                "&:hover .underline": {
                  transform: "scaleX(1)",
                },
              }}
            >
              Login
              <Box
                className="underline"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  backgroundColor: "white",
                  transform: "scaleX(0)",
                  transformOrigin: "bottom right",
                  transition: "transform 0.3s ease",
                }}
              />
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                border: "1px solid white",
                padding: "5px 15px",
                fontWeight: "bold",
                position: "relative",
                "&:hover .underline": {
                  transform: "scaleX(1)",
                },
              }}
            >
              Register
              <Box
                className="underline"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  backgroundColor: "white",
                  transform: "scaleX(0)",
                  transformOrigin: "bottom right",
                  transition: "transform 0.3s ease",
                }}
              />
            </Button>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "40px",
          marginTop: "60px",
        }}
      >
        <Box
          sx={{
            width: "45%",
            marginTop: "30px",
            animation: `${fadeInLeft} 1.5s ease-out`,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: "20px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              borderRight: "3px solid #800000",
              animation: `${typingAnimation} 3s steps(40) 1s forwards`,
            }}
          >
            Find Your Perfect Match Today
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "20px", lineHeight: "1.6" }}
          >
            Welcome to Happy Nikah Organization Pakistan, your trusted partner
            in finding your perfect match. Our mission is to provide a secure,
            personalized, and hassle-free matchmaking experience.
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            Register Now and Start Your Journey
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
            }}
          >
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
            textAlign: "center",
            position: "relative",
            animation: `${fadeInRight} 1.5s ease-out`,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            Your Path to a Blessed Union Connecting Hearts, Building Families
            Trusted Marriage Bureau for Muslims.
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "300px",
              borderRadius: "10px",
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
                borderRadius: "8px",
              }}
            />
          </Box>

          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffe6e6",
                color: "white",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                fontSize: "16px",
                "&:hover": { backgroundColor: "#ffe6e6" },
              }}
            ></Button>
          </Box>
        </Box>
      </Box>
      <About />
      <Services/>
      <Packages/>
      <SuccessStories/>
    </Box>
  );
};

export default Home;
