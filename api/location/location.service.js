const pool = require ('../../config/db');


module.exports = {
    createLocation:(data, callBack)=>{
        
        pool.query(`insert into locmaster (locname,product,full,empty,defective)
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
        );
    },
    getLocation:(callBack)=>{
        
        pool.query(`select id,locname,product,full,empty,defective from locmaster`,
        [],
        (error, results, fields)=>{
            if (error) {
                return callBack(error);
            }
            return callBack(null,results);
        });
    },
    getLocationById:(id, callBack)=>{
        pool.query(`select id,locname,product,full,empty,defective from locmaster where id=?`,
            [id],
            (error, results, fields)=>{
                console.log(results)
                if (error){
                return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateLocation:(data, callBack)=>{
        pool.query(
            `update locmaster set  locname=?,product=?,full=?,empty=?,defective=? where id=?`,
        [
            data.locname,
            data.product,
            data.full,
            data.empty,
            data.defective,
            data.id
        ],
        (error, results, fields)=>{
            if (error){
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteLocation:(data, callBack)=>{
        pool.query(
            `delete from locmaster where id=?`,
            [data.id],
            (error, results, fields)=>{
                if (error){
                    return callBack(error);
                }
                return callBack(null, results)
            }
        );
    }
    
}