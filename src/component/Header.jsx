import { useContext, useState } from "react";
import { ColorModeContext } from "../theme";

import {
  
  Menu as MenuIcon,
} from "@mui/icons-material";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { FcGraduationCap } from "react-icons/fc";
import { FaSun } from "react-icons/fa6";
import { BsSun } from "react-icons/bs";


const pages = ["Home", "About", "Projects", "Skills", "Education", "Contact"];

const Header = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        backdropFilter: "blur(10px)",
        bgcolor: theme.palette.bg.main,
        color: theme.palette.text.primary,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: theme.palette.bg.main,
          color: theme.palette.text.main,
        }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: { md: "space-around" } }}
        >
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: { xs: 1, md: 0 },
              display: "flex",
              fontFamily: "Dancing Script",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            <FcGraduationCap
              style={{
                display: "block",
                fontSize: "30px",
                marginRight: "8px",
                padding: "5px",
                borderRadius: "50%",
                background:
                  " linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)",
              }}
            />
            Suzan_Hamdy
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              sx={{ display: { xs: "block", md: "none" }, opacity: "0.9" }}
            >
              {pages.map((page) => (
                <MenuItem key={page} sx={{ width: "300px" }}>
                  <NavLink
                    to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                    onClick={handleCloseNavMenu}
                    style={({ isActive }) => ({
                      width: "100%",
                      textAlign: "center",
                      textDecoration: "none",
                      cursor: "pointer",
                      color: isActive ? "orange" : `${theme.palette.text.main}`,
                      fontWeight: isActive ? 900 : 400,
                      transition: ".3s",
                    })}
                  >
                    <Typography variant="body2">{page}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              transition: "1",
              padding: "7px 20px",
              borderRadius: 5,
              gap: 4,

              border: `1px solid${theme.palette.favColor.main}`,
            }}
          >
            {pages.map((page) => (
              <NavLink
                key={page}
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                style={({ isActive }) => ({
                  width: "100%",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: isActive ? "orange" : "inherit",
                  fontWeight: isActive ? 700 : 400,
                  transition: ".3s",
                })}
              >
                <Typography
                  sx={{ "&:hover": { color: "orange" } }}
                  variant="body2"
                >
                  {page}
                </Typography>
              </NavLink>
            ))}
          </Box>

          {/* Theme Toggle */}

          <Box sx={{ flexGrow: 0 }}>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <BsSun />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <FaSun />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
