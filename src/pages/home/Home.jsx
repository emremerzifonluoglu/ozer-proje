import ImgCarousel from "../../components/carousel/ImgCarousel";
import ContectForm from "../../components/contectForm/ContectForm";
import About from "../about/About";
// import Contect from "../contect/Contect";
import Card from "../../components/card/Cards";
function Home() {
  return (
    <div className="h-100">
      <ImgCarousel />
      <About />
      <Card />
      <ContectForm />
      {/* <Contect /> */}
    </div>
  );
}

export default Home;
