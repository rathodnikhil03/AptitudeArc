import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ width: "100%" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AptitudeArc
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
