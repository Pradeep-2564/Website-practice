import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

function Support() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Support for Medical and Engineering Colleges
      </Typography>
      <Typography variant="body1" paragraph>
        Choosing between medical and engineering colleges can be a daunting task. Whether it's about understanding the admission process, scholarships, or career advice, we are here to help. Our support services are designed to guide you in making informed decisions about your academic journey.
      </Typography>

      <Typography variant="h4" gutterBottom>
        Admission Process Assistance
      </Typography>
      <Typography variant="body1" paragraph>
        Applying to medical and engineering colleges requires navigating through a detailed admission process, including entrance exams, interviews, and application forms. Here's a brief overview of the steps involved:
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">1. Medical College Admission Process</Typography>
        <Typography variant="body1" paragraph>
          - Most medical colleges require candidates to pass an entrance exam like <strong>NEET</strong> (National Eligibility cum Entrance Test) for MBBS and other medical programs. After clearing the exam, students are eligible for counseling sessions to select a college based on their rank.
        </Typography>

        <Typography variant="h6">2. Engineering College Admission Process</Typography>
        <Typography variant="body1" paragraph>
          - Engineering aspirants generally need to appear for national-level exams like <strong>JEE Main</strong> and <strong>JEE Advanced</strong> for admission to the prestigious IITs. Other engineering colleges also conduct their own entrance exams for admission.
        </Typography>
      </Box>

      {/* Support Information Cards */}
      <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
        Support Services for Students
      </Typography>
      <Typography variant="body1" paragraph>
        We offer support services to help you through the entire journey of your medical or engineering career. Our support includes:
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/Images/medadm.jpg"
              alt="Medical Admission Support"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Medical Admission Counseling
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We offer one-on-one counseling sessions to guide you through the medical admission process, helping you with exam strategies, documents required, and college selection.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Get Support
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/Images/engadm.jpg"
              alt="Engineering Admission Support"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Engineering Admission Assistance
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our engineering admission support includes exam preparation tips, understanding entrance exam eligibility, and guidance on choosing the right college based on your preferences.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Get Support
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
        Scholarships and Financial Aid
      </Typography>
      <Typography variant="body1" paragraph>
        We understand that education can be expensive, which is why we offer support in finding scholarships, financial aid, and loan options. Here’s how we can help:
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">1. Medical Scholarships</Typography>
        <Typography variant="body1" paragraph>
          - Many medical colleges offer merit-based and need-based scholarships to deserving students. We provide information about these scholarships and guide you on how to apply.
        </Typography>

        <Typography variant="h6">2. Engineering Scholarships</Typography>
        <Typography variant="body1" paragraph>
          - Several engineering colleges provide financial aid through scholarships or fee waivers for students who excel in entrance exams or come from economically weaker sections.
        </Typography>
      </Box>

      {/* Financial Aid Support Cards */}
      <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
        Financial Aid Services
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/Images/medsch.png"
              alt="Scholarships for Medical Students"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Medical Scholarships Assistance
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our team helps students find and apply for medical scholarships and financial assistance, ensuring that finances are not a barrier to pursuing a career in healthcare.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Apply for Scholarships
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/Images/engsch.jpg"
              alt="Scholarships for Engineering Students"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Engineering Scholarships Assistance
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We assist engineering students in finding and applying for scholarships, helping them alleviate the cost of education and achieve their goals.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Apply for Scholarships
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
        Career Counseling and Guidance
      </Typography>
      <Typography variant="body1" paragraph>
        After completing your medical or engineering degree, the next step is to launch your career. Our counseling services include:
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">1. Medical Career Counseling</Typography>
        <Typography variant="body1" paragraph>
          - We provide guidance on career options available after completing an MBBS or other medical degrees. This includes information on further studies, job opportunities, and specializations.
        </Typography>

        <Typography variant="h6">2. Engineering Career Counseling</Typography>
        <Typography variant="body1" paragraph>
          - Our career counselors help engineering graduates understand job market trends, work opportunities, and the potential for growth in various engineering sectors.
        </Typography>
      </Box>

    </Container>
  );
}

export default Support;
