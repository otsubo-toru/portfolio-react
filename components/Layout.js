import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Toru', title: 'Welcome' };
  }
  changeTitle(title) {
    this.setState({title});
  }
  render() {
    setTimeout(
      () => { this.setState({name: 'Otsubo'}); },
      3000
    );
    return (
      <div id="PAGE" className="page">
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <div>
          <p>{this.state.name}</p>
        </div>
        <Footer />
      </div>
    );
  }
}
