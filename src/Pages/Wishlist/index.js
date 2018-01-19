import React from "react";
import ReactPromisedComponent from "react-promised-component";
import LoadingComponent from "../../Components/Loading";
import ErrorComponent from "../../Components/Error";
import SuccessComponent from "./components/success_component.js";
import { GetWishlist } from "../../Lib/Api/WishlistApi";
import { Grid, Row, Col, Button, Glyphicon } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <Button bsStyle="warning" bsSize="small">
                <Glyphicon glyph="search" />
              </Button>
              <span> {"<- Go to search"}</span>
            </Link>
          </Col>
        </Row>
        <Row className="row" style={{ flex: 1 }}>
          <PromisedReactComponent
            promise_name={this.promiseGenerator.bind(this)}
            promise_name_params={this.promiseParams.bind(this)}
          />
        </Row>
      </Grid>
    );
  }
}
