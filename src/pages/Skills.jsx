import { Box, Typography, Grid, Container, useTheme } from "@mui/material";
import DivSkill from "../component/DivSkill";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import { SiEjs, SiExpress, SiMongodb, SiMui, SiRedux } from "react-icons/si";

const Skills = () => {
  const theme = useTheme();
  return (
    <Container>
      <Typography
        variant="h4"
        textAlign={"center"}
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
        My Skills
      </Typography>
      <Grid container spacing={1} justifyContent="space-between" sx={{ mt: 4 }}>
        {/* Front End Skills */}

        <Grid item sx={{ margin: "20px 2px" }}>
          <FaHtml5
            style={{
              width: "30px",
              fontSize: "25px",
              animation: "logo-spin 2s linear ",
            }}
          />
          HTML
          <DivSkill width={98} />
        </Grid>
        <Grid item sx={{ margin: "20px 2px" }}>
          <FaCss3
            style={{
              width: "30px",
              fontSize: "25px",
              animation: "logo-spin 2s linear ",
            }}
          />
          CSS
          <DivSkill width={95} />
        </Grid>

        <Grid item sx={{ margin: "20px 2px" }}>
          <FaBootstrap
            style={{
              width: "30px",
              fontSize: "25px",
              animation: "logo-spin 2s linear ",
            }}
          />
          Bootstrap
          <DivSkill width={96} />
        </Grid>

        <Grid item sx={{ margin: "20px 2px" }}>
          <FaJs
            style={{
              width: "30px",
              fontSize: "25px",
              animation: "logo-spin 2s linear ",
            }}
          />
          JavaScript
          <DivSkill width={90} />
        </Grid>

        <Grid item sx={{ margin: "20px 2px" }}>
          <FaReact
            style={{
              width: "30px",
              fontSize: "25px",
              animation: "logo-spin 2s linear ",
            }}
          />
          React
          <DivSkill width={92} />
        </Grid>

        <Grid item sx={{ margin: "20px 2px" }}>
          <SiRedux
            style={{
              width: "30px",
              fontSize: "25px",
              animation: "logo-spin 2s linear ",
            }}
          />
          Redux
          <DivSkill width={88} />
        </Grid>

        <Grid item sx={{ margin: "20px 2px" }}>
          <SiMui
            style={{
              width: "30px",
              fontSize: "25px",
              animation: "logo-spin 2s linear ",
            }}
          />
          Material UI
          <DivSkill width={95} />
        </Grid>

        <Grid item sx={{ margin: "20px 2px" }}>
          <FaNodeJs
            style={{
              width: "30px",
              fontSize: "25px",
              animation: "logo-spin 2s linear ",
            }}
          />
          Node JS
          <DivSkill width={94} />
        </Grid>

        <Grid item sx={{ margin: "20px 2px" }}>
          <SiMongodb
            style={{
              width: "30px",
              fontSize: "25px",
              animation: "logo-spin 2s linear ",
            }}
          />
          MongoDB
          <DivSkill width={98} />
        </Grid>

        <Grid item sx={{ margin: "20px 2px" }}>
          <SiExpress
            style={{
              width: "30px",
              fontSize: "25px",
              animation: "logo-spin 2s linear ",
            }}
          />
          Express
          <DivSkill width={88} />
        </Grid>

        <Grid item sx={{ margin: "20px 2px" }}>
          <SiEjs
            style={{
              width: "30px",
              fontSize: "25px",
              animation: "logo-spin 2s linear ",
            }}
          />
          EJS
          <DivSkill width={90} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
