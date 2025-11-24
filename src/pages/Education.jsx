import { Avatar, Container, Grid, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { data2 } from '../component/Data2';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { motion } from "framer-motion";


const Education = () => {
  const [first, setFirst] = useState(0);
  const tLength = data2.length;
const theme = useTheme();
const MotionGrid = motion(Grid);



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
        Education
      </Typography>
      <Grid
        container
        key={data2[first].id}
        sx={{
          padding: "50px 10px",
          margin: "10px",
          gap: "20px",
          transition: "0.6s",
        }}
      >
        <MotionGrid
          initial={{ x: "-50px" }}
          animate={{ x: "0" }}
          transition={{ ease: "easeOut", duration: 2 }}
          item
          sx={{
            padding: { sm: "20px", md: "40px" },
            width: { sm: "100%", md: "55%" },
            lineHeight: "30px",
            position: "relative",
            transition: "0.6s",
          }}
        >
          <Typography> {data2[first].desc} </Typography>
          <Typography>{data2[first].duration} </Typography>
          <Typography>{data2[first].score} </Typography>

          <Typography>{data2[first].date} </Typography>

          <Grid
            container
            sx={{
              gap: "12px",
              margin: "5px",

              position: "absolute",
              bottom: "20px",
              right: "20px",
              transition: "0.6s",
            }}
          >
            <Grid
              item
              sx={{
                padding: "5px",
                borderRadius: "50%",
                fontSize: "25px",
                border: "1px solid #f48915",
                cursor: "pointer",

                transition: "0.6s",
                "&:hover": {
                  transform: "scale(0.9)",
                },
              }}
            >
              <MdArrowBackIosNew
                style={{ transition: "1s" }}
                onClick={() => {
                  first === 0
                    ? setFirst(tLength - 1)
                    : setFirst((prev) => prev - 1);
                }}
              />
            </Grid>
            <Grid
              item
              sx={{
                padding: "5px",
                borderRadius: "50%",
                fontSize: "25px",
                border: "1px solid #f48915",
                cursor: "pointer",
                transition: "0.6s",
                "&:hover": {
                  transform: "scale(0.9)",
                },
              }}
            >
              <MdArrowForwardIos
                style={{ transition: "0.6s" }}
                onClick={() => {
                  first === tLength - 1
                    ? setFirst(0)
                    : setFirst((prev) => prev + 1);
                }}
              />
            </Grid>
          </Grid>
        </MotionGrid>
        <MotionGrid
          initial={{ x: "200px" }}
          animate={{ x: "0" }}
          transition={{ ease: "easeOut", duration: 2 }}
          item
          sx={{
            position: "relative",
            // overflow: "hidden",
            padding: "10px auto",
            width: { md: "35%" },
            height: "350px",
          }}
        >
          <Typography
            sx={{
              width: { xs: "280px", md: "330px" },
              height: "280px",
              position: "absolute",
              zIndex: "1",
              borderRadius: "4px",
              transition: "0.6s",
              border: "4px solid #f48915",
              top: "0",
              left: { xs: "-12px", md: "10px" },
            }}
          ></Typography>
          <Typography
            sx={{
              width: { xs: "280px", md: "330px" },
              height: "270px",
              position: "absolute",
              zIndex: "2",
              transition: "0.6s",
              borderRadius: "4px",
              background: `linear-gradient(210.41deg,  #fa5042 ,#ffa739 1.14%, #fa5042 ,   #fa5042  100.75%)`,
              bottom: "6px",
              right: { xs: "-300px", md: "10px" },
            }}
          ></Typography>
          <Typography
            sx={{
              width: { xs: "280px", md: "330px" },
              height: "280px",
              position: "absolute",
              zIndex: "3",
              transition: "0.6s",
              top: "30px",
              left: { xs: "2px", md: "30px" },
            }}
          >
            {" "}
            <Avatar
              src={data2[first].image}
              sx={{ width: { xs: "280px", md: "330px" }, height: "280px" }}
              variant="square"
            />
          </Typography>
        </MotionGrid>
      </Grid>
    </Container>
  );
}

export default Education
