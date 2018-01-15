import React, {Component} from "react";
import {ProgressBar} from "react-bootstrap";

export default class LoadingComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{flex: 1, alignSelf: "center", justifyContent: "space-around"}}
      >
        <div className="text-center">Loading ...</div>
        <ProgressBar active now={100} style={{flex: 1, alignSelf: "center"}} />
      </div>
    );
  }
}
