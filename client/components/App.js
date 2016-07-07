import React from 'react';
import { Link } from 'react-router';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Creature Fighter</h1>
        <div>
          <img alt=" " type="image" src="http://www.maoartcorner.com/wp-content/uploads/2014/06/League-of-Fighters-Logo.png" />
        </div>
        <ul>
          <li><Link to="/splash">Home</Link></li>
          <li><Link to="/createCreature">Create Creature</Link></li>
          <li><Link to="/createWeapon">Create Weapon</Link></li>
          <li><Link to="/fight">Fight!</Link></li>
        </ul>


        {this.props.children}
      </div>
    );
  }
}
