import { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import itemData from "../../data";
import { Box, Container, createTheme } from "@mui/material";

function Detalle() {
  const theme = createTheme({
    palette: {
      neutral: {
        main: "rgb(255, 255, 255)",
        contrastText: "#fff",
      },
      secondary: {
        main: "rgb(57, 62, 70)",
        contrastText: "#fff",
      },
    },
  });

  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  };

  const getColumns = (width) => {
    if (width < breakpoints.sm) {
      return 2;
    } else if (width < breakpoints.md) {
      return 3;
    } else if (width < breakpoints.lg) {
      return 6;
    } else if (width < breakpoints.xl) {
      return 6;
    } else {
      return 6;
    }
  };

  const [columns, setColumns] = useState(getColumns(window.innerWidth));
  const updateDimensions = () => {
    setColumns(getColumns(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  });

  return (
    <Box mt={9} bgcolor={theme.palette.neutral.main}>
      <Container maxWidth="xl">
        <ImageList sx={{ width: "100%", height: "100%" }}>
          <ImageListItem key="Subheader" cols={columns}>
            <ListSubheader component="div">
              <h3>Spor Yapıları</h3>
            </ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                    href={item.img}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
        <ImageList sx={{ width: "100%", height: "100%" }}>
          <ImageListItem key="Subheader" cols={columns}>
            <ListSubheader component="div">
              <h3>Sağlık Yapılar</h3>
            </ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                    href={item.img}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
        <ImageList sx={{ width: "100%", height: "100%" }}>
          <ImageListItem key="Subheader" cols={columns}>
            <ListSubheader component="div">
              <h3>Karma Yapılar</h3>
            </ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                    href={item.img}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
}
export default Detalle;
