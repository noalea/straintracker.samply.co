import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Search extends Component {

  state = {
    search: ''
  };

  componentDidMount() {
  };

  render() {
    let name = this.props.match.params.name;
    return (
      <div className="search">
        <h1>Search</h1>
        <p>{name}</p>
      </div>
    );
  }
}

export default withRouter(Search);
