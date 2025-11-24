import {
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  Button,
} from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";

import animt from "../animation/Animation - 1751037118659";

import Social from "../component/Social";
import { LuDownload } from "react-icons/lu";



const About = () => {
  const theme = useTheme();
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
  return (
    <Container sx={{ my: "20px" }}>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        height={{ xs: "130vh", sm: "80vh", md: "60vh" }}
        spacing={4}
      >
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              position: "relative",
              width: "max-content",
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "1.2em",
              backgroundColor: "#3c3f45",
              color: "white",
              padding: "10px 30px",
              borderRadius: "30px",
              border: `2px solid #f48915`,
              overflow: "hidden",
              transition: ` all 0.3s ease-in-out`,
              zIndex: 12,
            }}
          >
            <Typography
              variant="h6"
              sx={{ zIndex: 12, wordSpacing: "5px", letterSpacing: "2px" }}
            >
              {" "}
              I'm suzan Hamdy Abd Elaziz
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              sx={{
                width: "110px",
                height: "50px",
                backgroundColor: "#f48915",
                position: "absolute",
                top: "0",
                left: "0",
                borderRadius: "30px",
                zIndex: -2,
                animation: "right 5s infinite alternate",
              }}
            ></Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              wordSpacing: "5px",
              letterSpacing: "2px",
              fontSize: "1.5em",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                marginRight: "8px",
                fontWeight: "bold",
                mt: 1,
                textShadow: "1px 1px 1px  #fa5042 ",
              }}
              gutterBottom
            >
              I'm a
            </Typography>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "  Full Stack Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                " Frontend Developer",
                1000,
                " Backend Developer",
                1000,
                " MERN Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={70}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </Box>
          <Social />
          <Button mt={4} sx={button}>
            <a
              className="btn"
              href="../assets/RenderCV.pdf"
              download={true}
              style={{ zIndex: 12, color: theme.palette.text.main }}
            >
              Download CV
            </a>
            <Typography className="color" sx={buttonIcon}>
              <LuDownload />
            </Typography>
          </Button>
        </Box>

        <Box
          sx={{
            overflow: "hidden",
            borderRadius: "100px",
            bgcolor: "#f48915",
            width: { xs: "100%", sm: "70%", md: "35%" },
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie
            animationData={animt}
            loop={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default About;
