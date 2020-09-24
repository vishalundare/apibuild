require('dotenv').config();
const { urlencoded } = require('express');
const express = require ('express');
const app = express();
const serverport=process.env.serverport
const userRouter = require('./api/users/user.router')

app.use(express.json());
app.set(urlencoded,({extended:true}));

app.use('/api/users', userRouter)

// app.get('/api', (req, res)=>{
//     res.json({
//         success:1,
//         message:'This is rest api works'
//     });
// });

app.listen(serverport,()=>{
    console.log(`Server running on port http://localhost:${serverport}`);
});