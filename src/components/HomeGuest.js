import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
const site = window.location.origin;

class HomeGuest extends Component {

  state = {
  };

  componentDidMount() {

  };

  render() {
    return (
      <Router>
        <div className={'landing full-screen'}>
          <img className={'flying-img first'} src={site + '/assets/landing-search.png'} alt={'strain tracker noa lea'} />
          <img className={'flying-img second'} src={site + '/assets/landing-add.png'} alt={'strain tracker noa lea'} />
          <img className={'flying-img third'} src={site + '/assets/landing-list.png'} alt={'strain tracker noa lea'} />
          <header>
            <h3>Your Personal</h3>
            <h1>Strain Tracker</h1>
            <p>Because everyone is different.</p>
            <Link to={'/join'}>
              <button className={'wrapper whover add-btn'}>Sign Up<small>Free Forever</small></button>
            </Link>
          </header>
        </div>
      </Router>
    );
  }
}

export default HomeGuest;
