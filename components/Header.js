import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
  render() {
    return (
      <header id="HEADER" class="header">
          <div class="header-container">
            <Title title={this.props.title} />
          </div>
      </header>
    );
  }
}
