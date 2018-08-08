import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
        <img src={'./assets/search.png'} alt={''} />
        <input type={'text'} onChange={this.typing.bind(this)} placeholder={'Search a Strain...'} />
      </div>
    );
  }
}

export default withRouter(SearchBar);
