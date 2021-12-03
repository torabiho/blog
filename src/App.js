import { useEffect } from "react";
import AOS from "aos";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.scss";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Footer from "./components/Footer";
import { CloudinaryContext } from "cloudinary-react";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100);
  }, []);

  return (
    <CloudinaryContext cloudName="dxmkio4a8" className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={Post} />
      </Switch>
      <Footer />
    </CloudinaryContext>
  );
};

export default App;
