import React, {Component} from "react";

export default class SuccessComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // this.props.result could be used to retrieve promise results
    console.log(this.props.result);
    return this.props.result;
  }
}
