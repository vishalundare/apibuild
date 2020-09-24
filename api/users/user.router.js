const { createuser, getUserByUserid, getUsers, deleteUser, updateUsers} = require ('./user.controler');
const router =require('express').Router();

router.post('/', createuser);
router.get('/', getUsers);
router.get('/:id', getUserByUserid);
router.patch('/', updateUsers);
router.delete('/', deleteUser);


module.exports = router ;