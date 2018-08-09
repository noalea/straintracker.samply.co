import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Search extends Component {

  state = {
    search: '',
    strains: [],
    effectsOne: [],
    effectsTwo: [],
    effectsThree: []
  };

  componentWillMount() {
    this.getSearched();
  };

  componentDidUpdate() {
    // this.getSearched();
  }

  getSearched() {
    let self = this;
    let data = JSON.stringify({
      user: cookies.get('uid'),
      search: this.props.match.params.name
    });
    $.ajax({
      type: 'POST',
      url: 'http://codeyourfreedom.com/straintracker/php/getSearched.php',
      data: data
    })
    .done(function(data) {
      let d = JSON.parse(data);
      console.log(d);
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
    let name = this.props.match.params.name;
    return (
      <div className="search">
        <h1>Search</h1>
        <p>{name}</p>
        <hr />
        <button className={'wrapper whover'}>Add Strain</button>
      </div>
    );
  }
}

export default withRouter(Search);
