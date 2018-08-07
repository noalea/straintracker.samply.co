import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SearchBar from "./SearchBar";
import Search from "./Search";
import StrainList from "./StrainList";

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
            <Route exact path="/" component={StrainList} />
            <Route path="/search/:name" component={Search} />
          </div>
        </div>
      </Router>
    );
  }
}

export default HomeApp;
