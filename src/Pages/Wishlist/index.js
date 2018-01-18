import React from "react";
import ReactPromisedComponent from "react-promised-component";
import LoadingComponent from "../../Components/Loading";
import ErrorComponent from "../../Components/Error";
import SuccessComponent from "./components/success_component.js";
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

  // Promise creator method
  promiseGenerator(params) {
    return GetWishlist();
  }

  // Method to supply parameters to promise method
  promiseParams() {
    return {};
  }

  render() {
    return (
      <PromisedReactComponent
        promise_name={this.promiseGenerator.bind(this)}
        promise_name_params={this.promiseParams.bind(this)}
      />
    );
  }
}
