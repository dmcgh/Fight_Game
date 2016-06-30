import React from 'react';
import Show from './Show';

class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creatures: [], weapons: [], creature1: '',
    creature2: '', weapon1: '', weapon2: '', currentPlayer: '1' };

    this.update = this.update.bind(this);
this.pickfighters = this.pickfighters.bind(this);
  }

  componentDidMount() {
    fetch('//localhost:3333/creature',
    { method: 'get',  headers: { 'Content-Type': 'application/json' } })
    .then(creaturesObject => creaturesObject.json())
    .then((creaturesObject) => {

      console.log ("Show all creatures", creaturesObject.creatures);

      this.setState({ creatures: creaturesObject.creatures});
    });

    fetch('//localhost:3333/weapon',
    { method: 'get',  headers: { 'Content-Type': 'application/json' } })
    .then(weaponsObject => weaponsObject.json())
    .then((weaponsObject) => {

      console.log ("Show all weapons", weaponsObject.weapons);

      this.setState({ weapons: weaponsObject.weapons });
    });




  }

  update(e) {
    // const name = this.refs.creatureNm.value;
    // const image = this.refs.creatureImgURL.value;
    // const body = JSON.stringify({ name, image });
    // fetch('//localhost:3333/creature/createCreature',
    // { method: 'get', body, headers: { 'Content-Type': 'application/json' } })
    // .then(r => r.json())
    // .then((r) => {
    //   this.setState({ image: '' });
    // });
    // e.preventDefault();
  }

  pickfighters(event) {
  console.log ("PIck fight start", event);
  const Creature1Obj = {name: event.currentTarget.getAttribute('data-name'),
    ID: event.currentTarget.getAttribute('data-id'),
    image: event.currentTarget.getAttribute('data-image') };

  const Weapon1Obj = {name: event.currentTarget.getAttribute('data-name'),
    ID: event.currentTarget.getAttribute('data-id'),
    image: event.currentTarget.getAttribute('data-image') };

  // this.state.creature1 = this.refs.showcreaturedetails.refs.Obj.value;
  //
  // this.state.creature2 = this.refs.showcreaturedetails.refs.Obj.value;
  //
  //
  //
  // this.state.creature1 = this.refs.showweapondetails.refs.Obj.value;
  //
  // this.state.creature2 = this.refs.showweapondetails.refs.Obj.value;

    this.setState({creature1: Creature1Obj, weapon1: Weapon1Obj});
  console.log ("PIck fight");
  }


  render() {
    console.log("In the Fight render!", this.state.creatures);
    return (
      <div>
        <h1>Fight Page</h1>
        <div>
          <img alt='' ref='creature1Img' src= {this.state.creature1.image} type='image' height='200' width='275' />
          <img alt='' ref='weapon1Img' src= {this.state.weapon1.image} type='image' height='200' width='275' />
        </div>
        <div>
          <img alt=''  ref='creature2Img' src= {this.state.creature2.image} type='image' height='200' width='275' />
          <img alt=''  ref='weapon2Img' src= {this.state.weapon2.image} type='image' height='200' width='275' />
        </div>
          <button className='btn btn-fight' onClick={this.startfight}>Start Fight</button>
            <div>
              <div className='row'>
                  <div className='col-xs-6'>
                    {this.state.creatures.map(c => <Show ref='showcreaturedetails' key={c._id} Obj={c} pickfighter={this.pickfighters} />)}
                  </div>
                  <div className='col-xs-6'>
                    {this.state.weapons.map(w => <Show ref='showweapondetails' key={w._id} Obj={w} pickfighter={this.pickfighters} />)}
                  </div>
              </div>
        </div>
      </div>

    );
  }
}

export default Fight;


//

//
