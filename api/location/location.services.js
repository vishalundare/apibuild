const { pool } = require ('../../config/db')


module.exports = {
    createLocation:(data,callBack)=>{
        pool.query(
            `insert into locmaster(locname,product,ful,empty,defectiv)
            values (?,?,?,?,?)`,
            [
                data.locname,
                data.product,
                data.full,
                data.empty,
                data.defective
            ],
            (error,results,fields)=>{
                if (error){
                    return callBack(error);
                }
                return callBack(null,results);
            }

        )
    },
    
}