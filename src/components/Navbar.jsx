import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        mb: 2,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          TravelNow
        </Typography>

        <Box>
          <Button component={Link} to="/" color="inherit" sx={{ mx: 1 }}>
            <HomeIcon sx={{ mr: 1 }} /> Home
          </Button>

          <Button component={Link} to="/explore" color="inherit" sx={{ mx: 1 }}>
            <TravelExploreIcon sx={{ mr: 1 }} /> Explore
          </Button>

          <Button component={Link} to="/contact" color="inherit" sx={{ mx: 1 }}>
            <EmailIcon sx={{ mr: 1 }} /> Contact
          </Button>

          <Button component={Link} to="/about" color="inherit" sx={{ mx: 1 }}>
            <InfoIcon sx={{ mr: 1 }} /> About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
