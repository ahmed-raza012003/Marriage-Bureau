import React from "react";
import {
  Box,
  TextField,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const RegistrationForm = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        maxWidth: "900px",
        margin: "auto",
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
        marginTop: 3,
        marginBottom: 3,
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ marginBottom: 3 }}
      >
        <Grid item>
          <img
            src="main-logo.jpeg"
            alt="Logo"
            style={{ width: "100px", height: "100px" }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Date"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: 180 }}
          />
        </Grid>
      </Grid>
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", color:"maroon" }}>
        Application Form for Registration
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 , color:"maroon"}}>
        Personal Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Profile Created By" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Gender" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="CNIC No" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Date of Birth" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Country" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="State" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="City" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Marital Status" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Child Status" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Mother Tongue" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Caste" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Country of Origin" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="State of Origin" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel control={<Checkbox />} label="Smoke" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel control={<Checkbox />} label="Drink" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={<Checkbox />}
            label="Willing to Relocate"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Living Arrangements" variant="outlined" />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2, color:"maroon" }}>
        Physical Appearance
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Height" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Weight" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Body Type" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Complexion" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Hair Color" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Eye Color" variant="outlined" />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2, color:"maroon" }}>
        Hobbies and Interest
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Music" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Sports" variant="outlined" />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2, color:"maroon" }}>
        Undertaking by the Candidate
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        I hereby solemnly affirm and undertake as below:
        <br />
        a) That all the Information given above is correct to the best of my
        knowledge and belief.
        <br />
        b) That I shall abide by all current and future rules and regulation of
        this organization.
        <br />
        c) If I do not abide by the above declaration, I shall be liable for any
        disciplinary action under the Disciplinary Rules and Regulation of the
        organization.
        <br />
        d) I, therefore, agree to uphold all the rules and regulations and
        cooperate with the Happy Nikah Organization Pakistan.
      </Typography>

      <TextField
        fullWidth
        label="Signature of the Candidate"
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Date"
        variant="outlined"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 , color:"maroon"}}>
        Career Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Qualification" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="University" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Occupation" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Monthly Income" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Job Post" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Future Plan" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Profession" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Income" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Islamic Study" variant="outlined" />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2, color:"maroon" }}>
        Religion
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Religion" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Sect" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={<Checkbox />}
            label="Do you prefer Hijab?"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={<Checkbox />}
            label="Do you prefer Beard?"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel control={<Checkbox />} label="Do you keep Halal?" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={<Checkbox />}
            label="Do you prefer Salah?"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel control={<Checkbox />} label="Are you a revert?" />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2, color:"maroon" }}>
        Family Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Father's Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Father's Occupation" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Father's CNIC" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Family Type" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Family status" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Mother's Occupation" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Number of Brothers" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Number of Sisters" variant="outlined" />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2, color:"maroon" }}>
        Residency and Property Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="House Size" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Own/Rent" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Address" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Country" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="City" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Property" variant="outlined" />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2, color:"maroon" }}>
        Profile Description
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        label="Write your profile description here"
        variant="outlined"
      />
      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 , color:"maroon"}}>
        Declaration by the Father/Guardian
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        • I hereby undertake that my son/daughter/ward has submitted this
        application form with my consent and I shall be responsible for his/her
        conduct and behavior. I further undertake that I shall be responsible
        for all the fees and other expenses of my son/daughter/ward.
        <br />• To accommodate modern trends, the organization authorities have
        the right to change the fee, timetable, venue etc anytime.
      </Typography>


      <TextField
        fullWidth
        label="Signature of the Father/Guardian"
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Date"
        variant="outlined"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 , color:"maroon"}}>
        Rules and Regulations
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        • Dues once paid are neither refundable nor adjustable, in any case.
        <br />
        • Decision of the Happy Nikah organization Pakistan will be final, in
        any case.
        <br />• The organization authority as its decisions are not
        challengeable. No prior notice in this regard is obligatory.
      </Typography>

      <TextField
        fullWidth
        label="Signature of the Candidate"
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="CNIC No. of Candidate"
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Signature of the Father/Guardian"
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="CNIC No. of Father/Guardian"
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2, color:"maroon" }}>
        Life Partner Expectation
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Gender" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Age" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="City" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Marital Status" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Caste" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Height" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Build" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Religion" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Sect" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Qualification" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Profession" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Monthly Income" variant="outlined" />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2, color:"maroon" }}>
        Account Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Cell No Candidate" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Email Candidate" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Cell No father" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="CNIC of Father" variant="outlined" />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />
      <Typography
        variant="body2"
        sx={{
          color: "#800000",
          marginBottom: 2,
          fontSize: "0.875rem",
        }}
      >
        I shall be liable for any disciplinary action under the Disciplinary
        Rules and Regulation of the organization and I follow all rules and
        regulation of the Happy Nikah Organization Pakistan.
      </Typography>

      <TextField
        fullWidth
        label="Signature of the Candidate"
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="CNIC No. of Candidate"
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Signature of the Father/Guardian"
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="CNIC No. of Father/Guardian"
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
      <Divider sx={{ my: 4 }} />
      <Box textAlign="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "maroon",
            "&:hover": { backgroundColor: "#a83232" },
          }}
        >
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default RegistrationForm;
