import React from "react";
import { Link } from "react-router-dom";

export default class Gnav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
  }
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed})
  }
  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const topClass = location.pathname === "/" ? "active" : "";
    const worksClass = location.pathname.match(/^\/works/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";
    const items = [
      { name: "TOP", path: "/" },
      { name: "WORKS", path: "/works" },
    ].map((item, i) => <GnavItem key={i} name={item.name} path={item.path} />);

    return (
      <nav id="GNAV" class="gnav">
          <div class="gnav-container">
              <ul class="gnav-items">
                {items}
              </ul>
          </div>
      </nav>
    );
  }
}

class GnavItem extends React.Component {
  render() {
    return (
      <li class="gnav-item"><Link to={this.props.path}>{this.props.name}</Link></li>
    );
  }
}
