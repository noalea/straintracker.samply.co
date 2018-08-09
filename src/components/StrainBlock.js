import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
const site = window.location.origin;

class StrainBlock extends Component {

  render() {

    let { name, eOne, eTwo, eThree } = this.props;

    return (
      <div className="strain-block wrapper">
        <Link to={'/strains/' + name.replace(/\s+/g, '-').toLowerCase()}>{name}</Link>
        <div className={'effects'}>
          <div className={'tooltip-holder'}><span className={'tooltip'}>{eOne}</span><img src={site + '/assets/effects/' + eOne + '-sm.png'} alt={''} /></div>
          <div className={'tooltip-holder'}><span className={'tooltip'}>{eTwo}</span><img src={site + '/assets/effects/' + eTwo + '-sm.png'} alt={''} /></div>
          <div className={'tooltip-holder'}><span className={'tooltip'}>{eThree}</span><img src={site + '/assets/effects/' + eThree + '-sm.png'} alt={''} /></div>
        </div>
      </div>
    );
  }
}

export default withRouter(StrainBlock);
