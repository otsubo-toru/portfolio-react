import React from "react"

export default class Settings extends React.Component {
  render() {
    const type = (this.props.match.params.mode == "extra" ? "(for exports)" : "");
    console.log("settings");
    return (
      <div>
        <h1>Settings</h1>
        <p>{type}</p>
      </div>
    );
  }
}
