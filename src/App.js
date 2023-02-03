import "./App.css";
import Contact from "./components/Contact.js";
import mrWhiskerson from "./images/mr-whiskerson.png";
import fluffykins from "./images/fluffykins.png";
import felix from "./images/felix.png";
import pumpkin from "./images/pumpkin.png";
function App() {
  return (
    <div className="contacts">
      <Contact
        name={"Mr. Whiskerson"}
        phone={"(212) 555-1234"}
        email={"mr.whiskaz@cat.meow"}
        picture={mrWhiskerson}
      />
      <Contact
        name={"Fluffykins"}
        phone={"(212) 555-2345"}
        email={"fluff@cat.com"}
        picture={fluffykins}
      />
      <Contact
        name={"Felix"}
        phone={"(212) 555-4567"}
        email={"thecat@cat.com"}
        picture={felix}
      />
      <Contact
        name={"Pumpkin"}
        phone={"(0800) CAT KING"}
        email={"pumpkin@cat.com"}
        picture={pumpkin}
      />
    </div>
  );
}

export default App;
