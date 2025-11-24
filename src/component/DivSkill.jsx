import { Box, Typography, useTheme } from '@mui/material'


const DivSkill = ({ width }) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        width: "350px",
        height: "15px",
        bgcolor: theme.palette.favColor.cont,
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          width: 0,
          height: "15px",
          bgcolor: theme.palette.text.primary,
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: "10px",
          animation: `fadeInSkill 3s forwards`,
        }}
      >
        <Typography
          sx={{
            width: "28px",
            height: "28px",
            bgcolor: theme.palette.text.primary,
            borderRadius: "50%",
            border: "2px solid #2C2C2C",
            position: "absolute",
            top: "-5px",
            left: 0,
            animation: "left 3.3s forwards",
            color: theme.palette.bg.main,
            textAlign: "center",
            fontSize: "10px",
            padding: "2px",
          }}
        >
          {width}%
        </Typography>
      </Typography>
    </Box>
  );
};

export default DivSkill