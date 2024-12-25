import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const servicesData = [
  {
    title: "Registration and Profile Creation",
    image: "/register.jpg",
  },
  {
    title: "Online Profile Management",
    image: "/profile-management.jpg",
  },
  {
    title: "Counseling and Guidance",
    image: "/guidance.jpg",
  },
  {
    title: "Personalized Matchmaking",
    image: "/matchmaking.jpg",
  },
];

const Services = () => {
  return (
    <Box
      sx={{
        padding: 3,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "30px",
          cursor: "pointer",
        }}
      >
        Our Services
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {servicesData.map((service, index) => (
          <Card
            key={index}
            sx={{
              width: 300,
              boxShadow: 3,
              borderRadius: "10px",
              backgroundColor: "#f7b6b0 ",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={service.image}
              alt={`Service ${index + 1}`}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", textAlign: "center", color:"#800000" }}
              >
                {service.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

   
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
  
        <Box
          sx={{
            width: "48%", 
            paddingRight: "10px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#800000",
            }}
          >
            Free Rishta Matrimony Services
          </Typography>

 
          <Typography variant="body1" sx={{ lineHeight: "1.8", display: "flex", alignItems: "flex-start", textAlign: "left" }}>
            <span style={{ fontSize: "20px", marginRight: "10px" }}>•</span>
            <span>
              <strong>Note:</strong> Please note that all our free matchmaking services are self-service basis i.e. Do It Yourself basis. You have to spend Your Time, Your Efforts, Your Energy to find proposal from our Free Matrimonial Website and Free Matrimonial social media groups.
            </span>
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: "1.8", display: "flex", alignItems: "flex-start", textAlign: "left" }}>
            <span style={{ fontSize: "20px", marginRight: "10px" }}>•</span>
            <span>
              <strong>Risk:</strong> You have to face the risk of dealing with every type of good or bad people and allowing such people to enter in your life.
            </span>
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: "1.8", display: "flex", alignItems: "flex-start", textAlign: "left" }}>
            <span style={{ fontSize: "20px", marginRight: "10px" }}>•</span>
            <span>
              <strong>Responsibility:</strong> We do not take any responsibility in Free Matrimonial Matchmaking Service. We have created this Free Pakistani Rishta website service to help people who cannot afford a good premium matchmaking service in Pakistan.
            </span>
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: "1.8", display: "flex", alignItems: "flex-start", textAlign: "left" }}>
            <span style={{ fontSize: "20px", marginRight: "10px" }}>•</span>
            <span>
              If in doubt, please ask your parents to advise you. Parents have more experience of life and they can guide you better.
            </span>
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: "1.8", display: "flex", alignItems: "flex-start", textAlign: "left" }}>
            <span style={{ fontSize: "20px", marginRight: "10px" }}>•</span>
            <span>
              If you are a busy professional and want us to help you find best proposal, save your time, keep you safe from online fake people then you might consider using our paid matrimonial services.
            </span>
          </Typography>
        </Box>

   
        <Box
          sx={{
            width: "1px",
            backgroundColor: "#ddd",
            margin: "0 20px",
          }}
        />

        <Box
          sx={{
            width: "48%", 
            paddingLeft: "10px", 
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#800000",
            }}
          >
            Paid Rishta Matrimony Services
          </Typography>


          <Typography variant="body1" sx={{ lineHeight: "1.8", display: "flex", alignItems: "flex-start", textAlign: "left" }}>
            <span style={{ fontSize: "20px", marginRight: "10px" }}>•</span>
            <span>
              <strong>Personalized Matchmaking:</strong> Only our Personalized Matchmaking service (Premium Matrimonial) is a Paid service in which we charge fees. Paid Premium Matrimonial service is for those who are Busy Professionals or looking for very Good Verified Proposals or want to Meet Families Directly or want Abroad/Foreign Proposals or are Highly Qualified and looking for same proposals or have some Special/Specific Requirements or looking for Quick Rishta or want to meet only genuine proposals or want to save their time and want to Get Married Soon.
            </span>
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: "1.8", display: "flex", alignItems: "flex-start", textAlign: "left" }}>
            <span style={{ fontSize: "20px", marginRight: "10px" }}>•</span>
            <span>
              <strong>Authenticity:</strong> In paid service, we take all your information and picture, fill the form, create your profile and then as per your requirement show you hands-picked proposals. These proposals are as per your requirement, authentic, and verified. This process is a faster way to find Rishta and to find proposal from educated noble families.
            </span>
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: "1.8", display: "flex", alignItems: "flex-start", textAlign: "left" }}>
            <span style={{ fontSize: "20px", marginRight: "10px" }}>•</span>
            <span>
              <strong>Fees:</strong> In paid service, our time and efforts are used to find right proposal for you so we take some advance initial registration fee and some fee after rishta is done. The fee depends on your profile and your requirement.
            </span>
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: "1.8", display: "flex", alignItems: "flex-start", textAlign: "left" }}>
            <span style={{ fontSize: "20px", marginRight: "10px" }}>•</span>
            <span>
              <strong>Payment Policy:</strong> In paid service, no processing of any type is done without initial registration fee. Kindly do not message us and tell us that you will pay full amount after rishta is done. We do not work like this.
            </span>
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: "1.8", display: "flex", alignItems: "flex-start", textAlign: "left" }}>
            <span style={{ fontSize: "20px", marginRight: "10px" }}>•</span>
            <span>
              <strong>For Low Income Users:</strong> This paid service is for those who are mentioned above. Low income / less educated people can use the free website services of organization.
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
