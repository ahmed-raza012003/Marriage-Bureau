import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box sx={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
              color: "inherit" 
            }}
            component="a"
            href="#about-section"
          >
            About Us
          </Typography>
        </motion.div>
      </Box>
      <Box id="about-section" sx={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
        <Box sx={{ width: "30%" }}>
          <motion.img
            src="/page1_img2.jpg"
            alt="About Us Image"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "100px", width: "65%", paddingLeft: "20px" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Typography variant="body1" sx={{ lineHeight: "1.8", fontSize: "16px" }}>
              Happy Nikah Organization Pakistan is a leading Marriage Bureau dedicated to helping individuals and families find compatible life partners. We understand the importance of marriage and strive to make the process easy, enjoyable, and successful.
            </Typography>
          </motion.div>

          <Grid container spacing={4} sx={{ margintop: "20px" }}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>
                  Services
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", textAlign: "left", marginBottom: "10px" }}>
                  Registration and Profile Creation
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", textAlign: "left", marginBottom: "10px" }}>
                  Online Profile Management
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", textAlign: "left", marginBottom: "10px" }}>
                  Counseling and Guidance
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", textAlign: "left", marginBottom: "10px" }}>
                  Personalized Matchmaking
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>
                  Packages
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", textAlign: "center", marginBottom: "10px" }}>
                  Free
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", textAlign: "center", marginBottom: "10px" }}>
                  Basic
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", textAlign: "center", marginBottom: "10px" }}>
                  Silver
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", textAlign: "center", marginBottom: "10px" }}>
                  Gold
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>
                  Proposals
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", textAlign: "center", marginBottom: "10px" }}>
                  Single
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", textAlign: "center", marginBottom: "10px" }}>
                  Second Marriage
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", textAlign: "center", marginBottom: "10px" }}>
                  Divorced
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "16px", textAlign: "center", marginBottom: "10px" }}>
                  etc
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
