import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Navigation from "./components/Navigation/Navigation";
import Benefits from "./components/Benefits/Benefits";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
  return (
    <div className="App">
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
