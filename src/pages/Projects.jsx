import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,

  useTheme,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { Data } from "../component/Data";
import { Link } from "react-router-dom";
import { FaCode, FaGithub } from "react-icons/fa6";

const Projects = () => {

    const theme = useTheme();
    const MotionCard = motion(Card);
  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
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
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {Data.map((project) => (
          <MotionCard
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            sx={{
              overflow: "hidden",
              width: "300px",
              height: "300px",
              borderRadius: "30px",
              border: `1px solid ${theme.palette.favColor.cont}`,
              bgcolor: "transparent",
              position: "relative",
              "&:hover .overlay": {
                width: "100%",
                height: "100%",
                opacity: "1",
              },
            }}
            key={project.id}
          >
            <img
              src={project.image}
              alt={project.title}
              width={300}
              height={220}
            />
            <CardContent>
              <Grid
                container
                variant="body2"
                spacing={1}
                justifyContent="center"
              >
                <Grid
                  sx={{
                    textShadow: "1px 1px 1px  #fa5042",
                  }}
                  item
                >
                  {" "}
                  {project.title}
                </Grid>
                <Grid sx={{ color: theme.palette.text.main }} item>
                  {" "}
                  {project.desc}
                </Grid>
              </Grid>
            </CardContent>
            <Typography
              className="overlay"
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                bgcolor: "rgba(0 , 0, 0, 0.8)",
                width: "0",
                height: "0",
                textAlign: "center",
                transition: "all 1s ",
                color: "white",
                opacity: "0",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "40%",
                  transform: "translate ( -40% , -40%)",
                  display: "flex",
                  gap: "3px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    width: "40px",
                    height: "40px",
                    color: "white",
                    background:
                      " linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)",
                    p: "5px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                >
                  <a
                    target="_blank"
                    style={{
                      color: "white",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                    href={project.code}
                  >
                    <FaCode />
                  </a>
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    width: "40px",
                    height: "40px",
                    color: "white",
                    background:
                      " linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)",
                    p: "5px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                >
                  <a
                    target="_blank"
                    style={{
                      color: "white",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                    href={project.live}
                  >
                    <FaGithub />
                  </a>
                </Box>
              </Box>
            </Typography>
          </MotionCard>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
