import ImgCarousel from "../../components/carousel/ImgCarousel";
import ContectInfo from "../../components/contectInfo/ContectInfo";
import AboutMe from "../../components/aboutMe/AboutMe";
// import Contect from "../contect/Contect";
import Card from "../../components/card/Cards";
import { Box, createTheme } from "@mui/material";
function Home() {
  const theme = createTheme({
    palette: {
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  return (
    <Box bgcolor={theme.palette.neutral.main}>
      <ImgCarousel />
      <AboutMe />
      <Card />
      <ContectInfo />
      {/* <Contect /> */}
    </Box>
  );
}

export default Home;
