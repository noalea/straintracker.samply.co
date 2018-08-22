import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
const site = window.location.origin;

class StrainBlock extends Component {

  render() {

    let { name, eOne, eTwo, eThree } = this.props;

    return (
      <div className="strain-block wrapper">
        <p>{name}</p>
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
