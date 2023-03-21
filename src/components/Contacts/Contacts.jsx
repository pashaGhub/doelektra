import { useRef, useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import DividerDecoration from "../DividerDecoration/DividerDecoration";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    setLoading(true);

    emailjs
      .sendForm(
        "service_qxw0066",
        "template_251zcxo",
        form.current,
        "X6bKzeD5795uCvYXM"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      )
      .finally(() => setLoading(false));
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
              <p>+370 646 33945</p>
              <div>Elektroninis paštas</div>
              <p>info@doelektra.lt</p>
            </div>
          </Col>
          <Col xs={12} lg={8}>
            <Form ref={form} onSubmit={handleSubmit} className="bg-light p-4">
              {loading && <Alert variant="primary">Siunčiama...</Alert>}
              {!loading && success && (
                <Alert variant="success">
                  Žinutė išsiųsta, ačiū už kontaktą!
                </Alert>
              )}
              {!loading && error && (
                <Alert variant="danger">
                  Įvyko klaida :( bandykite dar kartą
                </Alert>
              )}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Tema</Form.Label>
                <Form.Control type="text" placeholder="Tema" name="title" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Elektroninis paštas</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Elektroninis paštas"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Jūsų žinutė</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Jūsų žinutė"
                  name="message"
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

export default Contacts;
