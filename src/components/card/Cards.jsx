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
} from "@mui/material";
import Ozer from "../../img/ozer-proje-1.jpg";
export default function ActionAreaCard() {
  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Typography variant="h3" m={4}>
          Başlıca Projelerim
        </Typography>
        <Grid container m={0} spacing={3}>
          <Grid xs={12} md={4} mb={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea href="/Projeler">
                <CardMedia component="img" height="250" image={Ozer} alt=" " />
              </CardActionArea>
              <CardActions>
                <Button size="small" fullWidth href="/Projeler">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} md={4} mb={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea href="/Projeler">
                <CardMedia component="img" height="250" image={Ozer} alt=" " />
              </CardActionArea>
              <CardActions>
                <Button size="small" fullWidth href="/Projeler">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} md={4} mb={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea href="/Projeler">
                <CardMedia component="img" height="250" image={Ozer} alt=" " />
              </CardActionArea>
              <CardActions>
                <Button size="small" fullWidth href="/Projeler">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
