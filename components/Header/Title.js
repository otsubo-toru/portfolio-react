import React from "react";

export default class Title extends React.Component {
  render() {
    return (
      <h1 class="site-name">{this.props.title}</h1>
    );
  }
}
