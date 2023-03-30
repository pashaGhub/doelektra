import { useEffect } from "react";
import ReactGA from "react-ga";
import { Card, Row, Col, Container } from "react-bootstrap";

const Services = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="bg-light">
      <Container id="services" className="services d-grid gap-3">
        <Row>
          <Col className="col-first">
            <Card className="card-outdoor">
              <Card.Body>
                <Card.Title>Lauko elektros tinklų projektavimas</Card.Title>
                <Card.Text>
                  <p>
                    Naujų vartotojų prijungimas prie AB ESO skirstymo
                    operatoriaus tinklų
                  </p>

                  <p>
                    Iškėlimas esamų 0,4 kV ir 10 kV elektros tinklų trukdančių
                    statybai ar kitokiai veiklai
                  </p>
                  <p>
                    Esamų 0,4 kV ir 10 kV kabelių linijų apsaugojimas
                    projektuojant įvažas į sklypus
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="col-second d-flex justify-content-end">
            <Card className="card-indoor">
              <Card.Body className="card-body-reverse">
                <Card.Title>Vidaus elektros tinklų projektavimas</Card.Title>
                <Card.Text>
                  <p>Gyvenamiesiems namams</p>
                  <p>Daugiabučių gyvenamiesiems namams</p>
                  <p>Komercinės paskirties pastatams</p>
                  <p>Visuomeninės paskirties pastatams</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="col-third">
            <Card className="card-lighting">
              <Card.Body>
                <Card.Title>apšvietimo projektavimas</Card.Title>
                <Card.Text>
                  <p>Gatvių</p>
                  <p>Kelių</p>
                  <p>Teritorijų</p>
                  <p>
                    Visuomeninių erdvių (vaikų žaidimo, sporto aikštelių, parkų)
                    apšvietimas.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
