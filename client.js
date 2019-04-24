import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Top from "./pages/Top";
import Works from "./pages/Works";

const app = document.getElementById('app');

ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path="/" component={Top}></Route>
      <Route path="/works" name="works" component={Works}></Route>
    </Layout>
  </Router>,
  app
)
