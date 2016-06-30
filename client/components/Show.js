/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';

export default (props) => {
    return (
    <div ref='Obj'>
      <figure>
      <img alt=''  data-showdata-id={props.Obj._id} data-image={props.Obj.image} data-name={props.Obj.name} onClick={props.pickfighter}  src= {props.Obj.image} type='image' height='100' width='100' />
      <figcaption> {props.Obj.name}</figcaption>
      </figure>
    </div>




)};
