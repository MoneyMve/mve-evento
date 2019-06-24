import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/main";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Routes;
