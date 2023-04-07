import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
//components
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Navigation from "./components/Navigation/Navigation";
import Benefits from "./components/Benefits/Benefits";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
  useEffect(() => {
    if (!window.GA_INITIALIZES) {
      console.log("here");
      ReactGA.initialize("G-26R5Z8MJSL");
      window.GA_INITIALIZES = true;
    }
    console.log(window.location.pathname + window.location.search);
    ReactGA.send({ hitType: "pageview", page: "/", title: "doElektraGA" });
  }, []);
  return (
    <div className="App">
      <Helmet>
        <link rel="sitemap" type="application/xml" href="./sitemap.xml" />
      </Helmet>
      <Navigation />
      <Home />
      <Services />
      <Benefits />
      <Contacts />
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        {new Date().getDate()} - {new Date().getMonth() + 1} -{" "}
        {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default App;
