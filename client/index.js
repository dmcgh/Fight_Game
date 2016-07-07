import App from './components/App';
import Creature from './components/CreateCreature';
import Weapon from './components/CreateWeapon';
import Fight from './components/Fight';
import Home from './components/Home';
import Splash from './components/Splash';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
require('es6-promise').polyfill();
require('isomorphic-fetch');



render(
  <Router history={browserHistory}>
   <Route path="/" component={App}>
      <Route path="splash" component={Splash} />
      <Route path="createCreature" component={Creature} />
      <Route path="createWeapon" component={Weapon} />
      <Route path="fight" component={Fight} />
    </Route>
  </Router>
  , document.getElementById('root'));


  // <Router history={browserHistory}>
  //   <Route path="/" component={App}>
  //     <IndexRoute component={Home} />
  //     <Route path="createCreature" component={Creature} />
  //     <Route path="createWeapon" component={Weapon} />
  //     <Route path="fight" component={Fight} />
  //   </Route>
  // </Router>
  // , document.getElementById('root'));
