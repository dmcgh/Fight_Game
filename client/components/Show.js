/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';

export default (props) => {
  return (
    <div>
      <figure>
        <img alt='' data-value={props.value} data-type={props.type} data-id={props.Obj._id} data-image={props.Obj.image} data-name={props.Obj.name} onClick={props.pickfighter} src={props.Obj.image} type='image' height='100' width='100' />
        <figcaption> {props.Obj.name}</figcaption>
      </figure>
    </div>
);
};
