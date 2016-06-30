/* eslint-disable func-names, no-param-reassign, consistent-return, no-underscore-dangle */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const creatureSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  wins: { type: Number, required: true, default: 0 },
  losses: { type: Number, required: true, default: 0 },
  health: { type: Number, default: 100, required: true },

});

// creatureSchema.methods.create = function (city, cb) {
//   if (this.money < city.amount) return cb();
//
//   this.money -= city.amount;
//   city.balance += city.amount;
//
//   this.cities.push(city._id);
//   city.people.push(this._id);
//
//   this.save(() => {
//     city.save(() => {
//       cb();
//     });
//   });
// };

module.exports = mongoose.model('Creature', creatureSchema);
