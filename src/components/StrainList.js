import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import StrainBlock from './StrainBlock';
import $ from 'jquery';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class StrainList extends Component {

  state = {
    strains: [],
    effectsOne: [],
    effectsTwo: [],
    effectsThree: []
  };

  componentWillMount() {
    cookies.set('uid', 1, { path: '/' });
    this.getStrains();
  };

  getStrains() {
    let self = this;
    let data = JSON.stringify({
      user: cookies.get('uid')
    });
    $.ajax({
      type: 'POST',
      url: 'http://codeyourfreedom.com/straintracker/php/getUserStrains.php',
      data: data
    })
    .done(function(data) {
      let d = JSON.parse(data);
      if (d[0] !== null) {
        self.setState(() => {
          return {
            strains: d[0],
            effectsOne: d[1],
            effectsTwo: d[2],
            effectsThree: d[3]
          }
        });
      }
    })
    .fail(function(err) {
      console.log(err);
    });
  }


  render() {

    let { strains, effectsOne, effectsTwo, effectsThree } = this.state;
    let slist = [];

    function RenderStrainList() {
      for (let i = 0; i < strains.length; i++) {
        slist.push(
          <StrainBlock
            key={i}
            name={strains[i]}
            eOne={effectsOne[i]}
            eTwo={effectsTwo[i]}
            eThree={effectsThree[i]}
          />
        );
      }
      return slist;
    }

    return (
      <div className="strain-list">
        <h1>Your Strains</h1>
        {RenderStrainList()}
      </div>
    );
  }
}

export default withRouter(StrainList);
