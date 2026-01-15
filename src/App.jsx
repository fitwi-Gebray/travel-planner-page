// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   TextField,
//   Grid,
//   Paper,
// } from "@mui/material";

// function App() {
//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #0d1b2a, #1b263b, #415a77)",
//         color: "white",
//         overflowX: "hidden",
//       }}
//     >
//       {/* NAVBAR */}
//       <AppBar
//         position="static"
//         sx={{
//           background: "rgba(255,255,255,0.05)",
//           backdropFilter: "blur(10px)",
//           boxShadow: "none",
//         }}
//       >
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography variant="h6" sx={{ fontWeight: 700 }}>
//             TravelNow
//           </Typography>

//           <Box>
//             <Button color="inherit" sx={{ mx: 1 }}>
//               Home
//             </Button>
//             <Button color="inherit" sx={{ mx: 1 }}>
//               Explore
//             </Button>
//             <Button color="inherit" sx={{ mx: 1 }}>
//               Contact
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* HERO SECTION */}
//       <Box
//         sx={{
//           minHeight: "80vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           px: 2,
//           position: "relative",
//         }}
//       >
//         {/* Floating Glow Orbs */}
//         <Box
//           sx={{
//             position: "absolute",
//             width: 250,
//             height: 250,
//             borderRadius: "50%",
//             background: "rgba(255,255,255,0.08)",
//             top: "10%",
//             left: "15%",
//             filter: "blur(80px)",
//             animation: "float1 8s ease-in-out infinite",
//           }}
//         />

//         <Box
//           sx={{
//             position: "absolute",
//             width: 300,
//             height: 300,
//             borderRadius: "50%",
//             background: "rgba(255,255,255,0.06)",
//             bottom: "10%",
//             right: "10%",
//             filter: "blur(100px)",
//             animation: "float2 10s ease-in-out infinite",
//           }}
//         />

//         <Typography
//           variant="h3"
//           sx={{
//             fontWeight: 800,
//             letterSpacing: "1px",
//             textShadow: "0 4px 12px rgba(0,0,0,0.6)",
//             mb: 3,
//           }}
//         >
//           Find Your Next Destination
//         </Typography>

//         <TextField
//           placeholder="Search..."
//           variant="outlined"
//           sx={{
//             width: "100%",
//             maxWidth: 400,
//             backgroundColor: "rgba(255,255,255,0.15)",
//             borderRadius: 2,
//             mb: 4,
//             input: { color: "white" },
//             "& .MuiOutlinedInput-notchedOutline": {
//               borderColor: "rgba(255,255,255,0.4)",
//             },
//             "&:hover .MuiOutlinedInput-notchedOutline": {
//               borderColor: "white",
//             },
//           }}
//         />

//         <Button
//           variant="contained"
//           size="large"
//           sx={{
//             background: "linear-gradient(90deg, #00b4d8, #0077b6)",
//             fontWeight: 700,
//             px: 5,
//             py: 1.5,
//             borderRadius: 3,
//             boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
//             "&:hover": {
//               background: "linear-gradient(90deg, #0096c7, #005f8a)",
//             },
//           }}
//         >
//           Explore Now
//         </Button>
//       </Box>

//       {/* FEATURES SECTION */}
//       <Box sx={{ py: 10, px: 3 }}>
//         <Typography
//           variant="h4"
//           sx={{ textAlign: "center", fontWeight: 700, mb: 6 }}
//         >
//           Why Choose Us
//         </Typography>

//         <Grid container spacing={4}>
//           {["Fast Booking", "Best Prices", "24/7 Support"].map((title, i) => (
//             <Grid item xs={12} md={4} key={i}>
//               <Paper
//                 sx={{
//                   p: 4,
//                   borderRadius: 4,
//                   background: "rgba(255,255,255,0.1)",
//                   backdropFilter: "blur(10px)",
//                   textAlign: "center",
//                   transition: "0.3s",
//                   "&:hover": {
//                     transform: "translateY(-10px)",
//                     background: "rgba(255,255,255,0.2)",
//                   },
//                 }}
//               >
//                 <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//                   {title}
//                 </Typography>
//                 <Typography sx={{ opacity: 0.8 }}>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* DESTINATIONS SECTION */}
//       <Box sx={{ py: 10, px: 3 }}>
//         <Typography
//           variant="h4"
//           sx={{ textAlign: "center", fontWeight: 700, mb: 6 }}
//         >
//           Featured Destinations
//         </Typography>

//         <Grid container spacing={4}>
//           {["Tokyo", "Paris", "New York", "Rome"].map((city, i) => (
//             <Grid item xs={12} sm={6} md={3} key={i}>
//               <Paper
//                 sx={{
//                   p: 4,
//                   borderRadius: 4,
//                   background: "rgba(255,255,255,0.1)",
//                   backdropFilter: "blur(10px)",
//                   textAlign: "center",
//                   transition: "0.3s",
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                     background: "rgba(255,255,255,0.2)",
//                   },
//                 }}
//               >
//                 <Typography variant="h5" sx={{ fontWeight: 700 }}>
//                   {city}
//                 </Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* FOOTER */}
//       <Box
//         sx={{
//           py: 4,
//           textAlign: "center",
//           background: "rgba(255,255,255,0.05)",
//           backdropFilter: "blur(10px)",
//         }}
//       >
//         <Typography sx={{ opacity: 0.8 }}>
//           © 2026 TravelNow — All Rights Reserved
//         </Typography>
//       </Box>

//       {/* KEYFRAME ANIMATIONS */}
//       <style>
//         {`
//           @keyframes float1 {
//             0% { transform: translateY(0px); }
//             50% { transform: translateY(-30px); }
//             100% { transform: translateY(0px); }
//           }

//           @keyframes float2 {
//             0% { transform: translateY(0px); }
//             50% { transform: translateY(40px); }
//             100% { transform: translateY(0px); }
//           }
//         `}
//       </style>
//     </Box>
//   );
// }

// export default App;
// src/App.jsx
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d1b2a, #1b263b, #415a77)",
        color: "white",
        px: { xs: 1, sm: 2, md: 4 },
      }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;
