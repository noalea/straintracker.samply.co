import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import StrainBlock from './StrainBlock';
import $ from 'jquery';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class Search extends Component {

  state = {
    search: '',
    strains: [],
    effectsOne: [],
    effectsTwo: [],
    effectsThree: [],
    empty: false
  };

  componentWillMount() {
    this.getSearched();
  }

  componentDidMount() {
    $(".search-bar input").val(this.props.match.params.name);
  }

  componentDidUpdate() {
    if (this.state.search !== this.props.match.params.name) {
      this.setState(() => {
        return {
          empty: false,
          search: this.props.match.params.name
        }
      });
      this.getSearched();
    }
  }

  getSearched() {
    this.setState(() => {
      return {
        search: this.props.match.params.name
      }
    });
    let self = this;
    let data = JSON.stringify({
      user: cookies.get('st_uid'),
      search: this.props.match.params.name
    });
    $.ajax({
      type: 'POST',
      url: 'https://straintracker.samply.co/php/getSearched.php',
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
      } else {
        self.setState(() => {
          return {
            empty: true
          }
        });
      }
    })
    .fail(function(err) {
      console.log(err);
    });
  }

  toAdd() {
    let link = '/add/' + $(".search-bar input").val();
    this.props.history.push(link);
  }

  render() {
    let { strains, effectsOne, effectsTwo, effectsThree, empty } = this.state;
    let slist = [];

    function RenderStrainList() {
      if (empty) {
        slist.push(
          <h3 key={1}>You can add that strain below.</h3>
        );
        return slist;
      }
      else if (strains.length === 0) {
        slist.push(
          <h3 key={1}>Searching...</h3>
        );
        return slist;
      }
      else {
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
      }
      return slist;
    }
    return (
      <div className="search">
        {RenderStrainList()}
        <hr />
        <button onClick={this.toAdd.bind(this)} className={'wrapper whover add-btn'}>Add Strain</button>
      </div>
    );
  }
}

export default withRouter(Search);
