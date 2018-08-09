import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
const site = window.location.origin;

class SearchBar extends Component {

  state = {
    didType: false
  };

  typing() {
    let val, link;
    val = $(".search-bar input").val();
    if (this.state.didType && val === '') {
      this.props.history.push('/');
    } else {
      link = "/search/" + val;
      this.props.history.push(link);
      this.setState(() => {
        return {
          didType: true
        }
      });
    }

  };

  render() {
    return (
      <div className="search-bar">
        <img src={site + '/assets/search.png'} alt={''} />
        <input type={'text'} onChange={this.typing.bind(this)} placeholder={'Search a Strain...'} />
      </div>
    );
  }
}

export default withRouter(SearchBar);
