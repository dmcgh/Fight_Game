import React from 'react';

class CreateCreature extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: '' };
    this.uploadImage = this.uploadImage.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {

  }

  update(e) {
    const name = this.refs.creatureNm.value;
    const image = this.refs.creatureImgURL.value;
    const body = JSON.stringify({ name, image });
    fetch('//localhost:3333/creature/createCreature',
    { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then((r) => {
      this.setState({ image: '' });
    });
    e.preventDefault();
  }

  uploadImage(e) {
    // this.setState({ image: this.refs.creatureImgURL.value });
    this.setState({ image: this.refs.creatureImgURL.value });
    console.log('Trying to upload image...');
    e.preventDefault();
  }

  render() {
    console.log("In the creature render!");
    return (
      <div>
        <h1>Creature Creator</h1>
        <div>
          <img alt='' ref='creatureImg' src= {this.state.image} type='image' height='200' width='275' />
        </div>
        <form>
          <div className='form-group'>
            <label>Creature Image</label>
            <input className='form-control' ref='creatureImgURL' type='text' />
            <button className='btn btn-upload' onClick={this.uploadImage}>Upload</button>
          </div>

          <div className='form-group'>
            <label>Name</label>
            <input className='form-control' ref='creatureNm' type='text' />
          </div>
          <button className='btn btn-primary' onClick={this.update}>Create</button>
        </form>
      </div>
    );
  }
}

export default CreateCreature;
