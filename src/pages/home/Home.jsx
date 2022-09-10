import ImgCarousel from "../../components/carousel/ImgCarousel";
import ContectForm from "../../components/contectForm/ContectForm";
import About from "../about/About";
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
      <About />
      <Card />
      <ContectForm />
      {/* <Contect /> */}
    </Box>
  );
}

export default Home;
