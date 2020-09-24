const { createuser } = require ('./user.controler');
const router =require('express').Router();

router.post('/', createuser);

module.exports = router ;