import { useState } from "react";
import {
  Container,
  Carousel,
  Nav,
  Navbar,
  Button,
  Form,
} from "react-bootstrap";
import "./home.css";
import Ozer1 from "../../img/ozer-proje-1.jpg";
import Ozer2 from "../../img/ozer-proje-2.jpg";
import Ozer3 from "../../img/ozer-proje-3.jpg";
import Logo from "../../img/logo.png";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };
  return (
    <div className="h">
      <div className={isScrolled ? "n scrolled" : "n"}>
        <Navbar className="position-fixed n w-100" variant="light">
          <Container>
            <Navbar.Brand href="#home">
              <img src={Logo} width="50" height="50" alt="" className="logo" />
            </Navbar.Brand>
            <Nav className="me-auto n-link">
              <Nav.Link href="#home">Projeler</Nav.Link>
              <Nav.Link href="#features">Statik Proje</Nav.Link>
              <Nav.Link href="#pricing">Keşif-Metraj</Nav.Link>
              <Nav.Link href="#pricing">Danışmanlık</Nav.Link>
              <Nav.Link href="#pricing">İletişim</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 f-search"
                aria-label="Search"
              />
              <Button className="f-button" variant="outline-dark">
                Search
              </Button>
            </Form>
          </Container>
        </Navbar>
      </div>
      <div>
        <Carousel className="c" fade>
          <Carousel.Item className="c-i">
            <img className="d-block w-100 " src={Ozer1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="c-i">
            <img className="d-block w-100" src={Ozer2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="c-i">
            <img className="d-block w-100" src={Ozer3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
