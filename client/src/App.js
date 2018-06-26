import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

const App = () => (
    <Router>
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </Fragment>
    </Router>
);

export default App;
