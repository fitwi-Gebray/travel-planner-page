import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_yxi6i3a",
        "template_mxtnxdt",
        templateParams,
        "1M7uR3ocUiy1n0acu"
      )

      .then(
        () => {
          alert("Message sent successfully!");

          // Clear fields
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  const whiteField = {
    background: "white",
    borderRadius: 1,
    "& .MuiInputBase-input": { color: "black" },
    "& .MuiInputLabel-root": { color: "black" },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0077b6",
    },
    "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#00b4d8",
    },
  };

  return (
    <Box sx={{ p: 4, color: "white", maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        Contact Us
      </Typography>

      <Typography sx={{ mb: 4, opacity: 0.8 }}>
        Have questions or want to work with us? Send a message below.
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={whiteField}
          />

          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={whiteField}
          />

          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={whiteField}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #00b4d8, #0077b6)",
              fontWeight: 700,
              py: 1.5,
            }}
          >
            Send Message
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default Contact;
