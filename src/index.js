import React from "react";
import ReactDOM from "react-dom";
import Display from './Display';

class App extends React.Component {
  state = {
    lat: null,
    long: null,
    errorMessage: ""
  };
  componentDidMount() {
    console.log("Cocok buat loading cuk. Loading...");
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude
        }),
      error =>
        this.setState({
          errorMessage: error.message
        })
    );
  }
  componentDidUpdate() {
    console.log("komponen udah diupdate");
  }
  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <Display lat={this.state.lat} />
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <h1>Error: {this.state.errorMessage}</h1>;
    }
    return <h1>Loading...</h1>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
