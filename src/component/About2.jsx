import { Box, Container, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Lottie from "lottie-react";
import AnimationData from '../animation/Animation - 1752076373142.json'
import { motion } from "framer-motion";
const About2 = () => {
  const theme = useTheme();
const MotionBox = motion(Box);


  return (
    <Container sx={{ height: { xs: "130vh", md: "70vh" }, p: "10px" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          width: "max-content",
          wordSpacing: "5px",
          letterSpacing: "2px",
          m: "40px auto",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          fontSize: "2.8em",
          transform: "skew(40deg)",
          padding: "10px 30px",
          transition: "0.5s ",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: `${theme.palette.text.main}`,
          border: ` 1px solid ${theme.palette.text.main}`,

          color: "transparent",
          background:
            " linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)",
          "&:hover": {
            transform: "skew(0deg)",
          },
        }}
      >
        About Me
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
      >
        <MotionBox
          initial={{ x: "-500px" }}
          animate={{ x: "0" }}
          transition={{ ease: "easeOut", duration: 2 }}
          sx={{ bgcolor: "#f48915", borderRadius: "20%" }}
        >
          <Lottie
            animationData={AnimationData}
            loop={true}
            style={{ width: "300px", height: "300px", margin: "auto" }}
          />
        </MotionBox>
        <MotionBox
          initial={{ x: "500px" }}
          animate={{ x: "0" }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <Typography
            variant="body1"
            align="justify"
            sx={{ fontSize: "18px", lineHeight: "1.6" }}
          >
            I am a passionate Full Stack Developer with expertise in both
            frontend and backend technologies. I specialize in creating dynamic
            and responsive web applications using the MERN stack (MongoDB,
            Express.js, React.js, Node.js). My goal is to build efficient and
            scalable solutions that provide exceptional user experiences. With a
            strong foundation in web development principles and a keen eye for
            detail, I am dedicated to delivering high-quality code and
            innovative features. Let's collaborate to bring your ideas to life
            through cutting-edge web development!
          </Typography>
        </MotionBox>
      </Stack>
    </Container>
  );
}

export default About2