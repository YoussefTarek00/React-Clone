import { useTheme } from "@mui/material/styles";
import * as React from "react";

import {
  Box,
  Toolbar,
  IconButton,
  Menu,
  Avatar,
  ListItem,
  Link,
  useMediaQuery,
  Dialog,
  Divider,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
import ReactLogo from "../../../../Images/logo192.png";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import {
  Search,
  SearchIconWrapper,
  StyledAppBar,
  StyledInputBase,
} from "../../Style/AccessThemes";
import NavbarData from "./Data/NavbarData";
import NavbarMenu from "./Data/NavbarMenu";
import SupportUk from "./SupportUk";
import useIsScrolledDown from "./HideOnScroll";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Navbar = ({ mode, setMyMode }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Dialog
        sx={{ mt: 7 }}
        fullScreen={fullScreen}
        open={isMobileMenuOpen}
        onClick={handleMobileMenuClose}
        PaperProps={{ style: { backgroundColor: theme.palette.bgColors.main } }}
        TransitionComponent={Transition}
      >
        <IconButton
          size="large"
          color="inherit"
          onClick={handleMobileMenuClose}
          aria-label="close"
          sx={{ p: 2, width: "60px" }}
        >
          <CloseIcon />
        </IconButton>
        <Divider />
        <NavbarMenu />
        <Divider />
      </Dialog>
    </Menu>
  );
  const isScrolledDown = useIsScrolledDown(100);
  return (
    <>
      <StyledAppBar elevation={0}>
        <Box sx={{ display: isScrolledDown ? "none" : "block" }}>
          <SupportUk />
        </Box>
        <Toolbar>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => {
              navigate("/");
            }}
          >
            <Avatar alt="react" src={ReactLogo} />
          </IconButton>

          <Search sx={{ borderRadius: 20, flexGrow: 1 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <NavbarData />
          </Box>
          <Box sx={{ display: "flex" }}>
            <ListItem>
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "currentMode",
                    mode !== "dark" ? "dark" : "light"
                  );

                  setMyMode(mode !== "dark" ? "dark" : "light");
                }}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <LightModeIcon />
                ) : (
                  <NightlightRoundIcon />
                )}
              </IconButton>
            </ListItem>

            <Link
              sx={{ display: "flex" }}
              color="inherit"
              href="https://github.com/facebook/react/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </StyledAppBar>
      {renderMobileMenu}
    </>
  );
};

Navbar.propTypes = {
  mode: PropTypes.any.isRequired,
  setMyMode: PropTypes.any.isRequired,
};

export default Navbar;
