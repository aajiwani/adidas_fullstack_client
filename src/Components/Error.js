import React, {Component} from "react";
import {Button, ControlLabel, FormGroup} from "react-bootstrap";

export default class ErrorComponent extends Component {
  constructor(props) {
    super(props);
  }

  retryPromise() {
    this.props.retry();
  }

  render() {
    return (
      <div
        className="flex-container"
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-center">Error loading page</div>
        <FormGroup controlId="formValidationError1" validationState="error">
          <ControlLabel>Reason: {this.props.error.message}</ControlLabel>
        </FormGroup>
        <Button bsStyle="danger" onClick={this.retryPromise.bind(this)}>
          Retry
        </Button>
      </div>
    );
  }
}
