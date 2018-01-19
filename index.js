import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import WishlistPage from "./src/Pages/Wishlist/index";
import SearchProducts from "./src/Pages/SearchProducts";

ReactDOM.render(
  <BrowserRouter>
    <Grid>
      <Row className="show-grid">
        <Col xs={8} xsOffset={3} md={6} mdOffset={3}>
          <h3>Welcome to Adidas Case Study</h3>
        </Col>
      </Row>
      <Row className="row">
        <Switch>
          <Route exact path="/" component={SearchProducts} />
          <Route exact path="/wishlist" component={WishlistPage} />
        </Switch>
      </Row>
    </Grid>
  </BrowserRouter>,
  document.getElementById("app")
);