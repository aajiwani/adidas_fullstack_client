import React, {Component} from "react";
import {Grid, Row, Col, Button, Glyphicon} from "react-bootstrap";
import _ from "lodash";
import SearchBox from "../Components/SearchBox";
import SearchResults from "../Components/SearchResults";

export default class SearchProducts extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      productName: "",
    };
  }

  doSearch(productName) {
    this.setState({productName: encodeURIComponent(productName)});
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
              paddingRight: 10,
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
        <Row className="row" style={{flex: 1}}>
          <SearchResults searchTerm={this.state.productName} />
        </Row>
      </Grid>
    );
  }
}
