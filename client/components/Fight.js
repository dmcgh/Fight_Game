/* eslint-disable max-len, no-underscore-dangle */

import React from 'react';
import Show from './Show';

class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creatures: [], weapons: [], creature1: '',
    creature2: '', weapon1: '', weapon2: '', currentPlayer: '1', player1Health: 0, player2Health: 0, timer: 0 };

    this.update = this.update.bind(this);
    this.pickfighters = this.pickfighters.bind(this);
    this.switchPlayer = this.switchPlayer.bind(this);
    this.startfight = this.startfight.bind(this);
    this.attack = this.attack.bind(this);
  }

  componentDidMount() {
    fetch('//localhost:3333/creature',
    { method: 'get', headers: { 'Content-Type': 'application/json' } })
    .then(creaturesObject => creaturesObject.json())
    .then((creaturesObject) => {
      console.log('Show all creatures', creaturesObject.creatures);
      this.setState({ creatures: creaturesObject.creatures });
    });

    fetch('//localhost:3333/weapon',
    { method: 'get', headers: { 'Content-Type': 'application/json' } })
    .then(weaponsObject => weaponsObject.json())
    .then((weaponsObject) => {
      console.log('Show all weapons', weaponsObject.weapons);
      this.setState({ weapons: weaponsObject.weapons });
    });
  }

  update() {
  }

  pickfighters(event) {
    const type = event.currentTarget.getAttribute('data-type');
    console.log('current player and input type: ', this.state.currentPlayer, ' ', type);

    switch (this.state.currentPlayer) {
      case '1':
        console.log('Pick creature and weapon for player 1', event);
        if (type === 'monster') {
          console.log('monster selected');
          const Creature1Obj = { name: event.currentTarget.getAttribute('data-name'),
          ID: event.currentTarget.getAttribute('data-id'),
          image: event.currentTarget.getAttribute('data-image'),
          health: event.currentTarget.getAttribute('data-value')};
          console.log('changing state to current monster: ', Creature1Obj);
          this.setState({ creature1: Creature1Obj, player1Health: Creature1Obj.health });
        } else if (type === 'weapon') {
          console.log('weapon selected');
          const Weapon1Obj = { name: event.currentTarget.getAttribute('data-name'),
          ID: event.currentTarget.getAttribute('data-id'),
          image: event.currentTarget.getAttribute('data-image'),
          attack: event.currentTarget.getAttribute('data-value') };
          console.log('changing state to current weapon: ', Weapon1Obj);
          this.setState({ weapon1: Weapon1Obj });
        }

        break;

      case '2':
        console.log('Pick creature and weapon for player 2', event);
        if (type === 'monster') {
          console.log('monster selected');
          const Creature2Obj = { name: event.currentTarget.getAttribute('data-name'),
          ID: event.currentTarget.getAttribute('data-id'),
          image: event.currentTarget.getAttribute('data-image'),
          health: event.currentTarget.getAttribute('data-value')};
          console.log('changing state to current monster: ', Creature2Obj);
          this.setState({ creature2: Creature2Obj, player2Health: Creature2Obj.health });
        } else if (type === 'weapon') {
          console.log('weapon selected');
          const Weapon2Obj = { name: event.currentTarget.getAttribute('data-name'),
          ID: event.currentTarget.getAttribute('data-id'),
          image: event.currentTarget.getAttribute('data-image'),
          attack: event.currentTarget.getAttribute('data-value') };
          console.log('changing state to current weapon: ', Weapon2Obj);
          this.setState({ weapon2: Weapon2Obj });
        }
        break;
    }
  }

  attack() {
    let currentAttack = 0;
    switch (this.state.currentPlayer) {
      case '1':
        currentAttack = Math.floor(Math.random() * this.state.weapon1.attack);
        console.log('current player: ', this.state.currentPlayer, 'attacks with: ', currentAttack);
        console.log('player 2 has ', this.state.player2Health - currentAttack, ' health left');
      break;
      case '2':
        currentAttack = Math.floor(Math.random() * this.state.weapon2.attack);
        console.log('current player: ', this.state.currentPlayer, 'attacks with: ', currentAttack);
        console.log('player 1 has ', this.state.player1Health - currentAttack, ' health left');
      break;

      default:
        break;
    }
  }

  startfight() {
    setInterval(() => {
      console.log("Attack");
      let currentAttack = 0;
      switch (this.state.currentPlayer) {
        case '1':
          currentAttack = Math.floor(Math.random() * this.state.weapon1.attack);
          console.log('current player: ', this.state.currentPlayer, 'attacks with: ', currentAttack);
          console.log('player 2 has ', this.state.player2Health - currentAttack, ' health left');
          this.setState({ player2health: this.state.player2Health - currentAttack  });
          this.switchPlayer();
        break;
        case '2':
          currentAttack = Math.floor(Math.random() * this.state.weapon2.attack);
          console.log('current player: ', this.state.currentPlayer, 'attacks with: ', currentAttack);
          console.log('player 1 has ', this.state.player1Health - currentAttack, ' health left');
          this.setState({ player1Health: this.state.player1Health - currentAttack });
          this.switchPlayer();
        break;

        default:
          break;
      }
    }, 300);

  }

  switchPlayer() {
    if (this.state.currentPlayer === '1') {
      this.setState({ currentPlayer: '2' });
    }
    else {
      this.setState({ currentPlayer: '1' });
    }
  }
  render() {
    console.log('In the Fight render!', this.state.creatures);
    return (
      <div>
        <h1>Fight Page</h1>
        <div>
          <img alt=" " ref="creature1Img" src={this.state.creature1.image} type="image" height="200" width="275" />
          <img alt=" " ref="creature2Img" src={this.state.creature2.image} type="image" height="200" width="275" />
        </div>
        <div>
          <img alt=" " ref="weapon1Img" src={this.state.weapon1.image} type="image" height="200" width="275" />
          <img alt=" " ref="weapon2Img" src={this.state.weapon2.image} type="image" height="200" width="275" />
        </div>
          <div>
          <button className="btn btn-fight" onClick={this.startfight}>Start Fight</button>
          <button className="btn btn-switch" onClick={this.switchPlayer}>Switch Players</button>
          </div>
        <div>
          <div className="col-xs-4">
            {this.state.creatures.map(c => <Show type="monster" key={c._id} value={c.health} Obj={c} pickfighter={this.pickfighters} />)}
          </div>
          <div className="col-xs-4">
            {this.state.weapons.map(w => <Show type="weapon" key={w._id} Obj={w} value={w.attack} pickfighter={this.pickfighters} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Fight;
