import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import searchImg from '../assets/search.png';

class SearchBar extends Component {

  state = {
  };

  componentDidMount() {
  };

  render() {
    return (
      <div className="search-bar">
        <img src={searchImg} />
        <input type={'text'} placeholder={'Search a Strain...'} />
      </div>
    );
  }
}

export default SearchBar;
