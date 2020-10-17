const { createLocation, getLocation, getLocationById, deleteLocation, updateLocation } = require ('./location.controler')
const router =require('express').Router();

router.post ('/', createLocation);
router.get ('/', getLocation);
router.get ('/:id', getLocationById);
router.patch ('/', updateLocation);
router.delete ('/', deleteLocation);

module.exports = router; 