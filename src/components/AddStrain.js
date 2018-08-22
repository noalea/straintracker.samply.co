import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

  goHome() {
    this.props.history.push('/');
  }

  selectEffect(e) {
    let id = e.target.id;
    if (id.split('-')[0] === 'effect') {
      $(e.target.parentElement).toggleClass("selected");
    }
  }

  addStrain() {
    // reset
    $(".add .section-header-sm.first, .add .section-header-sm.second span").removeClass('empty');
    // Check if name is empty
    let name = $(".add input").val(),
        valid = true,
        effectsLength = $(".effects .tooltip-holder.selected").length,
        effectsArr = [];
    if (name === '') {
      $(".add .section-header-sm.first").addClass('empty');
      valid = false;
    }
    if (effectsLength !== 3) {
      $(".add .section-header-sm.second span").addClass('empty');
      valid = false;
    }
    if (valid) {
      $.each($(".effects .tooltip-holder.selected"), function(i, obj) {
        let id = $(obj)[0].children[1].id.split("-")[1];
        effectsArr.push(id);
      });
      this.submitStrain(name, effectsArr);
    }
  }

  submitStrain(name, effectsArr) {
    let self = this;
    let data = JSON.stringify({
      user: cookies.get('st_uid'),
      strainName: name,
      effectsArr: effectsArr
    });
    $.ajax({
      type: 'POST',
      url: 'http://codeyourfreedom.com/straintracker/php/addStrain.php',
      data: data
    })
    .done(function(data) {
      let d = JSON.parse(data);
      if (d) {
        $(".add").addClass("success");
        setTimeout(function() {
          self.goHome();
        }, 2000);
      } else {
        $(".add").addClass("fail");
        setTimeout(function() {
          self.goHome();
        }, 2000);
      }
    })
    .fail(function(err) {
      console.log(err);
    });
  }

  render() {
    return (
      <div className={'full-screen'}>
        <div className={'add'}>
          <p className={'section-header-sm first'}>Name of Strain</p>
          <input type={'text'} defaultValue={this.props.match.params.name} />
          <p className={'section-header-sm second'}>How did you feel? <span>Choose three.</span></p>
          <div className={'effects'}>
            <div onClick={this.selectEffect.bind(this)} className={'tooltip-holder'}><span className={'tooltip'}>paranoid</span><img src={site + '/assets/effects/paranoid.png'} alt={''} id={'effect-1'} /></div>
            <div onClick={this.selectEffect.bind(this)} className={'tooltip-holder'}><span className={'tooltip'}>anxious</span><img src={site + '/assets/effects/anxious.png'} alt={''} id={'effect-2'} /></div>
            <div onClick={this.selectEffect.bind(this)} className={'tooltip-holder'}><span className={'tooltip'}>dizzy</span><img src={site + '/assets/effects/dizzy.png'} alt={''} id={'effect-3'} /></div>
            <div onClick={this.selectEffect.bind(this)} className={'tooltip-holder'}><span className={'tooltip'}>headache</span><img src={site + '/assets/effects/headache.png'} alt={''} id={'effect-4'} /></div>
            <div onClick={this.selectEffect.bind(this)} className={'tooltip-holder'}><span className={'tooltip'}>sleepy</span><img src={site + '/assets/effects/sleepy.png'} alt={''} id={'effect-5'} /></div>
          </div>
          <div className={'effects'}>
            <div onClick={this.selectEffect.bind(this)} className={'tooltip-holder'}><span className={'tooltip'}>relaxed</span><img src={site + '/assets/effects/relaxed.png'} alt={''} id={'effect-6'} /></div>
            <div onClick={this.selectEffect.bind(this)} className={'tooltip-holder'}><span className={'tooltip'}>creative</span><img src={site + '/assets/effects/creative.png'} alt={''} id={'effect-7'} /></div>
            <div onClick={this.selectEffect.bind(this)} className={'tooltip-holder'}><span className={'tooltip'}>focused</span><img src={site + '/assets/effects/focused.png'} alt={''} id={'effect-8'} /></div>
            <div onClick={this.selectEffect.bind(this)} className={'tooltip-holder'}><span className={'tooltip'}>happy</span><img src={site + '/assets/effects/happy.png'} alt={''} id={'effect-9'} /></div>
            <div onClick={this.selectEffect.bind(this)} className={'tooltip-holder'}><span className={'tooltip'}>euphoric</span><img src={site + '/assets/effects/euphoric.png'} alt={''} id={'effect-10'} /></div>
          </div>
          <button onClick={this.addStrain.bind(this)} className={'wrapper whover add-btn'}>Add Strain</button>
          <button onClick={this.goHome.bind(this)} className={'wrapper whover nevermind-btn'}>Nevermind</button>
        </div>
      </div>
    );
  }
}

export default withRouter(AddStrain);
