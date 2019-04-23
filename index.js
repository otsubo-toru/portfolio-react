import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render() {
    let name = 'Toru';
    return (
      <div>
        <h1>It Works!</h1>
        <p>Hi, {name}</p>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
