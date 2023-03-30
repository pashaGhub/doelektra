import { useEffect } from "react";
import ReactGA from "react-ga";
import { Container } from "react-bootstrap";

const Benefits = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div id="benefits" className="benefits benefits-overlay">
      <Container className="benefits-content">
        <h2 className="benefits-content-one">
          Atestuoti elektrotechnikos specialistai
        </h2>
        <h2 className="benefits-content-two">
          Greitai ir kokybiškai projektuojame visoje Lietuvoje!
        </h2>
      </Container>
    </div>
  );
};

export default Benefits;
