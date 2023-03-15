import { useRef, useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const Navigation = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={navBackground ? "navbar-custom navbar-fixed" : "navbar-custom"}
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          doElektra
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Pagrindinis
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Paslaugos
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Kontaktai
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
