/* eslint-disable new-cap */

import express from 'express';
import Weapon from '../models/weapon';

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Weapon.find((err, weapons) => res.send({ weapons })
  // console.log('Creatures:', creatures);
);
});

// router.post('/create', (req, res) => {
//   Person.findById(req.params.id, (err1, person) => {
//     City.findById(req.body.city, (err2, city) => {
//       person.purchase(city, () => {
//         res.redirect(`/people/${req.params.id}`);
//       });
//     });
//   });
// });

router.post('/createWeapon', (req, res) => {
  const p = new Weapon(req.body);
  p.save(() => {
    res.send({ p });
  });
});
