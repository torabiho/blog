import { useEffect } from "react";
import AOS from "aos";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={Post} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
