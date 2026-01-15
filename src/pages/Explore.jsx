import { useLocation } from "react-router-dom";
import { Typography, Box, Grid, Paper, Container } from "@mui/material";
import { destinations } from "../data/destinations";

function Explore() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get("search")?.toLowerCase() || "";

  const filtered = destinations.filter(
    (d) =>
      d.name.toLowerCase().includes(search) ||
      d.country.toLowerCase().includes(search)
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd, #f5f5f5)",
        py: 6,
      }}
    >
      {/* Max-width wrapper (VERY IMPORTANT) */}
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
          Explore Destinations
        </Typography>

        {search && (
          <Typography sx={{ mb: 4, opacity: 0.8 }}>
            Showing results for: <strong>{search}</strong>
          </Typography>
        )}

        {/* Grid container */}
        <Grid container spacing={4}>
          {filtered.length > 0 ? (
            filtered.map((d) => (
              <Grid key={d.id} item xs={12} sm={6} md={4}>
                <Paper
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 10px 28px rgba(0,0,0,0.18)",
                    },
                  }}
                >
                  <a href={d.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </a>

                  <Box sx={{ p: 2, flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight={700}>
                      {d.name}
                    </Typography>
                    <Typography sx={{ opacity: 0.7 }}>{d.country}</Typography>

                    <Typography
                      sx={{
                        mt: 1,
                        opacity: 0.85,
                        fontSize: "0.9rem",
                      }}
                    >
                      {d.description}
                    </Typography>

                    <Typography sx={{ mt: 1, opacity: 0.7 }}>
                      Rating: {d.rating} / 5
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))
          ) : (
            <Typography>No destinations found.</Typography>
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default Explore;
