import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./pages/About/about";
import Lessons from "./pages/Lessons/lessons";
import HomePage from "./pages/HomePage/homepage";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

import "./App.css";

const Title = ({ title, children }) => {
  React.useEffect(() => {
    document.title = title || "";
  }, [title]);

  return children;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Title title="Welcome to PegHeads.org">
                <HomePage {...props} />
              </Title>
            )}
          />
          <Route
            exact
            path="/lessons/"
            render={(props) => (
              <Title title="Lessons | PegHeads.org">
                <Lessons {...props} />
              </Title>
            )}
          />
          <Route
            exact
            path="/about/"
            render={(props) => (
              <Title title="About | PegHeads.org">
                <About {...props} />
              </Title>
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
