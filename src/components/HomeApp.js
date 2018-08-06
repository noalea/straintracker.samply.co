import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import SearchBar from "./SearchBar";
import Search from "./Search";

class HomeApp extends Component {

  state = {
  };

  componentDidMount() {

  };

  render() {
    return (
      <Router>
        <div className="app-container">
          <SearchBar />
          <div className={'content'}>
            <Route path="/search/:name" component={Search} />
          </div>
        </div>
      </Router>
    );
  }
}

export default HomeApp;
