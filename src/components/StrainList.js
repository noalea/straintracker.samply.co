import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class StrainList extends Component {

  state = {
  };

  componentDidMount() {
  };

  render() {
    return (
      <div className="strain-list">
        <h1>Strain List</h1>
      </div>
    );
  }
}

export default withRouter(StrainList);
