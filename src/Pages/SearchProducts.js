import React, { Component } from "react";
import { Grid, Row, Col, Button, Glyphicon } from "react-bootstrap";
import _ from "lodash";
import SearchBox from "../Components/SearchBox";

export default class SearchProducts extends Component {
  constructor(...args) {
    super(...args);
  }

  doSearch(productName) {
    console.log("Search Initiated with: " + productName);
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
            <Button
              bsStyle="warning"
              bsSize="small"
              onClick={() => {
                alert("Go to wishlist");
              }}
            >
              <Glyphicon glyph="star" />
            </Button>
          </Col>
          <Col>
            <SearchBox onSearch={this.doSearch.bind(this)} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
