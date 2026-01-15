import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        mt: 8,
        py: 4,
        textAlign: "center",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        color: "white",
      }}
    >
      <Typography sx={{ opacity: 0.8 }}>
        © {new Date().getFullYear()} TravelNow — Built by Fitwi
      </Typography>
    </Box>
  );
}

export default Footer;
