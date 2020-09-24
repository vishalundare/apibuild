const pool = require('../../config/db');



module.exports = {
    create:(data, callback)=>{
        pool.query(
                `insert into users(firstname,lastname,email,password,mobile)
                values(?,?,?,?,?)`,
                [
                    data.firstname,
                    data.lastname,
                    data.email,
                    data.password,
                    data.mobile
                ],
                (error,results,fields)=>{
                  if (error){
                      return callback(error);
                  }   
                  return callback(null,results);
            });
    },
    getUsers:callBack=>{
        pool.query(`
        select id,firstname,lastname,email,mobile from users`,
        [],
        ( error, results, fields)=>{
            if (error){
                callBack(error);
            }
            return callBack(null, results);
        }
        )
    },
    getUserByUserid:(id, callBack) => {
        pool.query(
            `select id,firstname,lastname,email,mobile from users where id = ?`,
            [id],
            (error, results, fileds)=> {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
            )
    },
    updateUsers:(data, callBack) => { 
        pool.query(`update users set firstname=?, lastname=?,email=?,password=?, mobile=? where id = ?`,
            [
                data.firstname,
                data.lastname,
                data.email,
                data.password,
                data.mobile,
                data.id
            ],
            (error, results, fileds)=>{
                if (error){
                    callBack(error);
                }
                return callBack(null,results);
                
            }
        )
    },
    deleteUser:(data, callBack) => {
        pool.query(
            `delete from users where id = ?`,
            [data.id],
            (error, results, fileds)=> {
                if (error) {
                   return callBack(error);
                }
                return callBack(null, results);
            }
            )
    },
}