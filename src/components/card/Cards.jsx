import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  CardActionArea,
  Container,
  Grid,
  CardActions,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Ozer from "../../img/ozer-proje-1.jpg";
function ActionAreaCard() {
  const theme = createTheme({
    palette: {
      neutral: {
        main: "rgb(238, 238, 238)",
        contrastText: "#fff",
      },
      secondary: {
        main: "rgb(57, 62, 70)",
        contrastText: "#fff",
      },
    },
  });
  return (
    <Box
      bgcolor={theme.palette.neutral.main}
      color={theme.palette.neutral.main}
    >
      <Container maxWidth="lg">
        <Box mt={4}>
          <Typography color="black" variant="h3" m={4}>
            Başlıca Projelerim
          </Typography>
          <Grid container m={0} spacing={3}>
            <Grid xs={12} md={4} mb={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea href="/Project">
                  <CardMedia
                    component="img"
                    height="250"
                    image={Ozer}
                    alt=" "
                  />
                </CardActionArea>
                <CardActions>
                  <ThemeProvider theme={theme}>
                    <Button
                      color="secondary"
                      variant="contained"
                      size="small"
                      fullWidth
                      href="/Project"
                    >
                      Learn More
                    </Button>
                  </ThemeProvider>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} md={4} mb={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea href="/Project">
                  <CardMedia
                    component="img"
                    height="250"
                    image={Ozer}
                    alt=" "
                  />
                </CardActionArea>
                <CardActions>
                  <ThemeProvider theme={theme}>
                    <Button
                      color="secondary"
                      variant="contained"
                      size="small"
                      fullWidth
                      href="/Project"
                    >
                      Learn More
                    </Button>
                  </ThemeProvider>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={12} md={4} mb={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea href="/Project">
                  <CardMedia
                    component="img"
                    height="250"
                    image={Ozer}
                    alt=" "
                  />
                </CardActionArea>
                <CardActions>
                  <ThemeProvider theme={theme}>
                    <Button
                      color="secondary"
                      variant="contained"
                      size="small"
                      fullWidth
                      href="/Project"
                    >
                      Learn More
                    </Button>
                  </ThemeProvider>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
export default ActionAreaCard;
