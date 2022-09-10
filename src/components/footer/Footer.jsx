import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

function footer() {
  return (
    <Box width="100%" height="70px">
      <Grid container m={0} spacing={1} width="100%">
        <Grid xs={12} md={12} textAlign="center">
          <Link underline="none" mr={3} href="/">
            Ana Sayfa
          </Link>
          <Link underline="none" href="/Projeler">
            Projeler
          </Link>
          <Link underline="none" ml={3} href="/İletişim">
            İletişim
          </Link>
        </Grid>
      </Grid>

      <Grid container m={0} spacing={2} width="100%">
        <Grid xs={12} md={6} textAlign="center">
          <Typography align="center" mt={3}>
            © 2022 İnşaat Mühendisi Eray Özer
          </Typography>
        </Grid>

        <Grid xs={12} md={6} textAlign="center">
          <Link href="#" color={"inherit"}>
            <InstagramIcon sx={{ fontSize: 40 }} className="ms-3 mt-3" />
          </Link>
          <Link href="#" color={"inherit"}>
            <LinkedInIcon sx={{ fontSize: 40 }} className="ms-3 mt-3" />
          </Link>
          <Link href="#" color={"inherit"}>
            <PinterestIcon sx={{ fontSize: 40 }} className="ms-3 mt-3" />
          </Link>
          <Link href="#" color={"inherit"}>
            <YouTubeIcon sx={{ fontSize: 40 }} className="ms-3 mt-3" />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default footer;
