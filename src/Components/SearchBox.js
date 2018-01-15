import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SearchBox extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      value: '',
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  searchProduct(productName) {
    if (this.props.onSearch) this.props.onSearch(productName);
  }

  handleKeyPress(e) {
    if (_.isEqual(e.key, 'Enter')) {
      return this.state.value.length && this.searchProduct(this.state.value);
    }
  }

  clearTextField(e) {
    this.setState(
      {
        value: '',
      },
      () => {
        this.searchBox.focus();
      }
    );
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <div className="form-group has-feedback has-clear">
            <input
              type="text"
              className="form-control"
              placeholder="Start typing the product names ..."
              value={this.state.value}
              onKeyPress={this.handleKeyPress.bind(this)}
              onChange={this.handleChange.bind(this)}
              ref={inst => (this.searchBox = inst)}
            />
            <span
              className={
                'form-control-clear glyphicon glyphicon-remove form-control-feedback ' +
                (!this.state.value.length ? 'hidden' : '')
              }
              onClick={this.clearTextField.bind(this)}
            />
          </div>
          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                this.state.value.length && this.searchProduct(this.state.value)
              }
            >
              Search
            </button>
          </span>
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  onSearch: PropTypes.func,
};
