import { Box, Container } from "@mui/material";

import { NavLink } from "react-router-dom";
import Social from "./Social";


const Footer = () => {
  return (
    <footer
      style={{
        height: "70vh",

        bottom: "0",
        right: "0",
        left: "0",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#8d8a89ff"
          fillOpacity="1"
          d="M0,288L16,282.7C32,277,64,267,96,234.7C128,203,160,149,192,144C224,139,256,181,288,186.7C320,192,352,160,384,149.3C416,139,448,149,480,128C512,107,544,53,576,69.3C608,85,640,171,672,202.7C704,235,736,213,768,192C800,171,832,149,864,154.7C896,160,928,192,960,181.3C992,171,1024,117,1056,122.7C1088,128,1120,192,1152,197.3C1184,203,1216,149,1248,144C1280,139,1312,181,1344,213.3C1376,245,1408,267,1424,277.3L1440,288L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
        />
      </svg>{" "}
      <Box
        sx={{
          backgroundColor: "#8d8a89ff",
          margin: "0",
          padding: "10px",
          boxShadow: "10px -20px 20px #8d8a89ff",
        }}
      >
        <Container sx={{ textAlign: "center", margin: "auto" }}>
          <Box sx={{ width: "400px", margin: "auto" }}>
            <Social />
          </Box>
          Designed and developed by <NavLink to="/">Suzan Hamdy</NavLink> &copy;
          2025
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
