import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SearchBar from "./SearchBar";
import Search from "./Search";
import StrainList from "./StrainList";
import AddStrain from "./AddStrain";

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
            <Route path="/add/:name" component={AddStrain} />
          </div>
        </div>
      </Router>
    );
  }
}

export default HomeApp;
