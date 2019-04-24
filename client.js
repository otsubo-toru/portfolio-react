import React from "react";
import ReactDOM from "react-dom";
import { useRouterHistory } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHistory, useBasename } from "history";

import Layout from "./layouts/Layout";
import Top from "./pages/Top";
import Works from "./pages/Works";

const history = useBasename(createHistory)({
  basename: "/portfolio-react/"
});

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={history}>
    <Layout>
      <Route exact path="/" component={Top}></Route>
      <Route path="/works" name="works" component={Works}></Route>
    </Layout>
  </Router>,
  app
)
