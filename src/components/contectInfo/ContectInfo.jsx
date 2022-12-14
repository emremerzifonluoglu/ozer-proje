import React from "react";
// import { useMemo } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, createTheme, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Mapimg from "../../img/map.bmp";

function ContectInfo() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

const theme = createTheme({
  palette: {
    neutral: {
      main: "rgb(238, 238, 238)",
      contrastText: "#fff",
    },
  },
});
function Map() {
  // const center = useMemo(() => ({ lat: 36.8622774, lng: 30.8023579 }), []);
  return (
    <Box
      mt={5}
      bgcolor={theme.palette.neutral.main}
      sx={{ flexGrow: 1 }}
      width="100%"
      height="400px"
    >
      <Container maxWidth="lg">
        <Grid container m={0} spacing={2}>
          <Grid xs={12} md={4}>
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
              -- 0 312 123 45 67
            </Typography>
            <Typography mt={3} variant="h5">
              <EmailIcon fontSize="large" /> E-POSTA
            </Typography>
            <Typography mt={2} variant="body2">
              İnfo@ozerproje.com
            </Typography>
          </Grid>
          <Grid xs={0} md={8}>
            <Box>
              <img width="90%" src={Mapimg} alt="" />
            </Box>

            {/* <GoogleMap
              zoom={18}
              center={center}
              mapContainerClassName="map-container"
            >
              <Box height="350px">
                <Marker position={center} />
              </Box>
            </GoogleMap> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContectInfo;
