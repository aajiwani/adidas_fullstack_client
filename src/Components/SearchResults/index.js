import React from "react";
import ReactPromisedComponent from "react-promised-component";
import LoadingComponent from "../Loading";
import ErrorComponent from "../Error";
import SuccessComponent from "./components/success_component.js";
import _ from "lodash";
import PropTypes from "prop-types";
import * as AdidasApi from "../../Lib/Api/AdidasApi";
import { GetWishlist } from "../../Lib/Api/WishlistApi";

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
    if (_.size(params.searchTerm))
    {
      return GetWishlist()
      .then((wishlist) => {
        return AdidasApi.SearchForTerm(params.searchTerm, wishlist);
      });
    }
    return Promise.resolve(null);
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
