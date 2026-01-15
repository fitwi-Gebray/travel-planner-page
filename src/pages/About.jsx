import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box sx={{ p: 4, color: "white", maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        About TravelNow
      </Typography>

      <Typography sx={{ mb: 3, opacity: 0.9, lineHeight: 1.7 }}>
        TravelNow is a modern travel discovery platform designed to help
        explorers find their next adventure. Whether you're searching for iconic
        cities, hidden gems, or unique cultural experiences, our mission is to
        make travel simple, inspiring, and accessible.
      </Typography>

      <Typography sx={{ mb: 3, opacity: 0.9, lineHeight: 1.7 }}>
        We believe travel should be more than booking flights — it should be
        about discovering new perspectives, connecting with people, and creating
        unforgettable memories. Our platform is built with passion, creativity,
        and a commitment to helping travelers explore the world with confidence.
      </Typography>

      <Typography sx={{ opacity: 0.9, lineHeight: 1.7 }}>
        From personalized recommendations to curated destination guides, we’re
        here to support your journey every step of the way.
      </Typography>
    </Box>
  );
}

export default About;
