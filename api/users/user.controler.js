const { create, getUserByUserid, getUsers, updateUsers, deleteUser } = require('./user.service');
const { genSaltSync, hashSync } = require('bcrypt');
const pool = require('../../config/db');
// const pool = require('../../config/db');

module.exports = {
    createuser: (req, res) => {
        const body = req.body;
        console.log(body)
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'Database Connection Error'
                });
            };
            return res.status(200).json({
                success: 1,
                data: results
            })
        });
    },
    getUserByUserid: (req, res) => {
        const id = req.params.id;
        getUserByUserid(id,(err,results)=>{
            if (err){
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success:0,
                    message:"Record Not Found"
                })
            }
            return res.json({
                success:1,
                data:results
            })
        })
    },
    getUsers:(req, res) => {
        getUsers((err, results) => {
            if (err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data:results
            });
        });
    },
    updateUsers:(req,res)=>{
        const body= body.req;
        const salt=genSaltSync(10);
        body.password= hashSync(body.password, salt);
        updateUsers(body, (err, results)=>{
            if (err){
                console.log(err);
                return;
            }
            if (!results){
                res.json({
                    success:0,
                    message:"Record not Found"
                })
            }
            return res.json({
                success:1,
                message:"Record Updated Successfuly"
            });
        });
    },
    deleteUser:(req,res)=>{
        const data=req.body;
        deleteUser(data, (err, results)=>{
            if(err){
                console.log(err);
                return ;
            }
            if (!results){
                res.json({
                    success:0,
                    message:"Record not Found"
                })
            }
            return res.json({
                success:1,
                message:"Record Deleted Successfully"
            })
        })
    }
}