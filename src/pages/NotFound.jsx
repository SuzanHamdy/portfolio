import { Box, Button } from '@mui/material'

import { useNavigate } from 'react-router-dom';
import newe from "../assets/page.png"
const NotFound = () => {
    const navigate = useNavigate();
      
  return (
    <Box
      sx={{
        backgroundImage: `url(${newe})`,
        width: "100%",
        height: "100vh",
        display: "flex",
        backgroundSize: "cover",
        backgroundPosition: "center",
        alignItems: "start",
        paddingTop: "100px",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        fullWidth
        sx={{
          width: "200px",
          height: "50px",
          padding: " 1px 1px 1px 10px",

          cursor: "pointer",
          border: ` 1px solid #ffffff`,
          borderRadius: "30px",
          color: "#ffffff",
          transition: "0.3s",
            background:
              "linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)",
          "&:hover": {
            opacity: 0.7 ,
          },
  
        }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
    </Box>
  );
}

export default NotFound