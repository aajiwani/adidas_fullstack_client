import React from "react";
import ReactPromisedComponent from "react-promised-component";
import LoadingComponent from "../Loading";
import ErrorComponent from "../Error";
import SuccessComponent from "./components/success_component.js";
import _ from "lodash";
import PropTypes from "prop-types";

const SEARCH_API = "https://www.adidas.co.uk/api/suggestions/@searchTerm";

var PromisedReactComponent = ReactPromisedComponent(
  "promise_name",
  LoadingComponent,
  ErrorComponent,
  SuccessComponent
);

export default class PromisedComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchTerm !== this.props.searchTerm &&
      this.props.searchTerm.length > 0
    ) {
      this.scrInst.retryPromise();
    }
  }

  // Promise creator method
  promiseGenerator(params) {
    if (params.searchTerm.length > 0)
      return fetch(_.replace(SEARCH_API, "@searchTerm", params.searchTerm))
      .then((response) => response.json());
    else return Promise.resolve([]);
  }

  // Method to supply parameters to promise method
  promiseParams() {
    return {searchTerm: this.props.searchTerm};
  }

  render() {
    return (
      <PromisedReactComponent
        promise_name={this.promiseGenerator.bind(this)}
        promise_name_params={this.promiseParams.bind(this)}
        ref={inst => (this.scrInst = inst)}
      />
    );
  }
}

PromisedComponent.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
