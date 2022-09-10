import ImgCarousel from "../../components/carousel/ImgCarousel";
import ContectForm from "../../components/contectForm/ContectForm";
import About from "../about/About";
// import Contect from "../contect/Contect";
import Projects from "../projects/Projects";
function Home() {
  return (
    <div className="h-100">
      <ImgCarousel />
      <About />
      <Projects />
      <ContectForm />
      {/* <Contect /> */}
    </div>
  );
}

export default Home;
