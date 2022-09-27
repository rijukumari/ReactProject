import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to='/'/>

      </Switch>
    </>
  );
}

export default App;
