import React from 'react';
import { Link } from 'react-router';
//import Creature from './components/CreateCreature';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Creature Fighter</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/createCreature">Create Creature</Link></li>
          <li><Link to="/createWeapon">Create Weapon</Link></li>
          <li><Link to="/fight">Fight!</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
