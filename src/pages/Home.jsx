import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const flights = [
  {
    top: "28%",
    delay: 0,
    size: 90,
    opacity: 0.8,
    duration: 14,
    direction: "ltr",
  },
  {
    top: "40%",
    delay: 3,
    size: 70,
    opacity: 0.85,
    duration: 16,
    direction: "rtl",
  },
  {
    top: "55%",
    delay: 6,
    size: 110,
    opacity: 0.9,
    duration: 18,
    direction: "ltr",
  },
  {
    top: "65%",
    delay: 9,
    size: 80,
    opacity: 0.8,
    duration: 17,
    direction: "rtl",
  },
];

function Home() {
  const [query, setQuery] = React.useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/explore?search=${encodeURIComponent(query)}`);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1502920917128-1aa500764b8a?q=80&w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
        }}
      />

      {/* Multiple flying planes (bidirectional, faster, whiter) */}
      {flights.map((flight, i) => {
        const isLTR = flight.direction === "ltr";
        const startX = isLTR ? "-15vw" : "115vw";
        const endX = isLTR ? "115vw" : "-15vw";

        return (
          <motion.div
            key={i}
            initial={{ x: startX, y: 100, opacity: 0 }}
            animate={{ x: endX, y: -80, opacity: flight.opacity }}
            transition={{
              duration: flight.duration,
              delay: flight.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              top: flight.top,
              zIndex: 1,
            }}
          >
            <FlightTakeoffIcon
              sx={{
                fontSize: flight.size,
                color: "#ffffff", // pure white color
                transform: isLTR ? "scaleX(1)" : "scaleX(-1)",
              }}
            />
          </motion.div>
        );
      })}

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Paper
          elevation={10}
          sx={{
            p: 5,
            maxWidth: 700,
            width: "100%",
            textAlign: "center",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            borderRadius: 4,
          }}
        >
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Find Your Next Destination
          </Typography>

          <Typography color="text.secondary" mb={4}>
            Search flights, explore destinations, and plan unforgettable
            journeys
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              placeholder="Search destinations..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />

            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                fontWeight: 700,
                background: "linear-gradient(90deg, #00b4d8, #0077b6)",
              }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}

export default Home;
