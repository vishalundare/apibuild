const { createUser, getUserByUserid, getUsers, deleteUser, updateUsers} = require ('./user.controler');
const router =require('express').Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserByUserid);
router.patch('/', updateUsers);
router.delete('/', deleteUser);


module.exports = router ;