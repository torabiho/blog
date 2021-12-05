import { useEffect } from "react";
import AOS from "aos";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.scss";
import Home from "./pages/Home";
import Post from "./pages/Post";
import UnderConstruction from "./pages/UnderConstruction";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100);
  }, []);

  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={Post} />
        <Route path="/short-stories" component={UnderConstruction} />
        <Route path="/library" component={UnderConstruction} />
        <Route path="/movie-club" component={UnderConstruction} />
        <Route path="/etc" component={UnderConstruction} />
      </Switch>
    </div>
  );
};

export default App;
