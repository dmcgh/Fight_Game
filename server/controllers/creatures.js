/* eslint-disable new-cap, brace-style */

import express from 'express';
import Creature from '../models/creature';

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Creature.find((err, creatures) => {res.send({ creatures })
  console.log('Creatures:', creatures);

}
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

router.post('/createCreature', (req, res) => {
  console.log('Creating a new creature: ', req.body);
  const p = new Creature(req.body);
  p.save((err) => {
    console.log('err: ', err);
    res.send({ p });
  });
});

router.put('/:id/update', (req, res) => {
  if (req.body.result === 'win') {
    Creature.findById(req.params.id, (err, creatureToFind) => {
      let { wins } = creatureToFind;
      wins += wins;
      Creature.findByIdAndUpdate(req.params.id, { wins }, (err1, updatedCreature) => {
        // creature.wins +=1;
        res.send({ updatedCreature });
      });
    });
  }
  else {
    Creature.findById(req.params.id, (err, creatureToFind) => {
      let { losses } = creatureToFind;
      losses += losses;
      Creature.findByIdAndUpdate(req.params.id,
        { losses }, { new: true }, (err1, updatedCreature) => {
          res.send({ updatedCreature });
        });
    });
  }
});
