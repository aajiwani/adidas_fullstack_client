import React, { Component } from "react";
import _ from "lodash";
import Results from "./Results";
import {
  AddToWishlist,
  RemoveFromWishlist
} from "../../../Lib/Api/WishlistApi";
import {
  removeFromWishlist,
  addToWishlist
} from "../../../Lib/ApiHelpers/WishlistHelper";

export default class SuccessComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      outerDivClass: "",
      busyText: ""
    };
  }

  componentWillMount() {
    this.setState({
      results: this.props.result
    });
  }

  enableBlurEffect(message) {
    this.setState({
      outerDivClass: "blurred",
      busyText: message
    });
  }

  disableBlurEffect() {
    this.setState({
      outerDivClass: "",
      busyText: ""
    });
  }

  handleAddToWishList(item) {
    this.enableBlurEffect("Adding ...");
    AddToWishlist(item).then(() => {
      this.disableBlurEffect();
      this.setState({
        results: addToWishlist(this.state.results, item)
      });
    });
  }

  handleRemoveFromWishList(item) {
    this.enableBlurEffect("Removing ...");
    RemoveFromWishlist(item.url).then(() => {
      this.disableBlurEffect();
      this.setState({
        results: removeFromWishlist(this.state.results, item)
      });
    });
  }

  render() {
    return (
      <div>
        <div className={this.state.outerDivClass}>
          <Results
            results={this.state.results}
            addToWishList={this.handleAddToWishList.bind(this)}
            removeFromWishList={this.handleRemoveFromWishList.bind(this)}
          />
        </div>
        {this.state.outerDivClass.length > 0 ? (
          <p className={"overlay-blur"}>{this.busyText}</p>
        ) : null}
      </div>
    );
  }
}
