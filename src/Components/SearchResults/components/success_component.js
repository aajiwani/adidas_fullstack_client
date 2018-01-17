import React, { Component } from "react";
import { Media, Button } from "react-bootstrap";
import _ from "lodash";
import Results from "./Results";

export default class SuccessComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentWillMount() {
    this.setState({
      results: this.fetchProducts(this.props.result)
    });
  }

  mergeSeperatedPrice(price) {
    let formattedPrice = ["$", 0];
    if (price.length == 2) {
      for (var i = 0; i < 2; i++) {
        if (price[i].isCurrency) formattedPrice[0] = price[i].value;
        else formattedPrice[1] = price[i].value;
      }
    }
    return _.join(formattedPrice, "");
  }

  fetchProducts(result) {
    if (_.has(result, "products")) {
      return _.map(result.products, prod => {
        return {
          name: prod.suggestion,
          image: prod.image,
          url: prod.url,
          rating: prod.rating,
          reviews: prod.reviews || 0,
          price: this.mergeSeperatedPrice(JSON.parse(prod.separatedSalePrice)),
          subName: prod.subTitle
        };
      });
    } else if (_.size(result) == 0) return null;

    return [];
  }

  handleAddToWishList(item) {
    console.dir(item);
  }

  handleRemoveFromWishList(item) {
    console.dir(item);
  }

  render() {
    return (
      <Results
        results={this.state.results}
        addToWishList={this.handleAddToWishList.bind(this)}
        removeFromWishList={this.handleRemoveFromWishList.bind(this)}
      />
    );
  }
}
