import { Container, Form, Button, Row, Col } from "react-bootstrap";
import DividerDecoration from "../DividerDecoration/DividerDecoration";

const Benefits = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div id="contacts" className="contacts">
      <Container className="contacts-content">
        <div className="contacts-header">
          <h2>Kontaktai</h2>
          <DividerDecoration />
        </div>
        <Row className="g-4 mt-3">
          <Col xs={12} lg={4}>
            <div className="bg-light contacts-info p-4">
              <div>Telefonas</div>
              <p>+370 60 00 0000</p>
              <div>Elektroninis paštas</div>
              <p>info@doelektra.lt</p>
            </div>
          </Col>
          <Col xs={12} lg={8}>
            <Form onSubmit={handleSubmit} className="bg-light p-4">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Vardas</Form.Label>
                <Form.Control type="text" placeholder="Vardas" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Elektroninis paštas</Form.Label>
                <Form.Control type="email" placeholder="Elektroninis paštas" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Jūsų žinutė</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Jūsų žinutė"
                />
              </Form.Group>
              <Button type="submit">Siųsti</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Benefits;
