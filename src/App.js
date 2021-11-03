import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import "./App.css";
import Home from "./Home";
import Page2 from "./Page2";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page2" component={Page2} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
