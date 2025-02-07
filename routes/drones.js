const { query } = require('express');
const express = require('express');
const router = express.Router();

// require the Drone model here
const DroneModel = require('../models/Drone.model.js');



router.get('/drones/list', (req, res, next) => {
  // Iteration #2: List the drones

  DroneModel.find()
  .then((drone) => {
    res.render('drones/list', {drone})
  })
  .catch((err) => {
    console.error(err);
  });
  

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone

  

  res.render('drones/create-form')

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
