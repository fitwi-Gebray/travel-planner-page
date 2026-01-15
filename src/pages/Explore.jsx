import { useLocation } from "react-router-dom";
import { Typography, Box, Grid, Paper } from "@mui/material";
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
        p: 4,
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd, #f5f5f5)",
        color: "#1a1a1a",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
        Explore Destinations
      </Typography>

      {search && (
        <Typography sx={{ mb: 4, opacity: 0.8 }}>
          Showing results for: <strong>{search}</strong>
        </Typography>
      )}

      <Grid container spacing={3}>
        {filtered.length > 0 ? (
          filtered.map((d) => (
            <Grid item xs={12} sm={6} md={4} key={d.id}>
              <Paper
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  background: "white",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <a href={d.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={d.image}
                    alt={d.name}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                </a>

                <Box sx={{ p: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {d.name}
                  </Typography>
                  <Typography sx={{ opacity: 0.7 }}>{d.country}</Typography>
                  <Typography sx={{ mt: 1, opacity: 0.8, fontSize: "0.9rem" }}>
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
    </Box>
  );
}

export default Explore;
