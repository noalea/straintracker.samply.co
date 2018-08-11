import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const site = window.location.origin;


class AddStrain extends Component {

  state = {

  };

  componentDidMount() {
    setTimeout(function() {
      $(".add").addClass("show");
    }, 100);
  }

  goBack() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className={'full-screen'}>
        <div className={'add'}>
          <p className={'section-header-sm'}>Name of Strain</p>
          <input type={'text'} defaultValue={this.props.match.params.name} />
          <p className={'section-header-sm second'}>How did you feel? Choose three.</p>
          <div className={'effects'}>
            <div className={'tooltip-holder'}><span className={'tooltip'}>paranoid</span><img src={site + '/assets/effects/paranoid.png'} alt={''} /></div>
            <div className={'tooltip-holder'}><span className={'tooltip'}>anxious</span><img src={site + '/assets/effects/anxious.png'} alt={''} /></div>
            <div className={'tooltip-holder'}><span className={'tooltip'}>dizzy</span><img src={site + '/assets/effects/dizzy.png'} alt={''} /></div>
            <div className={'tooltip-holder'}><span className={'tooltip'}>headache</span><img src={site + '/assets/effects/headache.png'} alt={''} /></div>
            <div className={'tooltip-holder'}><span className={'tooltip'}>sleepy</span><img src={site + '/assets/effects/sleepy.png'} alt={''} /></div>
          </div>
          <div className={'effects'}>
            <div className={'tooltip-holder'}><span className={'tooltip'}>relaxed</span><img src={site + '/assets/effects/relaxed.png'} alt={''} /></div>
            <div className={'tooltip-holder'}><span className={'tooltip'}>creative</span><img src={site + '/assets/effects/creative.png'} alt={''} /></div>
            <div className={'tooltip-holder'}><span className={'tooltip'}>focused</span><img src={site + '/assets/effects/focused.png'} alt={''} /></div>
            <div className={'tooltip-holder'}><span className={'tooltip'}>happy</span><img src={site + '/assets/effects/happy.png'} alt={''} /></div>
            <div className={'tooltip-holder'}><span className={'tooltip'}>euphoric</span><img src={site + '/assets/effects/euphoric.png'} alt={''} /></div>
          </div>
          <button className={'wrapper whover add-btn'}>Add Strain</button>
          <button onClick={this.goBack.bind(this)} className={'wrapper whover nevermind-btn'}>Nevermind</button>
        </div>
      </div>
    );
  }
}

export default withRouter(AddStrain);
