import React, { Component } from "react";
import { Media, Button } from "react-bootstrap";
import _ from "lodash";

export default class SuccessComponent extends Component {
  constructor(props) {
    super(props);
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

  render() {
    // this.props.result could be used to retrieve promise results
    let results = this.fetchProducts(this.props.result);
    if (results && results.length == 0)
      return (
        <div style={styles.resultBox}>
          <p>No results found, try changing the search term</p>
        </div>
      );
    else if (_.isEmpty(results)) return null;

    return (
      <div style={styles.resultBox}>
        {_.map(results, (item, ind) => {
          return (
            <Media key={"result-" + ind} style={{marginTop: 15}}>
              <Media.Left>
                <img
                  width={64}
                  height={64}
                  src={item.image}
                  alt="Product Image"
                />
              </Media.Left>
              <Media.Body>
                <Media.Heading>
                  {item.name}&nbsp;&nbsp;<a
                    href={item.url}
                    target="_blank"
                    className="fa fa-external-link"
                  />
                </Media.Heading>
                <span>{item.subName}</span>
                <br />
                <span>{item.price}</span>
                <div>
                  <span>
                    {_.times(5, ind => {
                      return (
                        <span
                          key={item.url + "-rating-" + ind}
                          className={
                            "fa fa-star" +
                            (ind + 1 <= item.rating ? " checked" : "")
                          }
                        />
                      );
                    })}
                  </span>
                  <span style={{ paddingLeft: 10 }}>
                    <i className="fa fa-user-circle" aria-hidden="true" />&nbsp;({
                      item.reviews
                    })
                  </span>
                  <br />
                  <span>
                    <a href="#">
                      <i className="fa fa-heart-o" aria-hidden="true">
                        &nbsp;Add to wishlist
                      </i>
                    </a>
                  </span>
                </div>
              </Media.Body>
            </Media>
          );
        })}
      </div>
    );
  }
}

const styles = {
  resultBox: {
    flex: 1,
    border: 2,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 10,
    padding: 10,
    marginTop: 20
  }
};
