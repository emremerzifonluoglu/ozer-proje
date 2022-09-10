import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

function ContectForm() {
  return (
    <Box
      sx={{ backgroundColor: "white", flexGrow: 1 }}
      width="100%"
      height="400px"
    >
      <Container maxWidth="md">
        <Grid container m={0} spacing={2}>
          <Grid xs={12} md={6}>
            <Typography mt={3} variant="h5">
              <PlaceIcon fontSize="large" /> ADRES
            </Typography>
            <Typography mt={2} variant="body2">
              Sokak Adı Mahalle Adı Cadde Adı Semt Şehir Ülke
            </Typography>
            <Typography mt={3} variant="h5">
              <LocalPhoneIcon fontSize="large" /> TELEFON
            </Typography>
            <Typography mt={2} variant="body2">
              >> 0 212 403 19 22
            </Typography>
            <Typography mt={3} variant="h5">
              <EmailIcon fontSize="large" /> E-POSTA
            </Typography>
            <Typography mt={2} variant="body2">
              İnfo@ozerproje.com
            </Typography>
          </Grid>
          <Grid xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContectForm;
