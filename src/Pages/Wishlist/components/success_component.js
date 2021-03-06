import React from "react";
import { RemoveFromWishlist } from "../../../Lib/Api/WishlistApi";
import { removeFromWishlist } from "../../../Lib/ApiHelpers/WishlistHelper";
import Results from "./Results";

export default class SuccessComponent extends React.Component {
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
