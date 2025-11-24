

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Container,
  useTheme,
} from "@mui/material";

import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { RiSendPlaneLine } from "react-icons/ri";

const Contact = () => {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedMessage, setFeedMessage] = useState("");
  const button = {
    width: "200px",
    height: "40px",
    mt: 2,
    overflow: " hidden",
    border: `1px solid ${theme.palette.text.main}`,
    borderRadius: "20px",
    color: theme.palette.text.main,
    transition: "2s",
    background: "transparent",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      transform: " translateX(100%)",
      inset: 0,
      background: "linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)",

      transition: " 0.3s",
      borderRadius: "inherit",
    },
    "&:hover::before": { transform: " translateX(0)" },
    "&:hover .color": { bgcolor: "transparent" },
  };

  const buttonIcon = {
    position: " absolute",
    inset: "-1px -1px -1px auto",
    p: 1,
    borderRadius: "50%",
    aspectRatio: "1/1",
    ml: 1,
    zIndex: 1,
    display: "grid",
    placeItems: "center",
    background: " #fa5042 ",
  };



  const change = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFeedMessage("Please fill in all fields.");
      setTimeout(() => setFeedMessage(""), 3000);
      return;
    }

    try {
      await emailjs.send(
        "service_1aw1bbu",
        "template_nb78tus",
        formData,
        "zM0rSbUvx1VjGStkQ"
      );

      setFeedMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setFeedMessage(""), 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setFeedMessage("Failed to send message. Try again.");
      setTimeout(() => setFeedMessage(""), 3000);
    }
  };

  const cardStyle = {
    width: "250px",
    height: "100px",
    background: "linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)",
    borderBottomRightRadius: "20px",
    color: "white",
    margin: "1px auto 10px",
    textAlign: "center",
    padding: "15px 5px",
    transition: "0.3s",
    cursor: "pointer",
    "&:hover": { transform: "translate(10px, -10px)" },
  };

  return (
    <Container>
      <Typography
        variant="h5"
        align="center"
        sx={{
          width: "max-content",
          letterSpacing: "2px",
          m: "40px auto",
          fontWeight: "bold",
          fontSize: "2.8em",
          transform: "skew(40deg)",
          p: "10px 30px",
          transition: "0.5s",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: theme.palette.text.main,
          border: `1px solid ${theme.palette.text.main}`,
          color: "transparent",
          background:
            "linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)",
          "&:hover": { transform: "skew(0deg)" },
        }}
      >
        Contact Us
      </Typography>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        height={{ xs: "auto", md: "80vh" }}
      >
        {/* Form Section */}
        <Stack
         
         
          sx={{ width: { xs: "100%", sm: 500 }, borderRadius: 2 }}
        >
          <Box component="form" onSubmit={sendEmail} sx={{ p: 2 }}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={change}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={change}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={change}
              fullWidth
              margin="normal"
            />

            {feedMessage && (
              <Typography
                color={feedMessage.includes("success") ? "green" : "error"}
                variant="body2"
                sx={{ mt: 1 }}
              >
                {feedMessage}
              </Typography>
            )}

            <Button type="submit" variant="contained" sx={button}>
              <a style={{ zIndex: 12 }}> Send Message</a>
              <Typography className="color" sx={buttonIcon}>
                <RiSendPlaneLine />
              </Typography>
            </Button>
          </Box>
        </Stack>

        {/* Contact Cards */}
        <Stack
       
        
          sx={{ width: { xs: "100%", sm: 400 } }}
        >
          <Box
            component="a"
            target="_blank"
            href="mailto:suzanhamdy157@gmail.com"
            sx={cardStyle}
          >
            <IoMailUnreadOutline style={{ fontSize: 30 }} />
            <Typography> suzanhamdy157@gmail.com</Typography>
          </Box>

          <Box
            component="a"
            target="_blank"
            href="https://wa.me/01027379658"
            sx={cardStyle}
          >
            <FaWhatsapp style={{ fontSize: 30 }} />
            <Typography> 01027379658</Typography>
          </Box>

          <Box
            component="a"
            target="_blank"
            href="https://m.me/Suzan.Hamdy"
            sx={cardStyle}
          >
            <FaFacebookMessenger style={{ fontSize: 30 }} />
            <Typography> @Suzan Hamdy</Typography>
          </Box>

          <Box
            component="a"
            target="_blank"
            href="https://www.google.com/maps/place/Egypt/Mansoura/@31.0409073,31.3784746,7z/data=!3m1!4b1!4m5!3m4!1s0x1458405f2f6a7bcd:0x3a3e8b2fbb8f6f6!8m2!3d26.820553!4d30.802498"
            sx={cardStyle}
          >
            <FaLocationDot style={{ fontSize: 25 }} />
            <Typography> Egypt, Mansoura, El-sinbellawein</Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Contact;
