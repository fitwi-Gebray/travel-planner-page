import { useLocation } from "react-router-dom";
import { Typography, Box, Paper, Container } from "@mui/material";
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
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={700} mb={2}>
          Explore Destinations
        </Typography>

        {search && (
          <Typography sx={{ mb: 4, opacity: 0.8 }}>
            Showing results for: <strong>{search}</strong>
          </Typography>
        )}

        {/* ✅ PURE CSS GRID — NO MUI GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {filtered.length > 0 ? (
            filtered.map((d) => (
              <Paper
                key={d.id}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  background: "#fff",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
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
                      display: "block",
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
                      fontSize: "0.9rem",
                      opacity: 0.85,
                    }}
                  >
                    {d.description}
                  </Typography>

                  <Typography sx={{ mt: 1, opacity: 0.7 }}>
                    Rating: {d.rating} / 5
                  </Typography>
                </Box>
              </Paper>
            ))
          ) : (
            <Typography>No destinations found.</Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Explore;
