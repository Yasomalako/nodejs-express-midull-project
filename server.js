const express = require('express');
const app = express();
const port = 8081;

app.use(express.json({express:true}));
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send({message:"get info from server  successfully"});
})

app.listen(port,()=>{
    console.log(`server is connected to port:${port}`);
})