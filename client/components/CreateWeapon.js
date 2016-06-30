import React from 'react';

class CreateWeapon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: '' };
    this.uploadImage = this.uploadImage.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {

  }

  update(e) {
    const name = this.refs.weaponNm.value;
    const image = this.refs.weaponImgURL.value;
    const attack = this.refs.weaponAtk.value;
    console.log('In the Create Weapons update!: ', name, image, attack);
    const body = JSON.stringify({ name, image, attack });
    fetch(`//localhost:3333/weapon/createWeapon`, { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then((r) => {
      console.log('r is: ', r);
      this.setState({ image:'' });
    });
    e.preventDefault();
  }

  uploadImage(e) {
    // this.setState({ image: this.refs.creatureImgURL.value });
    this.setState({ image: this.refs.weaponImgURL.value });
    e.preventDefault();
  }

  render() {
    console.log("In the weapons render!");
    return (
      <div>
        <h1>Weapons Creator</h1>
        <div>
          <img ref='weaponImg' src={this.state.image} type='image' height='200' width='275' />
        </div>
        <form>
          <div className='form-group'>
            <label>Weapon Image</label>
            <input className='form-control' ref='weaponImgURL' type='text' />
            <button className='btn btn-upload' onClick={this.uploadImage}>Upload</button>
          </div>
          <div className='form-group'>
            <label>Name</label>
            <input className='form-control' ref='weaponNm' type='text' />
          </div>
          <div className='form-group'>
            <label>Max Attack</label>
            <input className='form-control' ref='weaponAtk' type='Number' min='1' max='10' />
          </div>
          <button className='btn btn-primary' onClick={this.update}>Create</button>
        </form>
      </div>
    );
  }
}

export default CreateWeapon;
