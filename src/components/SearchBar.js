import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import searchImg from '../assets/search.png';
import $ from 'jquery';

class SearchBar extends Component {

  state = {
  };

  typing() {
    let val, link;
    val = $(".search-bar input").val();
    link = "/search/" + val;
    this.props.history.push(link);
  };

  render() {
    return (
      <div className="search-bar">
        <img src={searchImg} />
        <input type={'text'} onChange={this.typing.bind(this)} placeholder={'Search a Strain...'} />
      </div>
    );
  }
}

export default withRouter(SearchBar);
