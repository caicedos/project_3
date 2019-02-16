import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";
import NoMatch from "./pages/NoMatch";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Nav branding = "Summer Ready" />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
