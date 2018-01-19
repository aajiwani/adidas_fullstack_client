import React, { Component } from "react";
import { Grid, Row, Col, Button, Glyphicon } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBox from "../Components/SearchBox";
import SearchResults from "../Components/SearchResults";

export default class SearchProducts extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      productName: ""
    };
  }

  doSearch(productName) {
    this.setState({ productName: encodeURIComponent(productName) });
  }

  render() {
    return (
      <Grid>
        <Row className="row">
          <Col
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 1,
              paddingRight: 10
            }}
          >
            <Link to="/wishlist">
              <Button bsStyle="warning" bsSize="small">
                <Glyphicon glyph="star" />
              </Button>
            </Link>
          </Col>
          <Col>
            <SearchBox onSearch={this.doSearch.bind(this)} />
          </Col>
        </Row>
        <Row className="row" style={{ flex: 1 }}>
          <SearchResults searchTerm={this.state.productName} />
        </Row>
      </Grid>
    );
  }
}
