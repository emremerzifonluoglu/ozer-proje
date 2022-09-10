import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "500px",
  margin: "10px",

  color: theme.palette.text.secondary,
}));

function About() {
  return (
    <Box sx={{ backgroundColor: "white", flexGrow: 1 }}>
      <Container maxWidth="lg">
        <Grid container m={0} spacing={2}>
          <Grid xs={12} md={6}>
            <Item>
              <Typography variant="h3" mt={4}>
                Biz Kimiz?
              </Typography>
              <Typography variant="body1" align="center" mt={4}>
                {" "}
                yapı uzmanlık alanında betonarme, çelik projeleri hizmeti
                sunmaktadır. Kuruluşundan günümüze inşaat mühendisliği alanında
                yurt içinde çeşitli projeler gerçekleştirmiş olup, değişen dünya
                koşullarına uygun, bilimsel teknolojik gelişmelerle
                desteklenmiş, en iyi ve en doğru projeleri sunmayı amaç
                edinmiştir Tasarım, tasarım geliştirme, avan proje, kesin proje,
                uygulama ve detay projeleri ve ihale dosyası hazırlanması gibi
                çeşitli proje aşamalarının gerçekleşmesiyle ilgili hizmetlerdir.
                Uzman ekibimiz ile <b>
                  3E (Emniyet -- Ekonomik -- Estetik)
                </b>{" "}
                kapsamında sizlere daha iyi hizmet vermek istiyoruz.
              </Typography>
            </Item>
          </Grid>
          <Grid xs={12} md={6}>
            <Item>
              <Typography variant="h3" mt={4} mb={4}>
                Daha Fazla Tanı...
              </Typography>
              <iframe
                width="100%"
                height="65%"
                src="https://www.youtube.com/embed/93nY4__dRcs"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default About;
