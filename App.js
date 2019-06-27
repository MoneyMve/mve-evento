import React, { Fragment } from "react";

import GlobalStyled from "./styles/globals";
import Routes from "./routes";

function App() {
  return (
    <Fragment>
      <Routes />
      <GlobalStyled />
    </Fragment>
  );
}

export default App;
