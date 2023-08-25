import { useTheme } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
  List,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useState } from "react";
import ReactLogo from "../../../../Images/logo192.png";
import myList from "../../Data/NavbarData";
import { useNavigate } from "react-router-dom";

import {PropTypes} from 'prop-types'
import { Search, SearchIconWrapper, StyledAppBar, StyledInputBase } from "../../Style/AccessThemes";



const Navbar = ({ mode, setMyMode }) => {
  
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigate = useNavigate();
  const theme = useTheme();

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
      <MenuItem>
        {myList.map((item) => {
          return (
            <List key={item.text} >
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            </List>
          );
        })}
      </MenuItem>
    </Menu>
  );

  return (
    <Box >
      <StyledAppBar elevation={0}>
        <Toolbar>
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
            {myList.map((item) => {
              return (
                <List key={item.text} sx={{p:'0'}}>
                  <ListItem>
                    <ListItemButton
                      onClick={() => {
                        navigate(item.path);
                      }}
                    >
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                </List>
              );
            })}
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
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
      {renderMobileMenu}
    </Box>
  );
};

Navbar.propTypes={
  mode: PropTypes.any.isRequired,
  setMyMode:PropTypes.any.isRequired
}

export default Navbar;
