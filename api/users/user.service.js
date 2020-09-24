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
                
                (error,result,fields)=>{
                  if (error){
                      return callback(error);
                  }   
                  return callback(null,results);
            });
    }
}