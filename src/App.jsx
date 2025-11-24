import "./App.css";
import React, { Suspense } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
const Home =  React.lazy(() => import("./pages/Home"));

const Contact = React.lazy(() => import("./pages/Contact"));
const Skills = React.lazy(() => import("./pages/Skills"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Education = React.lazy(() => import("./pages/Education"));
const Footer = React.lazy(() => import("./component/Footer"));
const About2 = React.lazy(() => import("./component/About2"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <Box
      sx={{ bgcolor: theme.palette.bg.main, color: theme.palette.text.main }}
    >
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <br />
          <br />
          <br />
          <Routes>
            <Route path="/" element={<Suspense><Home /></Suspense>} />
            <Route path="/about" element={<Suspense><About2 /></Suspense>} />
            <Route path="/contact" element={<Suspense><Contact /></Suspense>} />
            <Route path="/education" element={<Suspense><Education /></Suspense>} />
            <Route path="/projects" element={<Suspense><Projects /></Suspense>} />
            <Route path="/skills" element={<Suspense><Skills /></Suspense>} />
            <Route path="*" element={<Suspense><NotFound /></Suspense>} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Box>
  );
};

export default App;
