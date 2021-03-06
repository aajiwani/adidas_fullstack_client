import React, { Component } from "react";
import PropTypes from "prop-types";
import { Media } from "react-bootstrap";

export default class Results extends Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    if (this.props.results && this.props.results.length == 0)
      return (
        <div style={styles.resultBox}>
          <p>Nothing yet in the wishlist</p>
          <p>Try the search and add some items to the wishlist</p>
        </div>
      );

    return (
      <div style={styles.resultBox}>
        {_.map(this.props.results, (item, ind) => {
          return (
            <Media key={"result-" + ind} style={{ marginTop: 15 }}>
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
                    <a
                      href="#"
                      onClick={() => this.props.removeFromWishList(item)}
                    >
                      <i className="fa fa-heart" aria-hidden="true">
                        &nbsp;Remove from wishlist
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

Results.propTypes = {
  results: PropTypes.array,
  removeFromWishList: PropTypes.func.isRequired
};

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
