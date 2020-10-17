const { createLocation, getLocation, getLocationById, updateLocation, deleteLocation } = require ('./location.service');

module.exports = {
    createLocation: (req, res) => {
        const body = req.body;
        createLocation(body, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:'Database Connection Error'
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        })
    },
    getLocation:(req, res)=>{
        getLocation((err, results)=>{
            if (err){
                console.log(err);
            }
            if (!results){
                res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            
            res.status(200).json({
                success:1,
                data:results
            })
           
        })
    },
    getLocationById:(req, res)=>{
        const id = req.params.id;
        getLocationById(id,(err, results)=>{
            if (err){
                console.log(err);
            }
            if (!results){
                res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            res.status(200).json({
                success:1,
                data:results
            })
           
        })
    },
    updateLocation:(req, res)=>{
        const body = req.body;
        updateLocation(body,(err, results)=>{
            if (err){
                console.log(err);
            }
            if (!results){
                res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            res.status(200).json({
                success:1,
                data:results
            })
           
        })
    },
    deleteLocation:(req, res)=>{
        const body = req.body;
        deleteLocation(body,(err, results)=>{
            if (err){
                console.log(err);
            }
            if (!results){
                res.status(500).json({
                    success:0,
                    message:"No Record Found to delete"
                })
            }
            res.status(200).json({
                success:1,
                data:results
            })
           
        })
    }
    
}