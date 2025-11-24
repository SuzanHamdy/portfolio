import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { Box, Link, Typography, useTheme } from "@mui/material";
const Social = () => {
  const theme = useTheme();


  const icon = {
    transition: "2s",
    borderRadius: "50%",
    padding: "6px",
    textAlign: "center",
    display: "flex",
    background: " transparent ",
    border: `1px solid ${theme.palette.text.main}`,
    overflow: " hidden",
    fontSize: "1.2em",
    position: "relative",
   
    "&::before": {
      content: '""',
      position: "absolute",
      width: 0,
      height: 0,
      bottom: 0,
      left: 0,

      background: "linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)",

      transition: "0.7s",
      borderRadius: "inherit",
    },

    "&:hover::before": {
      width: "100%",
      height: "100%",
    },
  };
  const iconHover = {
    background: " transparent ",
    borderRadius: "50%",
    color: theme.palette.text.main,
    textAlign: "center",
    transition: "2s",
    zIndex: 1,
    "&:hover": {
      transform: "rotateY(360deg)",
    },
  };
  return (
    <Box
      m={3}
      sx={{
        display: "flex",
        gap: "15px",
        fontSize: "1.5em",
        flexWrap: "wrap",
        m: "50px 10px",
      }}
    >
      <Box sx={icon} variant="body2">
        {" "}
        <Link
          sx={iconHover}
          href="https://www.linkedin.com/in/suzan-hamdy-3a5b33305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </Link>
      </Box>
      <Box sx={icon} variant="body2">
        <Link target="_blank" sx={iconHover} href="https://wa.me/01027379658">
          {" "}
          <FaWhatsapp />
        </Link>
      </Box>
      <Box sx={icon} variant="body2">
        <Link
          target="_blank"
          sx={iconHover}
          href="https://github.com/SuzanHamdy"
        >
          {" "}
          <FaGithub />
        </Link>
      </Box>
      <Box sx={icon} variant="body2">
        <Link
          target="_blank"
          sx={iconHover}
          href="https://www.facebook.com/share/1EpLUvnq66/"
        >
          {" "}
          <FaFacebookF />
        </Link>
      </Box>
      <Box sx={icon} variant="body2">
        <Link
          target="_blank"
          sx={iconHover}
          href="http://tiktok.com/@suzanhamdy33"
        >
          {" "}
          <FaTiktok />
        </Link>
      </Box>
      <Box sx={icon} variant="body2">
        <Link
          target="_blank"
          href="https://youtube.com/@suzanhamdy?si=ES2QHKpE2_9bxrkf"
          sx={iconHover}
        >
          <CiYoutube />
        </Link>
      </Box>
    </Box>
  );
};

export default Social;
