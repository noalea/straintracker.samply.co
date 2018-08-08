import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';

class StrainBlock extends Component {

  render() {

    let { name, eOne, eTwo, eThree } = this.props;

    return (
      <div className="strain-block">
        <Link to={'/strains/' + name.replace(/\s+/g, '-').toLowerCase()}>{name}</Link>
        <div className={'effects'}>
          <img src={'./assets/effects/' + eOne + '-sm.png'} alt={''} />
          <img src={'./assets/effects/' + eTwo + '-sm.png'} alt={''} />
          <img src={'./assets/effects/' + eThree + '-sm.png'} alt={''} />
        </div>
      </div>
    );
  }
}

export default withRouter(StrainBlock);
