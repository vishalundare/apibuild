const { pool } = require ('../../config/db')


module.exports = {
    createLocation:(data, callBack)=>{
        pool.query(`insert into locmaster (locname,product,full,empty,defectiv)
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
        pool.query(`select * from locmaster`,
        [],
        (error, results, fields)=>{
            if (error) {
                return callBack(error);
            }
            return callBack(null,results);
        });
    },
    getLocationById:(data, callBack)=>{
        pool.query(
            `select * from locmaster where id=?`,
            [data.id],
            (error, results, fields)=>{
                if (error){
                return callBack(error);
                }
                return (null, result);
            }
        );
    },
    updateLocation:(data, callBack)=>{
        pool.query(
            `updare locmaster set  locname=",product=?,full=?,empty=?,defectiv=? where id=?`,
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
            `delete from locmaster where id=?`
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