

//   useEffect(() => {
//     const handleScroll = () => {
//       const y = window.scrollY;
    
//       setShowTopBtn(y > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);


//       {showTopBtn && (
//         <Button
//           sx={{
//             border: ` 2px solid ${theme.palette.text.main}`,

//             color: ` var(--orange)`,
//             transition: "0.3s",
//             background: ` linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)`,
//             position: "fixed",
//             zIndex: "100",
//             bottom: "20px",
//             right: "20px",
//             cursor: "pointer",
//             p: "1px",
//             fontSize: "10px",
//             borderRadius: "50%",
//           }}
//           onClick={() => scrollToTop()}
//           smooth={true}
//           duration={500}
//         >
//           <IoIosArrowUp
//             style={{ width: "100%", height: "100%", margin: "0px" }}
//           />
//         </Button>
//       )}
//     </Box>
      
//     )}
//     </>
//   );
// };

// export default Home;



import { useEffect, useState } from "react";
import { Box, Button, Container, useTheme } from "@mui/material";
import Lottie from "lottie-react";
import an from "../animation/basic loading animation.json";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import About2 from "../component/About2";
import { IoIosArrowUp } from "react-icons/io";

const Home = () => {
  const theme = useTheme();

  const [isLoad, setIsLoad] = useState(true); // loading = true

  const [showTopBtn, setShowTopBtn] = useState(false);

  const line = {
    width: "200px",
    height: "2px",
    borderRadius: "5px",
    margin: "10px",
    transition: "1s",
    background: theme.palette.text.main,
    "&:hover": {
      width: "100%",
    },
  };

  // fake loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoad(false);
    }, 2000); // 2 seconds loading

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoad) {
    return (
      <Container sx={{ py: 4, textAlign: "center" }}>
        <Lottie
          animationData={an}
          loop={false}
          style={{ width: "300px", margin: "auto" }}
        />
      </Container>
    );
  }

  return (
    <Box sx={{ py: 4, overflowX: "hidden" }}>
      <Box id="about" mb={4}>
        <About />
      </Box>
      <Box sx={line}></Box>

      <Box id="about2" mb={4}>
        <About2 />
      </Box>
      <Box sx={line}></Box>

      <Box id="skills" mb={4}>
        <Skills />
      </Box>
      <Box sx={line}></Box>

      <Box id="projects" mb={4}>
        <Projects />
      </Box>
      <Box sx={line}></Box>

      <Box id="education" mb={4}>
        <Education />
      </Box>
      <Box sx={line}></Box>

      <Box id="contact" mb={4}>
        <Contact />
      </Box>

      {showTopBtn && (
        <Button
          sx={{
            border: `1px solid ${theme.palette.text.main}`,
            color: "var(--orange)",
            background:
              "linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)",
            position: "fixed",
            zIndex: 100,
            bottom: 20,
            right: 20,
            p: "6px",
            borderRadius: "50%",
          }}
          onClick={scrollToTop}
        >
          <IoIosArrowUp
            style={{ width: "100%", height: "100%", margin: "0px" }}
          />
        </Button>
      )}
    </Box>
  );
};

export default Home;
