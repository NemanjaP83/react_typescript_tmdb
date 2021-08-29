import React from "react";
// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Global Style
import { GlobalStyle } from "./GlobalStyle";
// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:movieId" component={Movie} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
