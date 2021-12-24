import { useEffect } from "react";
import AOS from "aos";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.scss";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CategoryPage from "./pages/CategoryPage";

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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:id">
          <Post />
        </Route>
        <Route path={["/short-stories", "/library", "/etc", "/movie-club"]}>
          <CategoryPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
