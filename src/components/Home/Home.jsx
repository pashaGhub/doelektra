import { Container, Row, Col } from "react-bootstrap";
import DividerDecoration from "../DividerDecoration/DividerDecoration";

const Home = () => {
  return (
    <div id="home" className="hero-area overlay">
      <Container className="content">
        <Row className="full-height align-items-center text-center">
          <Col className="col text-container">
            <h4>Elektros darbai</h4>
            <div className="home-decoration mt-4">
              <DividerDecoration />
            </div>
            <h2 className="text-title">
              Išmanūs sprendimai
              <br />
              jūsų poreikiams
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
