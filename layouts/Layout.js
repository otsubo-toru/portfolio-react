import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

import Header from "../components/Header";
import Gnav from "../components/Gnav";
import Footer from "../components/Footer";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Portfolio"
    };
  }
  navigate() {
    console.log(this.props.history);
    this.props.history.push('/');
  }
  render() {
    const { location } = this.props;
    console.log("layout");
    return (
      <div id="PAGE" className="page">
        <Header title={this.state.title} />
        <Gnav location={location} />
        <div id="CONTAINER" class="container">
          <div id="MAIN" class="main">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
