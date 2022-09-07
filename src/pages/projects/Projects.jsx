import { Row, Col, Container } from "react-bootstrap";
import Ozer2 from "../../img/ozer-proje-2.jpg";
import Ozer3 from "../../img/ozer-proje-3.jpg";
import Ozer1 from "../../img/ozer-proje-1.jpg";

import "./projects.css";

function Projects({ link }) {
  return (
    <div className="p">
      <Container>
        <h2 className="card-h">Projelerim</h2>
        <Row xs={2} md={3} className="g-4 mt-2 ">
          <Col>
            <div className="card-b">
              <a href={link}>
                <img className="img-c" src={Ozer1} alt="" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="card-b">
              <a href={link}>
                <img className="img-c" src={Ozer2} alt="" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="card-b">
              <a href={link}>
                <img className="img-c" src={Ozer3} alt="" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="card-b">
              <a href={link}>
                <img className="img-c" src={Ozer2} alt="" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="card-b">
              <a href={link}>
                <img className="img-c" src={Ozer3} alt="" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="card-b">
              <a href={link}>
                <img className="img-c" src={Ozer1} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
