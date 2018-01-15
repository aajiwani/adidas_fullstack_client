import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import SearchProducts from './Pages/SearchProducts';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={8} xsOffset={3} md={6} mdOffset={3}>
            <h3>Welcome to Adidas Case Study</h3>
          </Col>
        </Row>
        <Row className="row">
          <SearchProducts />
        </Row>
      </Grid>
    );
  }
}
