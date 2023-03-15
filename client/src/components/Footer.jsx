import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" width="100vw" bgcolor="white">
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "155px" }} />
    </Box>
  </Box>
);

export default Footer;
