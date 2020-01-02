import React from "react";
import ReactDOM from "react-dom";
import Display from './Display';
import Spinner from "./Spinner";

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
  renderContents() {
    if (this.state.lat && !this.state.errorMessage) {
      return <Display lat={this.state.lat} />
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <h1>Error: {this.state.errorMessage}</h1>;
    }
    return <Spinner message="Please accept location request" />
  }

  render() {
      return (
          <div className="border red">
              {this.renderContents()}
          </div>
      )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
