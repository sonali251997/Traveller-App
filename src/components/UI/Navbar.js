import React from "react";
import {
  useTheme,
  useMediaQuery,
  makeStyles,
  Toolbar,
  AppBar,
  CssBaseline,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyle = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    marginLeft: theme.spacing(5),
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

const Nav = () => {
  const classes = useStyle();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/faq" className={classes.link}>
              FAQ
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
